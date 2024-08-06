import { useContext, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { PortfolioContext } from "@context/PortfolioContext";
import { colorsRandom } from "@utils/colors";

import LinkProjectsHome from "./LinkProjectsHome";
import ContentHome from "./ContentHome";
import LastVisitHome from "./LastVisitHome";
import styles from "./Homepage.module.css";

export default function HomePage() {
  const { setPrimaryColor, primaryColor } = useContext(PortfolioContext);
  const [events, setEvents] = useState([]);
  const [dataCountry, setDataCountry] = useState();

  const colorRandom = colorsRandom();

  const API_LASTVISIT =
    process.env.NEXT_PUBLIC_API_LASTVISIT || "https://geolocation.microlink.io";

  const API_NEXT_VISIT =
    process.env.NEXT_PUBLIC_API_NEXT_VISIT || "http://localhost:3000";

  const listenSSE = (callback) => {
    const eventSource = new EventSource("/api/get/visit");
    console.info("Listenting on SEE", eventSource);
    eventSource.onmessage = (event) => {
      const result = callback(event);
      if (result?.cancel) {
        console.info("Closing SSE");
        eventSource.close();
      }
    };

    return {
      close: () => {
        console.info("Closing SSE");
        eventSource.close();
      },
    };
  };

  useEffect(() => {
    setPrimaryColor(colorRandom);

    const fetchData = async () => {
      try {
        const geoResponse = await fetch(API_LASTVISIT);
        const geoData = await geoResponse.json();

        const {
          city: { name: cityName },
          country: { name: countryName, flag },
        } = geoData ?? { city: { name: "" }, country: { name: "", flag: "" } };

        // Realiza la segunda solicitud POST
        await fetch(`${API_NEXT_VISIT}/api/post/visit`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ city: cityName, country: countryName, flag }),
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();

    let r = undefined;
    r = listenSSE((event) => {
      console.log(event.data);
      const str = event.data;
      if (str.startsWith("{") && str.endsWith("}")) {
        const obj = JSON.parse(str);
        setDataCountry(obj);
        return { cancel: true };
      } else {
        setEvents((events) => [...events, event.data]);
        return undefined;
      }
    });
  }, []);

  return (
    <>
      <AnimatePresence>
        <article
          className={styles._container}
          style={{ background: primaryColor }}
        >
          <div className={styles._content}>
            <ContentHome primaryColor={primaryColor} />

            <div className={styles._content_grid}>
              <LinkProjectsHome
                primaryColor={primaryColor}
                setPrimaryColor={setPrimaryColor}
                colorsRandom={colorsRandom}
              />
            </div>
          </div>
          <LastVisitHome dataCountry={dataCountry} />
        </article>
      </AnimatePresence>
    </>
  );
}
