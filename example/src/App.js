import React, { Component } from 'react'

import { ExampleComponent, Button, AnotherButton } from 'boilerplate'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text='Modern React component module' />
        <Button />
        <AnotherButton />
      </div>
    )
  }
}
