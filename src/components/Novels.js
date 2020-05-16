import React from "react";
import { getNovels } from "../services/novelsService";
import Novel from "./Novel";

/** @typedef {object} Novel
 * @property {string} name
 * @property {string} link
 * @property {number} dateNumber
 * @property {Date} date
 */

function Novels() {
  const [isLoading, setLoading] = React.useState(false);
  const [novels, setNovels] = React.useState(/**@type {Novel[]}*/ ([]));

  const serverRequest = React.useCallback(async () => {
    setLoading(true);
    const novels = await getNovels();
    console.log(novels);
    // If nothing returned, retry in 1sec
    if (novels.length === 0) {
      setTimeout(() => {
        serverRequest();
      }, 1000);
      return;
    }
    setNovels(novels);
    setLoading(false);
  }, []);

  React.useEffect(() => {
    const eventAction = (event) => {
      serverRequest();
    };
    eventAction();
    window.addEventListener("focus", eventAction, false);
    return () => window.removeEventListener("focus", eventAction);
  }, [serverRequest]);

  return (
    <div className="container">
      <div style={{ marginTop: "50px", textAlign: "center" }}>
        <p>
          <button
            type="button"
            onClick={isLoading ? null : serverRequest}
            disabled={isLoading}
            className="btn btn-primary btn-lg"
          >
            {isLoading ? "Updating.." : "Update"}
          </button>
        </p>
        <div className="novels">
          {novels.map(function (novel, i) {
            return (
              <div key={novel.link} className="row">
                <Novel {...novel} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Novels;
