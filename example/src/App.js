import React, { Component } from 'react'

import { ExampleComponent, Button, AnotherButton } from 'boilerplate'

export default class App extends Component {
  
  arrowFunctionTest2 = () => (
    <div>Arrow Function 2 </div>
  );
  
  
  render () {
    return (
      <div>
        { this.arrowFunctionTest2() }
        <ExampleComponent text='Modern React component module' />
        <Button />
        <AnotherButton />
      </div>
    )
  }
}
