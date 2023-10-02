import styles from "./form.module.css";
import React, { useState } from "react";

/*  F & T = F
                  T & F*/
// console.log(firstName);
// console.log(lastName);
// console.log(emailAddress);
// console.log(password);

function Form() {
  function isPasswordValid(password) {
    const minlength = 8;
    const upperCase = /[A-Z]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const digits = /\d/.test(password);
    const specialCharacter = /[!@#$%^&*()_+{}\[]\:;<>,.?~\\-]/.test(password);
    return (
      password.length >= minlength &&
      upperCase &&
      lowerCase &&
      digits &&
      specialCharacter
    );
  }
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className={styles.header}>
        Instagram
        <p className={styles.navbar1}>Sign Up</p>
        <p className={styles.navbar2}>Sign In</p>
        <p className={styles.navbar3}>Profile</p>
      </div>
      <form action="">
        <div className={styles.outerBox}>
          <div className={styles.innerBox}>
            {/* htmlFor-> connect label to input by id */}
            <div className={styles.inputAndLabel}>
              <label htmlFor="FirstName">FirstName:</label>
              <input
                type="text"
                placeholder="type your first name"
                id="FirstName"
                minLength={3}
                className={styles.inputBox}
                onChange={(e) => {
                  setFirstName(e.target.value.replace(/[^a-zA-Z]/g, ""));
                }}
              />
              {firstName.length < 3 ? (
                <p style={{ color: "red", fontSize: "20px" }}>
                  Minimum length must be 3 with no digits
                </p>
              ) : (
                <p></p>
              )}
            </div>

            <div className={styles.inputAndLabel}>
              <label htmlFor="LastName">LastName:</label>
              <input
                type="text"
                placeholder="type your last name"
                id="LastName"
                minLength={3}
                className={styles.inputBox}
                onChange={(e) => {
                  setLastName(e.target.value.replace(/[^a-zA-Z]/g, ""));
                }}
              />
              {lastName.length < 3 ? (
                <p style={{ color: "red", fontSize: "20px" }}>
                  Minimum length must be 3 with no digits
                </p>
              ) : (
                <p></p>
              )}
            </div>
            <div className={styles.inputAndLabel}>
              <label htmlFor="Email">Email Address:</label>
              <input
                type="email"
                placeholder="eg.santonasubedi@gmail.com"
                id="Email"
                className={styles.inputBox}
                onChange={(e) => {
                  setEmailAddress(e.target.value);
                }}
              />
              {/* ^ -> start of the string
\w+ -> one or more word characters (number/letter/underscore
([.-]) -> allows . or - followed by word/words or charcater/characters
@ -> matches the at
w+
([.-]?\w+)* -> 0 to many ()allows for optional -/. followed by wors/characters hello.hi or hello-hi 0to many occurances
(\.\w{2,}) -> matches the top level domain . followed by at least 2 or more word characters. + allows 1 to many occurances
$ -> end of the string
) */}
              {!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(
                emailAddress
              ) ? (
                <p style={{ color: "red", fontSize: "20px" }}>
                  Please enter a valid email address
                </p>
              ) : (
                <p></p>
              )}
            </div>
            <div className={styles.inputAndLabel}>
              <label htmlFor="Password">Create Password:</label>
              <input
                type="password"
                placeholder="type password"
                id="Password"
                className={styles.inputBox}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {!isPasswordValid(password) && password.length < 8 ? (
                <p style={{ color: "red", fontSize: "20px" }}>
                  Password must be 8 characters long and must contain 1 upper
                  case letter , lowercase letter, digit and one special
                  character
                </p>
              ) : (
                <p></p>
              )}
            </div>
            <button
              className={styles.btn}
              type="submit"
              onClick={() => {
                alert("Form submitted successfully!");
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
