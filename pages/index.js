import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

const DINOSAURS_ENDPOINT = 'https://dinosaur-facts.firebaseio.com/dinosaurs.json'

export default class Index extends Component {
  static async getInitialProps() {
    const data = await fetch(DINOSAURS_ENDPOINT)
    const dinosaurs = await data.json()
    return {
      dinosaurs
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Dinosaurs</h1>
        <div>{Object.entries(this.props.dinosaurs).map(([name, dinosaur]) =>
          <h2 key={name}>Name: {name}, order: {dinosaur.order}</h2>
        )}</div>
      </div>
    )
  }
}
