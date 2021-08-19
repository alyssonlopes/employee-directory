import React, { Component } from "react";
import Loading from "../Loading";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

class EmployeeForm extends Component {
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

  async componentDidMount() {
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
        {this.state.isLoading && <Loading />}
        {!this.state.isLoading && (
          <form onSubmit={this.onSubmit} style={{ margin: 20 }}>
            <TextField
              type="text"
              name="name"
              label="Name"
              value={this.state.name}
              onChange={this.handleChange}
              required
              fullWidth
            />

            <TextField
              label="E-mail"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
              fullWidth
              helperText={this.state.errorMessage}
              error={!!this.state.errorMessage}
            />

            <TextField
              label="Position"
              select
              value={this.state.selectedPosition}
              onChange={this.handleChange}
              name="selectedPosition"
              fullWidth
            >
              {this.state.positions.map((position, index) => {
                return (
                  <MenuItem key={index} value={position}>
                    {position}
                  </MenuItem>
                );
              })}
            </TextField>

            <TextField
              label="Phone"
              type="tel"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              pattern="[0-9]{4}-[0-9]{4}"
              placeholder="3333-3333"
              maxLength="9"
              fullWidth
            />

            <Button
              variant="contained"
              size="medium"
              color="primary"
              type="submit"
              style={{ marginTop: 30, float: "right" }}
            >
              Send
            </Button>
          </form>
        )}
      </>
    );
  }
}

export default EmployeeForm;
