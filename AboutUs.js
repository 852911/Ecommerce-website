import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBrain, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <div style={aboutUsContainerStyle}>
          <div style={textContainerStyle}>
            <h1 style={headingStyle}>Why Choose Us</h1>
            <h5 style={subheadingStyle}>Expert in E-Commerce Financial Issues</h5>
            <p style={paragraphStyle}>
              We are dedicated to providing top-notch services to help you achieve your goals.
              Our team consists of experienced professionals who are here to guide you every step of the way.
              We believe in creating value for our clients and fostering long-lasting relationships.
              Our approach is tailored to meet your specific needs, ensuring your satisfaction.
              Join us on this journey and discover how we can help you succeed!
            </p>
          </div>
        </div>

        {/* New Container */}
        <div style={whyChooseUsContainerStyle}>
          <div style={pointsContainerStyle}>
            <h2 style={titleStyle}>Why Choose Us</h2>
            <ul style={pointsListStyle}>
              {this.renderPoint("Expert in E-commerce solutions", faClock)}
              {this.renderPoint("Dedicated Customer Support", faBrain)}
              {this.renderPoint("Customized Solutions", faLightbulb)}
            </ul>
          </div>
          <div style={verticalImageContainerStyle}>
            <img
              src={`${process.env.PUBLIC_URL}/dicussion.jpg`} // Correct the image path
              alt="Vertical"
              style={verticalImageStyle}
            />
          </div>
        </div>

        {/* New Section: Who We Are */}
        <div style={whoWeAreContainerStyle}>
          <h2 style={whoWeAreHeadingStyle}>Who We Are</h2>
          <hr style={lineStyle} />
          <p style={whoWeAreTextStyle}>We are passionate about e-commerce and dedicated to helping businesses thrive.</p>
          <div style={imagesContainerStyle}>
            <img
              src={`${process.env.PUBLIC_URL}/images.jpg`} // Replace with your e-commerce image path
              alt="E-commerce"
              style={ecommerceImageStyle}
            />
            <img
              src={`${process.env.PUBLIC_URL}/store.jpg`} // Replace with your e-commerce image path
              alt="E-commerce"
              style={ecommerceImageStyle}
            />
          </div>
        </div>

        {/* Spacer between footer and container */}
        <div style={footerSpacerStyle}></div>
      </div>
    );
  }

  renderPoint(text, icon) {
    return (
      <li style={pointStyle} key={text}>
        <div style={iconContainerStyle}>
          <FontAwesomeIcon icon={icon} style={this.getIconStyle()} />
        </div>
        <span style={pointTextStyle}>{text}</span>
      </li>
    );
  }

  getIconStyle() {
    return {
      color: 'white',
      width: '20px',
      height: '20px',
    };
  }
}

// Inline styles
const aboutUsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  padding: '40px',
  borderRadius: '20px',
  margin: '20px 0',
};

const textContainerStyle = {
  flex: 1,
  color: 'black',
  textAlign: 'center',
};

const headingStyle = {
  color: 'green',
};

const subheadingStyle = {
  color: 'green',
};

const paragraphStyle = {
  color: 'black',
};

const pointsContainerStyle = {
  flex: 1,
  textAlign: 'left',
  color: '#333',
  padding: '20px',
};

const titleStyle = {
  fontSize: '24px',
  marginBottom: '20px',
};

const pointsListStyle = {
  listStyleType: 'none',
  padding: 0,
};

const pointStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
};

const iconContainerStyle = {
  backgroundColor: 'black',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '10px',
};

const pointTextStyle = {
  fontSize: '18px',
};

const verticalImageStyle = {
  width: 'auto',
  maxHeight: '400px',
  height: '100%',
  borderRadius: '10px',
};

const verticalImageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flex: 1,
};

const whyChooseUsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  backgroundColor: 'white',
  padding: '40px',
  borderRadius: '20px',
  margin: '20px 0',
};

// New section styles
const whoWeAreContainerStyle = {
  textAlign: 'center',
  margin: '40px 0',
};

const whoWeAreHeadingStyle = {
  color: 'green',
};

const lineStyle = {
  border: '1px solid green',
  width: '50%',
  margin: '20px auto',
};

const whoWeAreTextStyle = {
  fontSize: '18px',
  margin: '20px 0',
};

const imagesContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px', // Add some space between the images
};

const ecommerceImageStyle = {
  width: '400px', // Increased width for larger images
  height: 'auto',
  borderRadius: '10px',
};

// Spacer style
const footerSpacerStyle = {
  height: '50px', // Adjust the height as needed
};
