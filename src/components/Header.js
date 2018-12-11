import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../actions';
class Header extends Component {
  handleClick = lang => {
    this.props.switchLanguage(lang);
  };

  render() {
    if (this.props.language) {
      return (
        <header className="header-main" id="site-header">
          <div className="header-top">
            <div className="container">
              <div className="language-preference">
                <ul className="language-changer">
                  <li className="language-english active">
                    <button onClick={() => this.handleClick('en')}>
                      <img src="assets/img/gb.svg" alt="English Language" />
                      English
                    </button>
                  </li>
                  <li className="language-deutsch">
                    <button onClick={() => this.handleClick('de')}>
                      <img src="assets/img/de.svg" alt="Deutsch Language" />
                      Deutsch
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="header-bottom">
            <div className="container container--header">
              <div className="logo-header">
                <a href="">
                  <img src="assets/img/diagonal-logo.svg" alt="" />
                </a>
              </div>

              <nav className="navigation-primary">
                <ul className="menu-primary">
                  <li>
                    <a href="#site-header">
                      <FormattedMessage
                        id="Header.Home"
                        defaultMessage="Home"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#who-we-are">
                      <FormattedMessage
                        id="Header.whoarewe"
                        defaultMessage="Who are we"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#what-we-do">
                      <FormattedMessage
                        id="Home.whatwedo"
                        defaultMessage="What we do"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#our-expertise">
                      <FormattedMessage
                        id="Home.expertise"
                        defaultMessage="Expertise"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#contact-us">
                      <FormattedMessage
                        id="Home.contactus"
                        defaultMessage="Contact Us"
                      />
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="header-actions">
                <a href="" className="btn btn-primary">
                  <FormattedMessage
                    id="Home.getaquote"
                    defaultMessage="Get a quote"
                  />
                </a>
                <div className="menu-toggler">
                  <span>
                    <FormattedMessage id="Home.menu" defaultMessage="Menu" />
                  </span>
                  <div className="menu-toggle menu-toggle--fullscreen">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="navigation-fullscreen">
            <div className="fullscreen-menu-container">
              <div className="menu-toggle menu-toggle--fullscreen">
                <span />
                <span />
                <span />
              </div>
              <ul className="menu-fullscreen menu-fullscreen-large">
                <li>
                  <a href="">
                    <FormattedMessage
                      id="Menu.services"
                      defaultMessage="Services"
                    />
                    Services
                  </a>
                </li>
                <li>
                  <a href="">
                    <FormattedMessage id="Menu.works" defaultMessage="Works" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FormattedMessage
                      id="Footer.aboutus"
                      defaultMessage="About us"
                    />
                  </a>
                </li>
              </ul>

              <ul className="menu-fullscreen menu-fullscreen--small">
                <li>
                  <a href="">
                    <FormattedMessage
                      id="Menu.career"
                      defaultMessage="Career"
                    />
                  </a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">
                    <FormattedMessage
                      id="Menu.case"
                      defaultMessage="Case Studies"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      );
    }
  }
}
function mapStateToProps(state) {
  return { language: state.language };
}
export default connect(
  mapStateToProps,
  actions
)(Header);
