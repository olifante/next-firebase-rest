import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

const FIREBASE_SECRET = process.env.FIREBASE_SECRET
const DINOSAURS_ENDPOINT = 'https://olifante-a2cf8.firebaseio.com/dinosaurs.json'
const SECRET_DINOSAURS_ENDPOINT = DINOSAURS_ENDPOINT + '?auth=' + FIREBASE_SECRET

export default class Index extends Component {
  static async getInitialProps() {
    const data = await fetch(SECRET_DINOSAURS_ENDPOINT)
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
