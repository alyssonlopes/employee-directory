import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "aaaaaa",
      position: "bbbbbb",
      phone: "4444",
      isLoading: true,
    };
  }

  handleChange = (event) => {
    console.log({ event });
    const inputName = event.target.name;
    const value = event.target.value;
    if (inputName === "phone") {
      const notANumber = value.replace(/\d/g, "");
      console.log("notANumber", notANumber);
      const ultimoDigito = value[value.length - 1];

      if (Number(ultimoDigito) || ultimoDigito === "-") {
        this.setState({ [inputName]: `${event.target.value}` });
      }
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

  componentDidUpdate;

  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      console.log(this);
      this.setState({
        name: "Alysson Lopes",
        position: "Teacher",
        phone: "7777-7777",
        isLoading: false,
      });
    }, 5000);
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
            <input
              type="text"
              name="position"
              value={this.state.position}
              onChange={this.handleChange}
              required
            ></input>
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
