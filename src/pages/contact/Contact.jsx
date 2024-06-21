import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_t018ujr', // Replace with your EmailJS service ID
      'template_ggptlrw', // Replace with your EmailJS template ID
      form.current,
      '39So2E2tntEtdzzDk' // Replace with your EmailJS public key
    ).then((result) => {
      console.log(result.text);
      alert("Message sent successfully!");
    }, (error) => {
      console.log(error.text);
      alert("Failed to send message, please try again.");
    });

    e.target.reset(); // Reset the form after submission
  };

  return (
    <section className="contact section">
      <h2 className="section__title contact__title1">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, Creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">henrytrust1111@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+234 815 401 2262</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://web.facebook.com/Henrytrust1111" className="contact__social-link">
              <FaFacebookF />
            </a>

            <a href="https://github.com/henrytrust1111" className="contact__social-link">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/henry-trust-a20a9527b/" className="contact__social-link">
              <FaLinkedin />
            </a>

            <a href="https://wa.me/2348154012262" className="contact__social-link">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form__control"
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="form__control"
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                name="Subject"
                placeholder="Your Subject"
                className="form__control"
                required
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              name="message"
              placeholder="Your Message"
              className="form__control textarea"
              required
            ></textarea>
          </div>

          <button type="submit" className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;






// import React from "react";

// import {
//   FaEnvelopeOpen,
//   FaPhoneSquareAlt,
//   FaFacebookF,
//   FaTwitter,
//   FaYoutube,
//   FaDribbble,
// } from "react-icons/fa";

// import { FiSend } from "react-icons/fi";

// import "./contact.css";

// const Contact = () => {
//   return (
//     <section className="contact section">
//       <h2 className="section__title contact__title1">
//         Get In <span>Touch</span>
//       </h2>

//       <div className="contact__container container grid">
//         <div className="contact__data">
//           <h3 className="contact__title">Don't be Shy !</h3>

//           <p className="contact__description">
//             Feel free to get in touch with me. I am always open to discussing
//             new projects, Creative ideas or opporunities to be part of your
//             visions.
//           </p>

//           <div className="contact__info">
//             <div className="info__item">
//               <FaEnvelopeOpen className="info__icon" />

//               <div>
//                 <span className="info__title">Mail me</span>
//                 <h4 className="info__desc">henrytrust111@gmail.com</h4>
//               </div>
//             </div>

//             <div className="info__item">
//               <FaPhoneSquareAlt className="info__icon" />

//               <div>
//                 <span className="info__title">Call me</span>
//                 <h4 className="info__desc">+234 815 401 2262</h4>
//               </div>
//             </div>
//           </div>

//           <div className="contact__socials">
//             <a href="http://facebook.com" className="contact__social-link">
//               <FaFacebookF />
//             </a>

//             <a href="http://twitter.com" className="contact__social-link">
//               <FaTwitter />
//             </a>

//             <a href="http://youtube.com" className="contact__social-link">
//               <FaYoutube />
//             </a>

//             <a href="http://dribble.com" className="contact__social-link">
//               <FaDribbble />
//             </a>
//           </div>
//         </div>

//         <form className="contact__form">
//           <div className="form__input-group">
//             <div className="form__input-div">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="form__control"
//               />
//             </div>

//             <div className="form__input-div">
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="form__control"
//               />
//             </div>

//             <div className="form__input-div">
//               <input
//                 type="text"
//                 placeholder="Your Subject"
//                 className="form__control"
//               />
//             </div>
//           </div>

//           <div className="form__input-div">
//             <textarea
//               placeholder="Your Message"
//               className="form__control textarea"
//             ></textarea>
//           </div>

//           <button className="button">
//             Send Message
//             <span className="button__icon contact__button-icon">
//               <FiSend />
//             </span>
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
