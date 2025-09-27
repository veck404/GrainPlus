import React, { useRef } from "react";
import Banner from "../about/components/banner";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

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

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md sm:shadow-md p-6 md:p-8 transform transition-transform duration-300 hover:scale-[1.01] hover:-translate-y-1 active:shadow-lg">
              <h3 className="text-xl font-jost font-semibold text-gray-800">
                Contact information
              </h3>
              <p className="mt-3 text-gray-600">
                Reach out to us via phone, email, or follow us on social media.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-green-700" />
                  <a
                    href="tel:+2348093605855"
                    className="text-gray-800 font-medium"
                  >
                    +234 809 360 5855
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <FaWhatsapp className="text-green-700" />
                  <a
                    href="https://wa.me/2348093605855"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 font-medium"
                  >
                    WhatsApp: +234 809 360 5855
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-green-700" />
                  <a
                    href="mailto:info@grainplus.org"
                    className="text-gray-800 font-medium"
                  >
                    info@grainplus.org
                  </a>
                </div>

                <div className="mt-4">
                  <div className="text-gray-600 font-medium mb-2">
                    Follow us
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="p-2 rounded-md bg-gray-100 hover:bg-green-50 text-green-700"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="p-2 rounded-md bg-gray-100 hover:bg-green-50 text-green-700"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="p-2 rounded-md bg-gray-100 hover:bg-green-50 text-green-700"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="p-2 rounded-md bg-gray-100 hover:bg-green-50 text-green-700"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
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
    </div>
  );
};

export default Contact;
