import React from "react";
import "./FoundersHistory.css";
// import founderImage from "/assets/founder-image.jpg"; // Path to the founder's image
// import secondImage from "/assets/second-image.jpg"; // Path to the second image

const FoundersHistory = () => {
  return (
    <div className="founders-history-container">
      {/* First Section: Content Left, Image Right */}
      <div className="founders-history">
        <div className="content">
          <h1>HISTORY</h1>
          <p>
            Steps into the field of textiles had begun when we started our
            journey as a YARN TRADER in the early 90's to date. Building up that
            business had been our initial focus and has now grown up to a really
            big segment in our business lineup. Exploring the textile industry
            and adding value to the yarn we had been selling has always been a
            dream, and we had initial plans of setting up a textile unit to
            serve the purpose.
          </p>
          <p>
            Adding up to the line of business, we also engage in MINING BLUE
            METALS which supports to be an added advantage to our textiles as we
            are free of flow of funds. We engage in the manufacture of Blue
            Metals and supply them to 90% of customers all over our native
            territory.
          </p>
        </div>
        <img src="/assets/founder-image.jpg" alt="Founder" className="image" />
      </div>

      {/* Second Section: Image Left, Content Right */}
      <div className="founders-history reverse">
        <img src="/assets/second-image.jpg" alt="Office" className="image" />
        {/* <img src={secondImage} alt="Office" className="image" /> */}
        <div className="content">
          <h1>ABOUT</h1>
          <p>
            We had defined our company in the home Textile Industry as “J K
            FASHION” since 2017 and carried on successful business till date. We
            engage in affordable products without compromise in quality.
            Sourcing has always been our advantage in offering the best price
            possible in the market. We had begun slowly into textiles with an
            initial set up but now have grown up with a separate corporate
            office and an individual factory set up to engage in volume
            business.
          </p>
          <p>
            Pioneering new designs has always been our aim and offering
            innovation is our prime concern. Our focus is always on giving the
            market something new. We would always be happy to become the prima
            facie of the customer via the service we provide or rather the
            quality that we would offer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoundersHistory;
