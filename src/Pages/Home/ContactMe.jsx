import React, { useRef } from "react";
import emailjs from "emailjs-com";
// const apiKey = import.meta.env.SERVICE_ID;
// require("dotenv").config();
export default function ContactMe() {
  const form = useRef();

  
  const service_id = process.env.REACT_APP_SERVICE_ID;
  console.log(service_id);
  
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page reload on submit

        emailjs.sendForm(
     service_id,
      "template_72cbbwp",
      form.current,
      "SDkhZeBmdFQz9Qxi-"
    )
    .then((result) => {
      alert("Message sent successfully!");
      console.log(result.text);
      form.current.reset(); // Reset form after successful submit
    }, (error) => {
      alert("Failed to send message, please try again.");
      console.error(error.text);
    });
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
          <p className="text-lg">
            Feel free to reach out for collaborations, freelance opportunities, or just a friendly hello.
          </p>

      </div>
      <form ref={form} onSubmit={sendEmail} className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first_name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last_name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phone_number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select name="topic" id="choose-topic" className="contact--input text-md" required>
            <option value="">Select One...</option>
            <option value="item1">Freelancing</option>
            <option value="item2">Collaborations</option>
            <option value="item3">Juat a Friendly</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            name="message"
            id="message"
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn" type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}
