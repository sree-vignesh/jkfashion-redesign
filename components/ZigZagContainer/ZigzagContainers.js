import React from 'react';
import './ZigzagContainers.css'; // Ensure the styles are imported

const ZigzagContainers = () => {
  return (
    <div className="info-block-container">
      <h2>Textile Is What We Do</h2>
      {/* <p>Nulla in nibh at leo faucibus molestie eget nec velit. Phasellus vel felis vel orci iaculis tempor tristique sagittis urna. Phasellus ac ante in lacus tempor egestas.</p> */}
      <div className="info-block">
        <div className="info-section">
          <i className="fas fa-paint-brush"></i>
          <h4>Fabric Dyeing</h4>
          <p>Duis pellentesque mi nec iaculis sed convallis. Cras sed tellus ipsum.</p>
          <a href="#">Read More</a>
        </div>
        <div className="info-section">
          <i className="fas fa-print"></i> {/* Updated to use the 'thread' icon */}
          <h4>Satin Weaving</h4>
          <p>Duis pellentesque mi nec iaculis sed convallis. Cras sed tellus ipsum.</p>
          <a href="#">Read More</a>
        </div>
        <div className="info-section">
          <i className="fas fa-print"></i>
          <h4>Fabric Printing</h4>
          <p>Duis pellentesque mi nec iaculis sed convallis. Cras sed tellus ipsum.</p>
          <a href="#">Read More</a>
        </div>
        <div className="info-section">
          <i className="fas fa-cut"></i>
          <h4>Garment Stitching</h4>
          <p>Duis pellentesque mi nec iaculis sed convallis. Cras sed tellus ipsum.</p>
          <a href="#">Read More</a>
        </div>
        <div className="info-section">
          <i className="fas fa-ruler-combined"></i>
          <h4>Linen Weaving</h4>
          <p>Duis pellentesque mi nec iaculis sed convallis. Cras sed tellus ipsum.</p>
          <a href="#">Read More</a>
        </div>
        <div className="info-section">
          <i className="fas fa-tshirt"></i>
          <h4>Custom Apparel</h4>
          <p>Duis pellentesque mi nec iaculis sed convallis. Cras sed tellus ipsum.</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default ZigzagContainers;
