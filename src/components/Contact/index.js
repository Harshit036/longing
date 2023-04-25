import React, { useRef } from "react";
import logo1 from "../../assets/Icon4.svg";
import logo2 from "../../assets/Icon5.svg";
import logo3 from "../../assets/Icon6.svg";
import logo4 from "../../assets/Icon7.svg";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o2k0cwf",
        "template_r352hor",
        form.current,
        "w1UntqaV4ri3HPCOS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const onSubmit = (e) => {
    toast.success("Successfully Submitted !", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="Contact" id="contactSection">
      <div className="leftContact">
        <div className="contactHeading">Contact Me</div>
        <div className="contactDetails">
          <div className="eachDetail">
            <img src={logo1} alt="" />
            <h1 className="detail">
              Old Market, Fatehnagar , Udaipur, Rajasthan - 313205
            </h1>
          </div>
          <div className="eachDetail">
            <img src={logo2} alt="" />
            <h1 className="detail">kartik@longing.co.in</h1>
          </div>
          <div className="eachDetail">
            <img src={logo3} alt="" />
            <h1 className="detail">+91 -70213140321 </h1>
          </div>
          <div className="eachDetail">
            <img src={logo4} alt="" />
            <h1 className="detail">9:00 am - 6:00 pm</h1>
          </div>
        </div>
      </div>
      <div className="rightContact">
        <div className="rightHeading">Get in touch</div>
        <div className="rightPara">
          Have any queries? or want to know more? Contact us and we will be
          happy to help.
        </div>
        <div className="contactForm">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              className="nameInput"
              placeholder="Name"
            />{" "}
            <br />
            <input
              type="text"
              name="email"
              className="emailInput"
              placeholder="Email"
            />
            <input
              type="text"
              name="mobile"
              className="mobileInput"
              placeholder="Mobile No."
            />{" "}
            <br />
            <input
              type="text"
              name="message"
              className="queryInput"
              placeholder="Query"
            />{" "}
            <br />
            <button type="submit" onClick={onSubmit}>
              Submit
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
