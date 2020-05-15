import React from "react";

/** @typedef {object} Novel
 * @property {string} name
 * @property {string} link
 * @property {number} dateNumber
 * @property {Date} date
 */

/**
 *
 * @param {Novel} param0
 */
function Novel({ link, name, date }) {
  return (
    <div className="container">
      <h5 className="novel">
        <a href={link}>{name}</a>
      </h5>
    </div>
  );
}

export default Novel;
