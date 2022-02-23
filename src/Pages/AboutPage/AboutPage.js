import React from "react";

export default class AboutPage extends React.Component {
  render() {
    return (
      <main id="about-page">
        <h2>About This App</h2>
        <p>Generate random astronomy photos from NASA! Data and images are from NASA's Astronomy Picture of the Day (APOD) website.</p>
        <h2>About APOD</h2>
        <p>"Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer." -- <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank">Astronomy Picture of the Day</a></p>
        <p>Want to use a neat API from NASA for your own project? Visit the <a href="https://api.nasa.gov/" target="_blank">NASA API portal</a>.</p>
        <h2>About the Developer</h2>
        <p>Jennifer Adams is a Pittsburgh-based web developer with a passion for astronomy.</p>
        <ul>
          <li>Portfolio</li>
          <li>LinkedIn</li>
          <li>GitHub</li>
        </ul>
      </main>
    )
  }
}