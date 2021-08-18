import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      positions: [],
      selectedPosition: "",
      phone: "",
      isLoading: true,
    };
  }

  setPhone = (value) => {
    const notANumber = value.replace(/\d/g, "");
    console.log("notANumber", notANumber);
    const ultimoDigito = value[value.length - 1];

    if (Number(ultimoDigito) || ultimoDigito === "-") {
      this.setState({ phone: value });
    }
  };

  handleChange = (event) => {
    console.log("handleChange", { event });
    const inputName = event.target.name;
    const value = event.target.value;
    if (inputName === "phone") {
      this.setPhone(value);
    } else {
      this.setState({ [inputName]: event.target.value });
    }
  };

  onSubmit = (event) => {
    console.log("onSubmit", { event });
    event.preventDefault();

    console.log("checkValidity", event.target.checkValidity());
  };

  onInvalid = (event) => {
    event.target.setCustomValidity("Por favor informe seu nome");
  };

  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({
        positions: ["Aluno", "Professor", "Coordenador"],
        isLoading: false,
      });
    }, 1000);
  }

  render() {
    console.log("render", this.state);
    return (
      <>
        {this.state.isLoading && "Carregando..."}
        {!this.state.isLoading && (
          <form onSubmit={this.onSubmit}>
            <label htmlFor="name">Nome: </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              onInvalid={this.onInvalid}
              required
            />
            <br />
            <label htmlFor="position">Position: </label>
            <select
              value={this.state.selectedPosition}
              onChange={this.handleChange}
              name="selectedPosition"
            >
              {this.state.positions.map((position, index) => {
                return (
                  <option key={index} value={position}>
                    {position}
                  </option>
                );
              })}
            </select>
            <br />
            <label htmlFor="phone">Phone: </label>
            <input
              type="tel"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              pattern="[0-9]{4}-[0-9]{4}"
              placeholder="3333-3333"
              maxLength="9"
            ></input>

            <input type="submit" value="Send" />
          </form>
        )}
      </>
    );
  }
}

export default Form;
