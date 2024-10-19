import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

export default class Home extends Component {
  render() {
    return (
      <div>
        <div style={containerStyle}>
          <div style={textContainerStyle}>
            <h1>Hello, I am Khubaib Ahmed</h1>
            <p>Short intro about yourself goes here.</p>
            <Link to="/contact"> {/* Use Link for navigation */}
              <button
                style={buttonStyle}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
              >
                Contact Us
              </button>
            </Link>
          </div>
          <div style={imageContainerStyle}>
            <img
              src={`${process.env.PUBLIC_URL}/nobck.png`} // Replace with your image path
              alt="Your description"
              style={imageStyle}
            />
          </div>
        </div>

        {/* Empty container of height 500px */}
        <div style={emptyContainerStyle}></div>
      </div>
    );
  }

  handleMouseEnter = (e) => {
    e.target.style.borderRadius = '30%'; // Makes the button circular on hover
    e.target.style.transition = 'border-radius 0.3s'; // Smooth transition
  };

  handleMouseLeave = (e) => {
    e.target.style.borderRadius = '5px'; // Returns to original rounded rectangle
  };
}

// Inline styles
const emptyContainerStyle = {
  height: '500px', // Set height for the empty container
  width: '100%', // Full width
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'green', // Set background to green
  padding: '40px',
  borderRadius: '20px', // Optional: Adds rounded corners to the container
};

const textContainerStyle = {
  flex: 1,
  color: 'white', // Text color (can be adjusted)
};

const buttonStyle = {
  marginTop: '10px',
  padding: '10px 20px',
  backgroundColor: 'white', // Button color
  border: 'none',
  borderRadius: '5px', // Rounded corners
  cursor: 'pointer',
  transition: 'border-radius 0.3s', // Transition for the border-radius change
};

const imageContainerStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-end', // Aligns the image to the right
};

const imageStyle = {
  width: '400px', // Increased width of the image
  height: 'auto', // Maintain aspect ratio
  borderRadius: '10px', // Optional: Adds rounded corners to the image
};
