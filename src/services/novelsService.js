import db from "./firebase";

/** @typedef {object} Novel
 * @property {string} name
 * @property {string} link
 * @property {number} dateNumber
 * @property {Date} date
 */

/**
 * @returns {Promise<Novel[]>}
 */
export function getNovels() {
  return db
    .orderBy("name", "desc")
    .limit(10)
    .get()
    .then((novels) => {
      return novels.docs
        .map((x) => x.data())
        .map(
          (x) => /** @type {Novel}*/ ({ ...x, date: new Date(x.dateNumber) })
        );
    });
}
