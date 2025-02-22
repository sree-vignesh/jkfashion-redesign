import React from "react";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faFlag } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <h1>About Us</h1>
      </div>

      {/* About Section */}
      <div className="section about-section">
        <div className="about-content">
          <p>
            After 30 years of continuous development, growth, and renewal,
            Dimiourgies Home becomes Yffés Textile Brands and expands with a
            new store in Kalamaria, 31 Andrianopoleos Str. Now, we are proud to
            be one of the most acclaimed companies in the fabrics, shading, and
            drapery business.
          </p>
          <img
            src="/assets/hero1.jpg"
            alt="Yffés Textile Brands Store"
            className="about-image"
          />
        </div>
      </div>

      {/* Vision Section */}
      <div className="section vision-section">
        <h1 className="section-title">Our Vision</h1>
        <div className="vision-content">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faEye} className="vision-icon" />
          </div>
          <p>
            We at Yffés aspire to become the leading and most knowledgeable
            integrated textile enterprise in the world. Our core endeavor
            remains to exceed the expectations of our customers, stakeholders,
            and associates while ensuring active support and empowerment of our
            employees and the communities that uplift us.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="section mission-section">
        <h1 className="section-title">Our Mission</h1>
        <div className="mission-content">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faFlag} className="mission-icon" />
          </div>
          <p>
            We are pursuing a multi-dimensional mission. Yffés is more than a
            textile company. It is a closely-knit group of people who aim to
            become powerhouses of knowledge and innovation. Our goal of
            increasing revenue is equally matched by our focus on rapid
            development and sustainability initiatives, ensuring the best and
            most innovative services.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="section core-values">
        <h1 className="section-title">Our Core Values</h1>
        <div className="core-values-grid">
          <div className="value-card">
            <h3>Domain Expertise</h3>
            <p>
              Big Chains, Wholesalers, Retailers & Independent Buyers
            </p>
          </div>
          <div className="value-card">
            <h3>Compliance</h3>
            <p>
              Our factories manufacture quality products that meet with social
              accountability compliance.
            </p>
          </div>
          <div className="value-card">
            <h3>Product Approach</h3>
            <p>
              Combining modern aesthetics and textiles with functional features
              based on standardized sizes and stringent quality protocols.
            </p>
          </div>
          <div className="value-card">
            <h3>Design Approach</h3>
            <p>
              Our in-house design studio combines demographic, geographic,
              spatial, cultural, product aspects, and brand aesthetics together.
            </p>
          </div>
          <div className="value-card">
            <h3>Services Offered</h3>
            <p>
              Curating • Design • Sampling • Manufacturing • Logistics •
              Delivery
            </p>
          </div>
          <div className="value-card">
            <h3>Our Process</h3>
            <p>
              Client briefing • Mind mapping • Mood boarding • Design •
              Sampling • Manufacturing • Delivery • Onsite Support
            </p>
          </div>
          <div className="value-card">
            <h3>Customized Offerings</h3>
            <p>
              From value engineering to standardized to bespoke products, we
              cater to diverse market segments in the brand hierarchy.
            </p>
          </div>
          <div className="value-card">
            <h3>Brand Offered</h3>
            <p>
              Our approach to designing and manufacturing products is based on
              our customers' vision, value, scale, and aesthetics.
            </p>
          </div>
          <div className="value-card">
            <h3>Brand Offered</h3>
            <p>
              Our approach to designing and manufacturing products is based on
              our customers' vision, value, scale, and aesthetics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
