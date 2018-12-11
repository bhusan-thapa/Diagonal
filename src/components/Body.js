import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

export default class Body extends Component {
  render() {
    return (
      <div id="page-container" className="page-container">
        <section className="hero-banner">
          <div className="container">
            <div className="row">
              <div className="hero-info col-md-5">
                <h1
                  className="hero__title"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  <FormattedMessage
                    id="Body.welcome"
                    defaultMessage="Welcome to Diagonal Software"
                  />
                </h1>
                <h3
                  className="hero__sub-title"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <FormattedMessage
                    id="Body.unlock"
                    defaultMessage="Unlock the Digital Solution of your Business"
                  />
                </h3>
                <p
                  className="hero__description"
                  data-aos="fade-up"
                  data-aos-delay="900"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>

                <div
                  className="action-container"
                  data-aos="fade-up"
                  data-aos-delay="1100"
                >
                  <a href="" className="btn btn-primary">
                    <FormattedMessage
                      id="Body.request"
                      defaultMessage="Request a quote"
                    />
                  </a>
                  <a href="" className="btn btn-gray">
                    <FormattedMessage
                      id="Body.see"
                      defaultMessage="See our Works"
                    />
                  </a>
                </div>
              </div>

              <div className="hero-image col-md-7" data-aos="fade-up">
                <img src="assets/img/hero.svg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section id="who-we-are" className="section-box">
          <div className="container">
            <div className="heading">
              <h2 className="heading__title">
                <FormattedMessage id="Body.who" defaultMessage="Who we are" />
              </h2>
              <h3 className="heading__sub-title" data-aos="fade-up">
                <FormattedMessage
                  id="Body.small"
                  defaultMessage="Small full-stack web agency based in Darmstadt."
                />
              </h3>
              <p
                className="heading__description"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut.
              </p>
            </div>
          </div>
        </section>

        <section id="what-we-do" className="section-box section-services">
          <div className="container">
            <div className="heading">
              <h2 className="heading__title">
                <FormattedMessage
                  id="Body.whatwedo"
                  defaultMessage="What we do"
                />
              </h2>
            </div>

            <div className="services-container swiper-container">
              <div className="service" id="web-designing">
                <div className="row align-items-center">
                  <div className="service-info col-md-6">
                    <h2 className="service__title">Web Designing</h2>
                    <h3 className="service__sub-title" data-aos="fade-right">
                      <FormattedMessage
                        id="Body.objective"
                        defaultMessage="We design engaging websites to meet your business objectives"
                      />
                    </h3>
                    <p
                      className="service__description"
                      data-aos="fade-right"
                      data-aos-delay="300"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy
                    </p>
                  </div>

                  <div
                    className="service-thumbnail col-md-6"
                    data-aos="fade"
                    data-aos-delay="500"
                  >
                    <img src="assets/img/service-web-designing.svg" alt="" />
                  </div>
                </div>
              </div>

              <div className="service" id="web-development">
                <div className="row align-items-center">
                  <div
                    className="service-thumbnail col-md-6"
                    data-aos="fade"
                    data-aos-delay="500"
                  >
                    <img src="assets/img/service-web-development.svg" alt="" />
                  </div>
                  <div className="service-info col-md-6">
                    <h2 className="service__title">
                      <FormattedMessage
                        id="Footer.webdevelopment"
                        defaultMessage="Web Development"
                      />
                    </h2>
                    <h3 className="service__sub-title" data-aos="fade-left">
                      <FormattedMessage
                        id="Body.wedesign"
                        defaultMessage="We design engaging websites to meet your business objectives"
                      />
                    </h3>
                    <p
                      className="service__description"
                      data-aos="fade-left"
                      data-aos-delay="300"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy
                    </p>
                  </div>
                </div>
              </div>

              <div className="service" id="print-design">
                <div className="row align-items-center">
                  <div className="service-info col-md-6">
                    <h2 className="service__title">
                      <FormattedMessage
                        id="Footer.printdesign"
                        defaultMessage="Print Design"
                      />
                    </h2>
                    <h3 className="service__sub-title" data-aos="fade-right">
                      <FormattedMessage
                        id="Body.wedesign"
                        defaultMessage="We design engaging websites to meet your business objectives"
                      />
                    </h3>
                    <p
                      className="service__description"
                      data-aos="fade-right"
                      data-aos-delay="300"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy
                    </p>
                  </div>

                  <div
                    className="service-thumbnail col-md-6"
                    data-aos="fade"
                    data-aos-delay="500"
                  >
                    <img src="assets/img/service-print-design.svg" alt="" />
                  </div>
                </div>
              </div>

              <li className="service" id="hosting">
                <div className="row align-items-center">
                  <div
                    className="service-thumbnail col-md-6"
                    data-aos="fade"
                    data-aos-delay="500"
                  >
                    <img src="assets/img/service-hosting.svg" alt="" />
                  </div>
                  <div className="service-info col-md-6">
                    <h2 className="service__title">Hosting</h2>
                    <h3 className="service__sub-title" data-aos="fade-left">
                      <FormattedMessage
                        id="Body.wedesign"
                        defaultMessage="We design engaging websites to meet your business objectives"
                      />
                    </h3>
                    <p
                      className="service__description"
                      data-aos="fade-left"
                      data-aos-delay="300"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </section>

        <section id="development-process" className="section-box">
          <div className="container">
            <div className="heading">
              <h2 className="heading__title">
                <FormattedMessage
                  id="Body.process"
                  defaultMessage="Development Process"
                />
              </h2>
              <h3 className="heading__sub-title" data-aos="fade-up">
                <FormattedMessage
                  id="Body.ideas"
                  defaultMessage="How we turn ideas into the reality"
                />
              </h3>
            </div>

            <div className="timeline">
              <div className="timeline-inner-wrap">
                <div className="timeline-item">
                  <div className="timeline-item-wrapper" data-aos="fade-left">
                    <div className="timeline__count">1</div>
                    <div className="timeline-info">
                      <h5 className="timeline__title">
                        <FormattedMessage
                          id="Body.gather"
                          defaultMessage="Gather Information"
                        />
                      </h5>
                      <p className="timeline__description">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div
                    className="timeline-item-wrapper"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    <div className="timeline__count">2</div>
                    <div className="timeline-info">
                      <h5 className="timeline__title">
                        <FormattedMessage
                          id="Body.sitemap"
                          defaultMessage="Sitemap and Wireframes"
                        />
                      </h5>
                      <p className="timeline__description">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div
                    className="timeline-item-wrapper"
                    data-aos="fade-left"
                    data-aos-delay="400"
                  >
                    <div className="timeline__count">3</div>
                    <div className="timeline-info">
                      <h5 className="timeline__title">
                        <FormattedMessage
                          id="Body.content"
                          defaultMessage="Content Creation"
                        />
                      </h5>
                      <p className="timeline__description">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div
                    className="timeline-item-wrapper"
                    data-aos="fade-right"
                    data-aos-delay="400"
                  >
                    <div className="timeline__count">4</div>
                    <div className="timeline-info">
                      <h5 className="timeline__title">
                        <FormattedMessage
                          id="Body.visual"
                          defaultMessage="Design visual elements"
                        />
                      </h5>
                      <p className="timeline__description">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="our-expertise" className="section-box">
          <div className="container">
            <div className="heading">
              <h2 className="heading__title">
                <FormattedMessage
                  id="Body.process"
                  defaultMessage="Development Process"
                />
              </h2>
              <h3 className="heading__sub-title" data-aos="fade-up">
                <FormattedMessage
                  id="Body.ideas"
                  defaultMessage="How we turn ideas into the reality"
                />
              </h3>
            </div>

            <div className="services-section">
              <div className="services-container swiper-container">
                <div
                  className="services-heading"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <h3 className="services__title">PHP</h3>
                </div>

                <ul className="services swiper-wrapper">
                  <li
                    className="service swiper-slide"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <figure className="service__thumbnail">
                      <img src="assets/img/service-drupal.svg" alt="" />
                    </figure>
                    <h5>
                      <a href="" className="service__link">
                        Drupal
                      </a>
                    </h5>
                  </li>

                  <li
                    className="service swiper-slide"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    <figure className="service__thumbnail">
                      <img src="assets/img/service-laravel.svg" alt="" />
                    </figure>
                    <h5>
                      <a href="" className="service__link">
                        Laraval
                      </a>
                    </h5>
                  </li>

                  <li
                    className="service swiper-slide"
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <figure className="service__thumbnail">
                      <img src="assets/img/service-symphony.svg" alt="" />
                    </figure>
                    <h5>
                      <a href="" className="service__link">
                        Symphony
                      </a>
                    </h5>
                  </li>
                </ul>
              </div>

              <div className="services-container swiper-container">
                <div
                  className="services-heading"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <h3 className="services__title">Javascript</h3>

                  <div
                    className="services-navigation"
                    data-aos="fade-left"
                    data-aos-delay="400"
                  >
                    <span className="services-navigation-prev">
                      <img src="assets/img/prev.svg" alt="" />
                    </span>
                    <span className="services-navigation-next">
                      <img src="assets/img/next.svg" alt="" />
                    </span>
                  </div>
                </div>

                <ul className="services swiper-wrapper">
                  <li
                    className="service swiper-slide"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <figure className="service__thumbnail">
                      <img src="assets/img/service-nodejs.svg" alt="" />
                    </figure>
                    <h5>
                      <a href="" className="service__link">
                        Node JS
                      </a>
                    </h5>
                  </li>

                  <li
                    className="service swiper-slide"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <figure className="service__thumbnail">
                      <img src="assets/img/service-angular.svg" alt="" />
                    </figure>
                    <h5>
                      <a href="" className="service__link">
                        Angular
                      </a>
                    </h5>
                  </li>

                  <li
                    className="service swiper-slide"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    <figure className="service__thumbnail">
                      <img src="assets/img/service-react.svg" alt="" />
                    </figure>
                    <h5>
                      <a href="" className="service__link">
                        React
                      </a>
                    </h5>
                  </li>

                  <li
                    className="service swiper-slide"
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <figure className="service__thumbnail">
                      <img src="assets/img/service-react.svg" alt="" />
                    </figure>
                    <h5>
                      <a href="" className="service__link">
                        React
                      </a>
                    </h5>
                  </li>

                  <li
                    className="service swiper-slide"
                    data-aos="fade-up"
                    data-aos-delay="900"
                  >
                    <figure className="service__thumbnail">
                      <img src="assets/img/service-react.svg" alt="" />
                    </figure>
                    <h5>
                      <a href="" className="service__link">
                        React
                      </a>
                    </h5>
                  </li>

                  <li
                    className="service swiper-slide"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    <figure className="service__thumbnail">
                      <img src="assets/img/service-react.svg" alt="" />
                    </figure>
                    <h5>
                      <a href="" className="service__link">
                        React
                      </a>
                    </h5>
                  </li>
                </ul>
              </div>

              <div className="services-container swiper-container">
                <div className="services-heading" data-aos="fade-right">
                  <h3 className="services__title">E-Commerce system</h3>
                </div>

                <ul className="services swiper-wrapper">
                  <li
                    className="service swiper-slide"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <figure className="service__thumbnail">
                      <img src="assets/img/service-woocommerce.svg" alt="" />
                    </figure>
                    <h5>
                      <a href="" className="service__link">
                        WooCommerce
                      </a>
                    </h5>
                  </li>

                  <li
                    className="service swiper-slide"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <figure className="service__thumbnail">
                      <img src="assets/img/service-magento.svg" alt="" />
                    </figure>
                    <h5>
                      <a href="" className="service__link">
                        Magento
                      </a>
                    </h5>
                  </li>

                  <li
                    className="service swiper-slide"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    <figure className="service__thumbnail">
                      <img
                        src="assets/img/service-drupal-commerce.png"
                        alt=""
                      />
                    </figure>
                    <h5>
                      <a href="" className="service__link">
                        Drupal Commerce
                      </a>
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-us" className="section-box section-contact-us">
          <div className="container">
            <div className="contact-info">
              <h1 className="contact__title" data-aos="fade-up">
                <FormattedMessage
                  id="Body.contactus"
                  defaultMessage="Contact us"
                />
              </h1>

              <div className="row">
                <div
                  className="contant__name col-md-5"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <h6 className="info">
                    Diagonal Software UG (haftungsbeschränkt)
                  </h6>
                </div>
                <div
                  className="contact__location col-md-4"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <h6 className="info">Adelungstraße 30A 64283 Darmstadt</h6>
                </div>
                <div
                  className="contact__email col-md-3"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <h6 className="info">info@madl.software</h6>
                </div>
              </div>
            </div>

            <div
              className="contact-form"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="contact-form-heading">
                <h3 className="contact-form__title">
                  <FormattedMessage
                    id="Body.sayhello"
                    defaultMessage="Say Hello"
                  />
                </h3>
              </div>
              <form action="" method="post" className="form-contact">
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="first-name">
                        <FormattedMessage
                          id="Body.firstname"
                          defaultMessage="First name"
                        />
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        className="form-control"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="last-name">
                        <FormattedMessage
                          id="Body.lastname"
                          defaultMessage="Last name"
                        />
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        className="form-control"
                        placeholder="youremail@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="first-name">
                    <FormattedMessage id="Body.msg" defaultMessage="Message" />
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="20"
                    rows="3"
                    className="form-control"
                    placeholder="Hi, I would like to know how Web Development project would cost to me"
                  />
                </div>

                <div className="form-group text-right">
                  <button type="submit" className="btn btn-primary">
                    <FormattedMessage
                      id="Body.submit"
                      defaultMessage="Submit"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
