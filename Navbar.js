import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredIndex: null, // Track which nav item is hovered
    };
  }

  render() {
    // Inline style for the green strip
    const greenStripStyle = {
      backgroundColor: '#4CAF50', // Mid-green color
      height: '25px', // Fixed height for visibility
      width: '100%', // Full width
      borderTopLeftRadius: '10px', // Rounded corners
      borderTopRightRadius: '10px', // Rounded corners
    };

    // Inline style for the container
    const containerStyle = {
      margin: '0 20px', // Extra space on the sides
      borderRadius: '10px', // Rounded corners for the entire header
      overflow: 'hidden', // Ensure the rounding applies
      backgroundColor: 'white', // Background color for the container
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Optional: shadow for depth
    };

    // Styles for nav items
    const navItemStyle = (index) => ({
      color: this.state.hoveredIndex === index ? '#4CAF50' : '#000', // Change color on hover
      fontWeight: this.state.hoveredIndex === index ? 'bold' : 'normal', // Change font weight on hover
      transition: 'color 0.3s ease, font-weight 0.3s ease', // Smooth transition
    });

    return (
      <div style={containerStyle} className='my-3'>
        {/* Green Strip with Inline Style */}
        <div style={greenStripStyle}></div>

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={`${process.env.PUBLIC_URL}/mylogo.png`} style={mystyle} alt="Logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {['Home', 'Our Services', 'About Us', 'Contact Us'].map((item, index) => (
                  <li className="nav-item" key={index}>
                    <Link
                      className="nav-link"
                      to={item === 'Home' ? '/' : item === 'About Us' ? '/about' : item === 'Our Services' ? '/services' : '/contact'}
                      style={navItemStyle(index)} // Apply the inline styles for hover
                      onMouseEnter={() => this.setState({ hoveredIndex: index })} // Set hovered index
                      onMouseLeave={() => this.setState({ hoveredIndex: null })} // Reset hovered index
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mystyle = {
  height: '50px'
}
