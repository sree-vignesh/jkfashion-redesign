"use client"; // Add this directive at the top

import { useState } from "react";
import styles from "./contact.module.css"; // Import the styles

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus(data.error || "There was an issue sending your message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className={styles.contactFormContainer}>
      <h2 className={styles.formTitle}>Contact Us</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className={styles.formInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className={styles.formInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className={styles.formInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className={styles.formTextarea}
          />
        </div>

        <button type="submit" className={styles.submitBtn}>Send Message</button>
      </form>

      {status && <p className={status.includes("success") ? styles.statusMessage : `${styles.statusMessage} error`}>{status}</p>}
    </div>
  );
};

export default ContactForm;
