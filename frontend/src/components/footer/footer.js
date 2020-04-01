import React from 'react';
import { Link } from 'react-router-dom'
import "./footer.css"

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer-container">
        <div className="footer-creator">
          <div className="footer-picture" style={{ backgroundImage: `url(./michelle.jpeg)` }}></div>
          <div className="footer-info">
            <div className="footer-name">Michelle Vong</div>
            <div className="footer-links">
              <a href="mailto:mishe.vong@gmail.com">
                <i class="fa fa-envelope footer-link" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/misheMatcha" target="_">
                <i class="fa fa-github footer-link" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/in/mishevong/" target="_">
                <i class="fa fa-linkedin footer-link" aria-hidden="true"></i>
              </a>
              </div>
          </div>
        </div>
        <div className="footer-creator">
          <div className="footer-picture" style={{ backgroundImage: `url(./max.jpeg)` }}></div>
          <div className="footer-info">
            <div className="footer-name">Max Lin</div>
            <div className="footer-links">
              <a href="mailto:max821023@gmail.com">
                <i class="fa fa-envelope footer-link" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/max821023" target="_">
                <i class="fa fa-github footer-link" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/in/max-lin-dev/" target="_">
                <i class="fa fa-linkedin footer-link" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-creator">
          <div className="footer-picture" style={{ backgroundImage: `url(./avatar.jpg)` }}></div>
          <div className="footer-info">
            <div className="footer-name">Michael Giering</div>
            <div className="footer-links">
              <a href="mailto:gieringmj@gmail.com">
                <i class="fa fa-envelope footer-link" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/Powellmj" target="_">
                <i class="fa fa-github footer-link" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/in/michael-giering-3079901a2/" target="_">
                <i class="fa fa-linkedin footer-link" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;