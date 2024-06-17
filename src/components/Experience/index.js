"use server";

import Social from "@components/Social";
import styles from "./Experience.module.css";

export default function Experience({ dataResponse }) {
  const contactData = dataResponse[1][0];
  const socialData = dataResponse[2][0];
  return (
    <div className={styles._experience_container}>
      <div className={styles._experience_wrap}>
        <div className={styles._timeline}></div>
        <div className={styles._code_wrap}>
          <h1 className={styles._dot}>{`<About/>`}</h1>
          <div data-line-nr="01" className={styles._lineCode}>
            <span className={styles._variables}>export default function</span>
            <span className={styles._functions}> Experience</span>
            <span className={styles._variables_name}>() </span>
            <span className={styles._variables}>{`${"{"}`}</span>
          </div>
          <div data-line-nr="02" className={styles._lineCode}>
            <br />
          </div>

          <div data-line-nr="03" className={styles._lineCode}>
            <span className={styles._variables}>const </span>
            <span className={styles._variables_name}>name</span>
            <span className={styles._variables}> = </span>
            <span className={styles._variables_value}>
              &quot;Abraham Serrano&quot;
            </span>
          </div>
          <div data-line-nr="04" className={styles._lineCode}>
            <span className={styles._variables}>const </span>
            <span className={styles._variables_name}>job</span>
            <span className={styles._variables}> = </span>
            <span className={styles._variables_value}>
              &quot;Front End Developer&quot;
            </span>
          </div>
          <div data-line-nr="05" className={styles._lineCode}>
            <span className={styles._variables}>const </span>
            <span className={styles._variables_name}>company </span>
            <span className={styles._variables}> = </span>
            <span className={styles._variables_value}>
              &quot;Televisa/Univision&quot;
            </span>
          </div>
          <div data-line-nr="06" className={styles._lineCode}>
            <span className={styles._variables}>const </span>
            <span className={styles._variables_name}>email</span>
            <span className={styles._variables}> = </span>
            <span className={styles._variables_value}>
              &quot;abrahamserrano96@gmail.com&quot;
            </span>
          </div>
          <div data-line-nr="05" className={styles._lineCode}>
            <span className={styles._variables}>const </span>
            <span className={styles._variables_name}>location</span>
            <span className={styles._variables}> = </span>
            <span className={styles._variables_value}>
              &quot;México City🇲🇽&quot;
            </span>
          </div>
          <div data-line-nr="06" className={styles._lineCode}>
            <br />
          </div>
          <div data-line-nr="07" className={styles._lineCode}>
            <span className={styles._dot}>...</span>
            <span className={styles._variables}>function </span>
            <span className={styles._functions}>workExperience</span>
            <span className={styles._variables_name}>() </span>
            <span className={styles._variables}>{`${"{"}`}</span>

            <br />
            <div data-line-nr="08" className={styles._lineCode}>
              <span className={styles._dot}>....</span>
              <span className={styles._variables}>return </span>
              <span className={styles._variables}>{`${"["}`}</span>
            </div>
            <div data-line-nr="09" className={styles._lineCode}>
              <span className={styles._dot}>......</span>
              <span className={styles._variables}>{`${"{"}`}</span>
            </div>
            <div data-line-nr="10" className={styles._lineCode}>
              <span className={styles._dot}>......</span>
              <span
                className={styles._variables_value}
              >{`${`"2023-now": "Front End Developer at Televisa/Univision"`}`}</span>
            </div>
            <div data-line-nr="11" className={styles._lineCode}>
              <span className={styles._dot}>......</span>
              <span
                className={styles._variables_value}
              >{`${`"2021-2022": "Front End Developer at Televisa Digital"`}`}</span>
            </div>
            <div data-line-nr="12" className={styles._lineCode}>
              <span className={styles._dot}>.....</span>
              <span className={styles._variables_value}>{`${`
          "2022-2022": "Rebranding Configurador Hyundai MX"`}`}</span>
            </div>
            <div data-line-nr="13" className={styles._lineCode}>
              <span className={styles._dot}>.....</span>
              <span className={styles._variables_value}>{`${`
          "2020-2021": "Front End Developer at EGOTI"`}`}</span>
            </div>
            <div data-line-nr="14" className={styles._lineCode}>
              <span className={styles._dot}>.....</span>
              <span className={styles._variables}>{`${"}"}`}</span>
            </div>
            <div data-line-nr="15" className={styles._lineCode}>
              <span className={styles._dot}>....</span>

              <span className={styles._variables}>{`${"]"}`}</span>
            </div>
            <div data-line-nr="16" className={styles._lineCode}>
              <span className={styles._dot}>...</span>
              <span className={styles._variables}>{`${"}"}`}</span>
            </div>
          </div>
          <div data-line-nr="17" className={styles._lineCode}>
            <br />
          </div>

          <div data-line-nr="18" className={styles._lineCode}>
            <span className={styles._dot}>...</span>
            <span className={styles._variables}>function </span>
            <span className={styles._functions}>education</span>
            <span className={styles._variables_name}>() </span>
            <span className={styles._variables}>{`${"{"}`}</span>

            <div data-line-nr="19" className={styles._lineCode}>
              <span className={styles._dot}>....</span>
              <span className={styles._variables}>return </span>
              <span className={styles._variables}>{`${"["}`}</span>
            </div>
            <div data-line-nr="20" className={styles._lineCode}>
              <span className={styles._dot}>......</span>
              <span className={styles._variables}>{`${"{"}`}</span>
              <span className={styles._variables_value}>{`${`
          "2014-2018": "Universidad Autónoma del Estado de Hidalgo"`}`}</span>
              <span className={styles._variables}>{`${"}"}`}</span>
            </div>
            <div data-line-nr="20" className={styles._lineCode}>
              <span className={styles._dot}>.....</span>

              <span className={styles._variables}>{`${"]"}`}</span>
            </div>
            <div data-line-nr="21" className={styles._lineCode}>
              <span className={styles._dot}>...</span>
              <span className={styles._variables}>{`${"}"}`}</span>
            </div>
          </div>
          <div data-line-nr="22" className={styles._lineCode}>
            <br />
          </div>

          <div data-line-nr="23" className={styles._lineCode}>
            <span className={styles._dot}>...</span>
            <span className={styles._variables}>function </span>
            <span className={styles._functions}>skills</span>
            <span className={styles._variables_name}>() </span>
            <span className={styles._variables}>{`${"{"}`}</span>

            <br />
            <div data-line-nr="24" className={styles._lineCode}>
              <span className={styles._dot}>....</span>

              <span className={styles._variables}>return </span>
              <span className={styles._variables}>{`${"["}`}</span>
            </div>
            <div data-line-nr="25" className={styles._lineCode}>
              <span className={styles._dot}>......</span>
              <span className={styles._variables}>{`${"{"}`}</span>
            </div>
            <div data-line-nr="26" className={styles._lineCode}>
              <span className={styles._dot}>........</span>
              <span className={styles._variables}>{`${"HTML"}: ✅,`}</span>
            </div>
            <div data-line-nr="27" className={styles._lineCode}>
              <span className={styles._dot}>........</span>
              <span className={styles._variables}>{`${"CSS"}:  ✅,`}</span>
            </div>
            <div data-line-nr="28" className={styles._lineCode}>
              <span className={styles._dot}>........</span>
              <span
                className={styles._variables}
              >{`${"JavaScript"}:  ✅,`}</span>
            </div>
            <div data-line-nr="29" className={styles._lineCode}>
              <span className={styles._dot}>........</span>
              <span
                className={styles._variables}
              >{`${"Typescript"}:  ✅,`}</span>
            </div>
            <div data-line-nr="30" className={styles._lineCode}>
              <span className={styles._dot}>........</span>
              <span className={styles._variables}>{`${"React"}:  ✅,`}</span>
            </div>
            <div data-line-nr="31" className={styles._lineCode}>
              <span className={styles._dot}>........</span>
              <span className={styles._variables}>{`${"Next.js"}:  ✅,`}</span>
            </div>
            <div data-line-nr="32" className={styles._lineCode}>
              <span className={styles._dot}>........</span>
              <span className={styles._variables}>{`${"Node.js"}:  ✅,`}</span>
            </div>
            <div data-line-nr="33" className={styles._lineCode}>
              <span className={styles._dot}>........</span>
              <span className={styles._variables}>{`${"Git"}:  ✅,`}</span>
            </div>
            <div data-line-nr="34" className={styles._lineCode}>
              <span className={styles._dot}>........</span>
              <span className={styles._variables}>{`${"MongoDB"}:  ✅,`}</span>
            </div>
            <div data-line-nr="35" className={styles._lineCode}>
              <span className={styles._dot}>........</span>
              <span
                className={styles._variables}
              >{`${"PostgreSQL"}:  ✅,`}</span>
            </div>
            <div data-line-nr="36" className={styles._lineCode}>
              <span className={styles._dot}>........</span>
              <span className={styles._variables}>{`${"Express"}:  ✅,`}</span>
            </div>
            <div data-line-nr="37" className={styles._lineCode}>
              <span className={styles._dot}>........</span>
              <span className={styles._variables}>{`${"Docker"}:  ✅,`}</span>
            </div>
            <div data-line-nr="38" className={styles._lineCode}>
              <span className={styles._dot}>........</span>
              <span className={styles._variables}>{`${"Jest"}:  ✅,`}</span>
            </div>
            <div data-line-nr="39" className={styles._lineCode}>
              <span className={styles._dot}>........</span>
              <span
                className={styles._variables}
              >{`${"React Testing Library"}:  ✅,`}</span>
            </div>
            <div data-line-nr="40" className={styles._lineCode}>
              <span className={styles._dot}>......</span>
              <span className={styles._variables}>{`${"}"}`}</span>
            </div>
            <div data-line-nr="41" className={styles._lineCode}>
              <span className={styles._dot}>....</span>

              <span className={styles._variables}>{`${"]"}`}</span>
            </div>
            <div data-line-nr="42" className={styles._lineCode}>
              <span className={styles._dot}>...</span>
              <span className={styles._variables}>{`${"}"}`}</span>
            </div>
          </div>
          <div data-line-nr="43" className={styles._lineCode}>
            <span className={styles._dot}>..</span>
            <span className={styles._variables}>{`${"}"}`}</span>
          </div>
        </div>
      </div>
      <div className={styles._code_wrap}>
        <Social contactData={contactData} socialData={socialData} />
      </div>
    </div>
  );
}
