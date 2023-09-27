import styles from "./form.module.css";
import React from "react";

function Form() {
  return (
    <>
      <div className={styles.header}>
        Instagram
        <p className={styles.navbar1}>Sign Up</p>
        <p className={styles.navbar2}>Sign In</p>
        <p className={styles.navbar3}>Profile</p>
      </div>
      <div className={styles.outerBox}>
        <div className={styles.innerBox}>
          {/* htmlFor-> connect label to input by id */}
          <div className={styles.inputAndLabel}>
            <label htmlFor="FirstName">FirstName:</label>
            <input
              type="text"
              placeholder="type your first name"
              id="FirstName"
              className={styles.inputBox}
            />
          </div>

          <div className={styles.inputAndLabel}>
            <label htmlFor="LastName">LastName:</label>
            <input
              type="text"
              placeholder="type your last name"
              id="LastName"
              className={styles.inputBox}
            />
          </div>

          <div className={styles.inputAndLabel}>
            <label htmlFor="Email">Email Address:</label>
            <input
              type="text"
              placeholder="eg.santonasubedi@gmail.com"
              id="Email"
              className={styles.inputBox}
            />
          </div>

          <div className={styles.inputAndLabel}>
            <label htmlFor="Password">Create Password:</label>
            <input
              type="text"
              placeholder="type password"
              id="Password"
              className={styles.inputBox}
            />
          </div>

          <button className={styles.btn}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default Form;
