import React from "react";
import { motion } from "framer-motion";
import "../styles/ReviewPartner.css";
import villaImg from "../assets/villa-partner.jpeg"; 

const ReviewPartner = () => {
  return (
    <section className="review-partner-section" id="reviews-section">
      {/* ===== Reviews Section ===== */}
      <motion.div
        className="reviews-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="subheading">HEAR OUR CLIENT</p>
        <h1 className="review-title">REVIEWS</h1>
        <p className="review-quote">
          “Working with BELGARVIA Architects was a blessing for our home. We
          wanted a space that felt modern but still warm and inviting, and they
          absolutely nailed it. We highly recommend them for architecture and
          design projects.”
        </p>

        <div className="review-arrows">
          <button className="arrow-btn">←</button>
          <button className="arrow-btn">→</button>
        </div>
      </motion.div>

      {/* ===== Partner With Us Section ===== */}
      <div className="partner-section" id="contact-section">
        <div className="partner-left">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            PARTNER WITH US
          </motion.h2>

          <p className="partner-desc">
            If you’re someone who’s looking to bring a space to life, share a
            few details to help me reach out to you so we can discuss how to
            bring your vision to life.
          </p>

          <form className="partner-form">
            <label>Your full name</label>
            <input type="text" placeholder="Full Name" />

            <label>Your email address</label>
            <input type="email" placeholder="Example@mail.com" />

            <label>A little bit about your project</label>
            <textarea placeholder="Example Text"></textarea>

            <button type="submit">SUBMIT</button>
          </form>
        </div>

        <motion.div
          className="partner-right"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img src={villaImg} alt="Modern Villa" />
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewPartner;
