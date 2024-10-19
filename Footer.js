import React, { Component } from 'react';

// Footer Component
class Footer extends Component {
  render() {
    return (
      <div style={footerStyle}>
        {/* Narrow green strip at the top */}
        <div style={greenStripStyle}></div>

        {/* Copyright section */}
        <div style={copyrightStyle}>
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </div>
    );
  }
}

// Styles for the footer
const footerStyle = {
  backgroundColor: 'white',
  overflow: 'hidden',
  marginTop: 'auto', // Ensures the footer sticks to the bottom
};

const greenStripStyle = {
  height: '10px', // Minimized height for the green strip
  backgroundColor: 'green',
  borderTopLeftRadius: '100%',
  borderTopRightRadius: '100%',
  margin: '0 auto',
};

const contentStyle = {
  padding: '10px 20px', // Reduced padding to minimize height
  textAlign: 'center',
};

const headingStyle = {
  fontSize: '18px', // Reduced font size
  margin: '5px 0',
};

const contactStyle = {
  fontSize: '14px', // Reduced font size
  margin: '5px 0',
};

const socialIconsStyle = {
  marginTop: '5px',
};

const socialIconStyle = {
  margin: '0 5px', // Spacing between icons
};

const copyrightStyle = {
  textAlign: 'center',
  padding: '5px 0', // Reduced padding to minimize height
  backgroundColor: '#f8f8f8',
  fontSize: '12px',
};

// Main App component to wrap content and footer
const App = () => {
  return (
    <div style={appStyle}>
      <div style={mainContentStyle}>
      </div>
      <Footer />
    </div>
  );
};

// Styles for the App
const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh', // Make the app fill the full height of the viewport
};

const mainContentStyle = {
  flex: 1, // Allow the main content to grow and take available space
  padding: '20px', // Add padding for aesthetics
};

// Render the App component
export default App;
