import React from 'react';

function About(props) {
  // Dynamic styles based on mode
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#3c2aad',
    backgroundColor: props.mode === 'light' ? 'white' : '#3c2aad',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div className="container my-5" style={myStyle}>
      <h1 className="text-center">
        <i className="fas fa-info-circle me-2"></i>About Us
      </h1>
      <p className="text-center">
        <i className="fas fa-star"></i> Developed by <strong>LAXMIRANJAN SAHU</strong>. Passionate about creating user-friendly applications.{' '}
        <i className="fas fa-star"></i>
      </p>

      

      <div className="accordion mt-4" id="accordionPanelsStayOpenExample">
        <div className="accordion-item" style={{ backgroundColor: 'transparent', color: props.mode === 'dark' ? 'white' : '#3c2aad' }}>
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
              style={{
                backgroundColor: props.mode === 'dark' ? '#444' : '#f8f9fa',
                color: props.mode === 'dark' ? 'white' : '#3c2aad',
              }}
            >
              <i className="fas fa-lightbulb me-2"></i> Our Mission
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
            <i className="fas fa-circle me-2"></i><strong>Our mission</strong> is to inspire and empower individuals to achieve their full potential through continuous learning and innovation.
              <br/><i className="fas fa-circle me-2"></i>This project is a Text Transformation and Utility Tool designed to help users manipulate and analyze text in a variety of ways.
              <br/><i className="fas fa-circle me-2"></i>The application offers multiple text modification features, including converting text to uppercase or lowercase, removing extra spaces, and capitalizing the first letter of each word. 
              <br/><i className="fas fa-circle me-2"></i>Users can also copy the transformed text with a single click. 
              <br/><i className="fas fa-circle me-2"></i>The tool provides a detailed analysis of the entered text, including word count, character count, and an estimate of the time it would take to read or speak the text.
              <br/><i className="fas fa-circle me-2"></i>The intuitive interface, combined with the light and dark mode functionality, ensures a seamless user experience, making it a versatile tool for anyone looking to edit and work with text efficiently.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <a href="https://github.com/laxmi2577" className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github me-2"></i> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/laxmiranjan/"
          className={`btn ${props.mode === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin me-2"></i> LinkedIn
        </a>
      </div>
    </div>
  );
}

export default About;
