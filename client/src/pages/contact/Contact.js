import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../../context";

const Contact = () => {
  const{setIsLoading,isLoading, setEmailSent, emailSent, setShowMessage, showMessage} = useGlobalContext()
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
setIsLoading(true)

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLETE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_ID
      )
      .then((result) => {
        result.status === 200 && setEmailSent(true);
       
      })
      .catch((err) => console.log(err));
    e.target.reset();

    // console.log(form.current.children[1].querySelector('input').value)
  };

  useEffect(() => {
    emailSent && setShowMessage(true);
    setIsLoading(false)
    setTimeout(() => {
      setShowMessage(false);
    }, 4000);
  }, [emailSent]);

  return (
    <div className="contact">
      <div className="heading">
        <h2> Want a conversation !</h2>
      </div>
      <form ref={form} onSubmit={sendEmail} className={`${showMessage && isLoading ? "blur form":"form"}`}>
        <div className="form_control">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form_control">
          <label htmlFor="">Email </label>
          <input
            type="text"
            name="user_email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form_control">
          <label htmlFor="">Message</label>
          <textarea
            name="user_message"
            placeholder="Type your message"
          ></textarea>
        </div>
        <input type="submit" value="send" readOnly className="submit_btn" />
        {isLoading && <div className="loading"></div>}
        {/* <div className="loading"></div> */}
      </form>
      {emailSent && showMessage ? (
        <div className="msg_box">
          <h2>Thanks for your message</h2>
          <span>If your email is correct, you will get replay soon</span>
          <span>Enjoy</span>
        </div>
      ) : (
        <></>
      )}
    
    </div>
  );
};

export default Contact;
