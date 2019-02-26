import React, { Component } from 'react'

import { ExampleComponent, Button } from 'boilerplate'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text='Modern React component module' />
        <Button />
      </div>
    )
  }
}
