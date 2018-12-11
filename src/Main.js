import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';
import localeData from '../public/locales/data.json';
import App from './App';
addLocaleData([...en, ...de]);

class Main extends Component {
  render() {
    return (
      <IntlProvider
        locale={Object.values(this.props.language)[0]}
        messages={
          localeData[
            Object.values(this.props.language)[0]
              .toLowerCase()
              .split(/[_-]+/)[0]
          ]
        }
      >
        <App />
      </IntlProvider>
    );
  }
}
function mapStateToProps(state) {
  return { language: state.language };
}
export default connect(mapStateToProps)(Main);
