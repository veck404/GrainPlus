import React, { useRef } from "react";
import Banner from "../about/components/banner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_v2xo9au", "template_v149cks", form.current, {
        publicKey: "5TmoQxX_DaROqjQ5S",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <Banner />
      <div className="flex justify-center items-center mt-5 mb-10">
        <h2
          data-aos={`fade-right`}
          data-aos-duration="2000"
          className="text-green-900 font-outfit mt-[50px] font-[700] text-[35px] leading-[35px] md:text-[66px] md:leading-[66px] xl:text-[60px] xl:leading-[60px]"
        >
          Contact Us
        </h2>
      </div>
      <div className="m-5 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md sm:shadow-md p-6 md:p-10 transform transition-transform duration-300 hover:scale-[1.01] hover:-translate-y-1 active:shadow-lg">
            <form
              action="https://formspree.io/f/xgedgjkr"
              method="POST"
              className="contact-inputs flex flex-col w-full space-y-4"
              ref={form}
              onSubmit={sendEmail}
            >
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="from_name"
                className="h-12 text-base border border-gray-200 rounded-md p-3 transition duration-150 focus:ring-2 focus:ring-green-200 focus:border-green-400 w-full"
                placeholder="Your full name"
                autoComplete="off"
                required
              />

              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="from_email"
                placeholder="you@example.com"
                className="h-12 text-base border border-gray-200 rounded-md p-3 transition duration-150 focus:ring-2 focus:ring-green-200 focus:border-green-400 w-full"
                autoComplete="off"
                required
              />

              <label className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Please enter your message and include your phone number."
                cols="30"
                rows="5"
                className="text-base border border-gray-200 rounded-md p-3 transition duration-150 focus:ring-2 focus:ring-green-200 focus:border-green-400 w-full"
                autoComplete="off"
                required
              ></textarea>

              <input
                type="submit"
                className="mt-2 text-base rounded-md bg-green-600 text-white py-3 px-4 font-semibold hover:bg-green-700 transition-colors duration-150"
                value="Send Message"
              />
            </form>
          </div>

          <div className="bg-white rounded-xl shadow-md sm:shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-[1.01] hover:-translate-y-1 active:shadow-lg">
            <iframe
              title="Our location Iframe"
              src="https://www.google.com/maps?q=Kano,+Nigeria&z=12&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: 300, border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
