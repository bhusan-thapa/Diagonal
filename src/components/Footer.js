import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-main footer-main--homepage">
        <div className="footer-top">
          <div className="container">
            <div className="footer-sections">
              <div className="row">
                <div className="footer-section col-md-3">
                  <div className="footer-info">
                    <h3>Diagonal</h3>
                    <span>Software</span>
                  </div>
                </div>
                <div className="footer-section col-md-3">
                  <h3 className="footer-section__title">
                    <FormattedMessage
                      id="Footer.services"
                      defaultMessage="Services"
                    />
                  </h3>
                  <ul className="footer-links">
                    <li>
                      <a href="">
                        <FormattedMessage
                          id="Footer.webdesigning"
                          defaultMessage="Web Designing"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FormattedMessage
                          id="Footer.webdevelopment"
                          defaultMessage="Web Development"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FormattedMessage
                          id="Footer.printdesign"
                          defaultMessage="Print Design"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FormattedMessage
                          id="Footer.hosting"
                          defaultMessage="Hosting"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-section col-md-3">
                  <h3 className="footer-section__title">
                    <FormattedMessage id="Footer.info" defaultMessage="Info" />
                  </h3>
                  <ul className="footer-links">
                    <li>
                      <a href="">
                        <FormattedMessage
                          id="Footer.aboutus"
                          defaultMessage="About us"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FormattedMessage
                          id="Footer.team"
                          defaultMessage="Team"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FormattedMessage
                          id="Footer.portfolio"
                          defaultMessage="Portfolio"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FormattedMessage
                          id="Footer.testimonials"
                          defaultMessage="Testimonials"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-section col-md-3">
                  <h3 className="footer-section__title">
                    <FormattedMessage
                      id="Footer.social"
                      defaultMessage="Social"
                    />
                  </h3>
                  <ul className="social-links">
                    <li>
                      <a href="">
                        <img src="assets/img/social-facebook.svg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img src="assets/img/social-twitter.svg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img src="assets/img/social-youtube.svg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-copyright text-center">
              <p className="copyright">
                <FormattedMessage
                  id="Footer.right"
                  defaultMessage=" © 2018 Diagonal Software. All right reserved."
                />
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
