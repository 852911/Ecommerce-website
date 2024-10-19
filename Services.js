import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faTag, faWrench, faStar, faPaintBrush, faStore, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

export default class Services extends Component {
  render() {
    const cards = [
      { icon: faLightbulb, title: "UK Sims", description: "Your gateway to trading." },
      { icon: faTag, title: "Marketing", description: "Master online trading concepts." },
      { icon: faWrench, title: "Agency Account", description: "Tailored accounts for agencies." },
      { icon: faStar, title: "Winning Product", description: "High ratings, happy customers." },
      { icon: faPaintBrush, title: "Ad Creative", description: "Stunning designs that convert." },
      { icon: faStore, title: "Shop", description: "Diverse products at your fingertips." },
      { icon: faChalkboardTeacher, title: "Live Mentorship", description: "Expert guidance at your service." },
    ];

    return (
      <div>
        {/* Container for the services section */}
        <div className="basic" style={containerStyle}>
          <h2 style={titleStyle}>Our Services</h2>
          <p style={descriptionStyle}>We are here to make you your own boss.</p>
        </div>

        {/* Cards section */}
        <div className="container mt-5">
          <div className="row justify-content-center"> {/* Center align cards */}
            {cards.map((card, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card" style={cardWrapperStyle}>
                  <div className="card-body text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <FontAwesomeIcon icon={card.icon} size="3x" className="card-icon" style={{ marginBottom: '10px' }} />
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Container for the image section */}
        <div className="container mt-5" style={imageContainerStyle}>
          <div className="row align-items-center" style={{ height: '100%' }}> {/* Full height for vertical centering */}
            <div className="col-md-4" style={textContainerStyle}>
              <h3 style={{ color: '#4CAF50', marginBottom: '10px' }}>Our Approach</h3> {/* Heading in green */}
              <p style={{ color: 'black', marginBottom: '15px' }}><h4>Our company is here to help you.</h4></p> {/* Subheading in black */}
              <p style={imageDescriptionStyle}>
                At our company, we believe in providing comprehensive support to help you navigate the complexities of trading. Our dedicated team is here to ensure that you have the resources and knowledge to succeed. 
                We focus on tailored solutions that fit your individual needs, empowering you to take charge of your trading journey. 
                With years of experience in the industry, we are committed to being your reliable partner every step of the way.
                Trust us to guide you through your challenges and celebrate your successes as we work together towards your goals.
              </p>
            </div>
            <div className="col-md-8 text-right" style={{ display: 'flex', justifyContent: 'flex-end' }}> {/* Align image to extreme right */}
              <img
                src={`${process.env.PUBLIC_URL}/help.jpg`} // Accessing the image in the public folder
                alt="Help Image"
                style={imageStyle} // Apply your updated image styling here
              />
            </div>
          </div>
        </div>

        {/* Add hover effects via CSS */}
        <style>
          {`
            .card {
              border: 1px solid #ddd;
              border-radius: 5px;
              height: 300px; // Set a fixed height for the card
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              transition: background-color 0.3s, color 0.3s, box-shadow 0.3s; // Add shadow transition
            }

            .card:hover {
              background-color: green; // Change card background on hover
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); // Add shadow on hover
            }

            .card:hover .card-title,
            .card:hover .card-text,
            .card:hover .card-icon {
              color: white; // Change text and icon color to white on hover
            }

            .card-title,
            .card-text,
            .card-icon {
              color: green; // Set initial text and icon color to green
              transition: color 0.3s; // Add transition for color change
            }
          `}
        </style>
      </div>
    );
  }
}

// Inline styles for the container and text
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '80px',
  margin: '40px 0 20px 0',
  minHeight: '400px',
};

const titleStyle = {
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '15px',
  color: 'black',
};

const descriptionStyle = {
  fontSize: '20px',
  color: '#4CAF50',
  maxWidth: '800px',
  textAlign: 'center',
};

// Card wrapper style for vertical spacing
const cardWrapperStyle = {
  marginBottom: '20px', // Add vertical spacing between cards
};

// Style for the image container
const imageContainerStyle = {
  minHeight: '500px', // Increased height for the container
  display: 'flex',
  alignItems: 'flex-start', // Align items to the top
  justifyContent: 'center', // Center container
  margin: '0 auto', // Center container horizontally
  maxWidth: '1200px', // Optional: Set a max width for better control
  padding: '20px', // Optional: Add some padding
};

// Style for the image
const imageStyle = {
  width: '50%', // Decrease the width of the image
  height: '400px', // Increased height for the image
  borderRadius: '20px', // Adjust border radius for rounded corners
  objectFit: 'cover', // Ensures the image covers the area without distortion
};

// Style for the text container to justify text and center it vertically
const textContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', // Center text vertically
  textAlign: 'justify', // Justify text alignment
};

const imageDescriptionStyle = {
  fontSize: '18px', // Style for the image description
  color: 'black', // Change text color as needed
};
