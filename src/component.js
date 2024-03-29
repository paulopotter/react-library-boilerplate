import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  };
  
  arrowFunctionTest = () => (
    <div>Arrow Function</div>
  );
  
  render() {
    const {
      text
    } = this.props;
    
    return (
      <>
        <div className={styles.test}>
          Example Component: {text}
        </div>
        { this.arrowFunctionTest() }
      </>
    )
  }
}
