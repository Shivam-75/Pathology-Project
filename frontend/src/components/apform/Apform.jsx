import React, { useRef, useState } from "react";
import "../../css/apform.css";
import { useStore } from "../../store/StoreContext";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const Apform = () => {
  const { bloodTest, tt } = useStore();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("✅ Email sent successfully!", tt);

          form.current.reset();
        },
        (error) => {
          toast.error("❌ Failed to send email:", tt);
        }
      );
  };

  return (
    <>
      <h1 className="test-from-header">Ultrasound Test Booking Form</h1>
      <div className="Appintment-form">
        <form ref={form} onSubmit={sendEmail} className="appintment-form-card">
          <div className="form-center">
            <div className="form-left-card">
              <input
                type="text"
                name="user_name"
                placeholder="Enter Your Name"
                required
              />
              <input
                type="number"
                name="user_phone"
                placeholder="Enter your Number"
                required
              />
            </div>
            <div className="form-right-card">
              <input type="date" name="appointment_date" required />
              <select name="test_type" className="slecet-option" required>
                <option value="" hidden>
                  Type of Blood Test
                </option>
                {bloodTest.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="afb-button">
            <button type="submit">Submit</button>
          </div>
          <div className="form-text-area">
            <textarea
              name="message"
              placeholder="Additional comments"
              rows="4"></textarea>
          </div>
        </form>
        <ToastContainer/>
      </div>
    </>
  );
};

export default Apform;
