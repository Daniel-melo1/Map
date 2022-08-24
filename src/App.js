import React, { Component } from "react";

export default class App extends Component {
  state = {
    dados: [
      {
        name: "Daniel",
        age: 18,
        amigo: "Renan"
      },
      {
        name: "Gabriel",
        age: 22,
        amigo: "Giovana"
      },
      {
        name: "Samira",
        age: 28,
        amigo: "Sabrina"
      },
      {
        name: "Alisson",
        age: 18,
        amigo: "Vinicius"
      },
      {
        name: "Felipe",
        age: 24,
        amigo: "Eder"
      },
      {
        name: "Luna",
        age: 19,
        amigo: "Anna"
      }
    ]
  };
  render() {
    return (
      <div>
        {this.state.dados.map((item) => (
          <div>
            <h2>Name: {item.name}</h2>
            <h2>Team: {item.amigo}</h2>
          </div>
        ))}
      </div>
    );
  }
}
