import './AboutPage.css';
import React from "react";

export default class AboutPage extends React.Component {
  render() {
    return (
      <>
        <main id="about-page">
          <h2>About This App</h2>
          <p>Generate random astronomy photos from NASA! Data and media are from NASA's Astronomy Picture of the Day (APOD) website.</p>
          <p>Media with copyright listed were submitted to APOD by individuals or institutions and belong to their respective copyright owners. Media with no copyright listed are NASA images and are in the public domain.</p>
          <p><a href="https://www.nasa.gov/multimedia/guidelines/index.html" target="_blank">See NASA's official media usage guidelines.</a></p>
          <h2>About APOD</h2>
          <p>"Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer." </p>
          <cite>-- <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank">Astronomy Picture of the Day</a></cite>
          <p>Want to use a neat API from NASA for your own project? Visit the <a href="https://api.nasa.gov/" target="_blank">NASA API portal</a>.</p>
          <h2>About the Developer</h2>
          <p>Jennifer Adams is a Pittsburgh-based web developer with a passion for astronomy.</p>
          <ul>
            {/*<li>Portfolio</li>*/}
            <li><a href="https://www.linkedin.com/in/jenn-adams-a91a49196/" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/jennifercadams" target="_blank">GitHub</a></li>
          </ul>
        </main>
        <footer />
      </>
    )
  }
}