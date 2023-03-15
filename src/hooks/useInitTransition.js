import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function useInitTransition() {
  const [isFirstMount, setIsFirstMount] = useState(true);

  // const content = (isFirstMount) => ({
  //   animate: {
  //     transition: {
  //       staggerChildren: 0.1,
  //       delayChildren: isFirstMount ? 2.8 : 0,
  //     },
  //   },
  // });

  const router = useRouter();

  const handleRouteChange = () => {
    isFirstMount && setIsFirstMount(false);
  };
  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isFirstMount,
  };
}
