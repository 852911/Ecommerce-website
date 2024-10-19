import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkedAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredCardIndex: null, // Track which card is hovered
    };
  }

  // Using arrow function for rendering cards
  renderCard = (title, icon, text, index, isLast = false) => {
    const isHovered = this.state.hoveredCardIndex === index; // Check if the card is hovered
    const cardStyleWithHover = isHovered
      ? { ...cardStyle, ...hoverCardStyle }
      : cardStyle;
    
    const textStyleWithHover = isHovered ? hoverTextStyle : cardTextStyle;
    const titleStyleWithHover = isHovered ? hoverTextStyle : cardTitleStyle;
    const iconStyleWithHover = isHovered ? hoverIconStyle : iconStyle;

    return (
      <div
        style={isLast ? { ...cardStyleWithHover, ...lastCardStyle } : cardStyleWithHover}
        onMouseEnter={() => this.setState({ hoveredCardIndex: index })}
        onMouseLeave={() => this.setState({ hoveredCardIndex: null })}
      >
        <FontAwesomeIcon icon={icon} style={iconStyleWithHover} />
        <h3 style={titleStyleWithHover}>{title}</h3>
        <p style={textStyleWithHover}>{text}</p>
      </div>
    );
  };

  render() {
    return (
      <div style={outerContainerStyle}>
        <div style={headerStyle}>
          <h1 style={headingStyle}>Contact Us</h1>
        </div>

        {/* Card Container */}
        <div style={cardsContainerStyle}>
          {this.renderCard("Phone", faPhone, "(123) 456-7890", 0)}
          {this.renderCard("Address", faMapMarkedAlt, "123 E-commerce St, City, Country", 1)}
          {this.renderCard("Email", faEnvelope, "contact@example.com", 2)}
          {this.renderCard("Facebook", faFacebook, "facebook.com/example", 3)}
          {this.renderCard("Twitter", faTwitter, "@example", 4)}
          {this.renderCard("LinkedIn", faLinkedin, "linkedin.com/in/example", 5)}
          {this.renderCard("Instagram", faInstagram, "instagram.com/example", 6, true)}
        </div>
      </div>
    );
  }
}

// Inline styles
const outerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '100vh',
  paddingBottom: '500px', // Add extra padding to ensure space between cards and footer
};

const headerStyle = {
  marginTop: '20px',
  textAlign: 'center',
};

const headingStyle = {
  color: 'green',
};

const cardsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Three columns
    gap: '20px', // Space between cards
    padding: '20px',
    width: '80%', // Control width of the container to make it centered
};

const cardStyle = {
  backgroundColor: 'white',
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  transition: 'all 0.3s ease', // Add smooth transition
};

const hoverCardStyle = {
  backgroundColor: 'green',
  color: 'white', // Ensure the text turns white on hover
};

const iconStyle = {
  fontSize: '40px',
  color: 'green',
};

const hoverIconStyle = {
  fontSize: '40px',
  color: 'white', // Icon turns white when hovered
};

const cardTitleStyle = {
  margin: '10px 0',
  color: 'green',
};

const cardTextStyle = {
  margin: '0',
  color: 'black', // Default text color
};

const hoverTextStyle = {
  color: 'white', // Text turns white when hovered
};

// Last card centered with extra bottom margin
const lastCardStyle = {
    gridColumn: 'span 3',
    justifySelf: 'center',
    marginBottom: '500px', // Ensure 500px space between the last card and footer
};
