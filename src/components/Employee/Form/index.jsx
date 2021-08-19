import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      positions: [],
      selectedPosition: "",
      phone: "",
      isLoading: true,
      errorMessage: "",
    };
  }

  setPhone = (value) => {
    const ultimoDigito = value[value.length - 1];

    if (Number(ultimoDigito) || ultimoDigito === "-") {
      this.setState({ phone: value });
    }
  };

  handleChange = (event) => {
    const inputName = event.target.name;
    const value = event.target.value;
    if (inputName === "phone") {
      this.setPhone(value);
    } else {
      this.setState({ [inputName]: event.target.value });
    }
  };

  checkEmailValidity = async () => {
    const response = await fetch(`/api/verifica-email/${this.state.email}`);

    const { validity } = await response.json();

    return validity;
  };

  onSubmit = async (event) => {
    console.log("onSubmit", { event });
    event.preventDefault();

    const isValid = await this.checkEmailValidity();
    if (!isValid) {
      this.setState({
        errorMessage: "Informe um e-mail válido",
      });
    } else {
      // TODO: enviar pro servidor
      this.setState({
        errorMessage: "",
      });
    }
  };

  // onInvalid = (event) => {
  //   event.target.setCustomValidity("Por favor informe seu nome");
  // };

  async componentDidMount() {
    console.log("componentDidMount");

    const response = await fetch("/api/positions");

    const { positions } = await response.json();

    this.setState({
      positions,
      isLoading: false,
    });
  }

  render() {
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
              required
            />
            <br />
            <label htmlFor="email">E-mail: </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
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
            <br />
            {this.state.errorMessage && <span>{this.state.errorMessage}</span>}
          </form>
        )}
      </>
    );
  }
}

export default Form;
