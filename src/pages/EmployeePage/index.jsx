import React, { Component } from "react";
import { getEmployeeFromJson } from "../../adapters/employee";
import EmployeeListItem from "../../components/EmployeeListItem";
import Header from "../../components/Header";
import Loading from "../../components/Loading";

class EmployeePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: null,
      greetings: "",
      isLoading: true,
    };
  }

  getHeader = () => {
    return (
      <>
        <Header title={"Employee"} backPath={"/"} />
        <br />
      </>
    );
  };

  async componentDidMount() {
    try {
      const {
        location: { state, search },
        match: { params },
      } = this.props;

      const greetings = new URLSearchParams(search).get("greetings");

      if (state) {
        this.setState({
          isLoading: false,
          employee: state.employee,
          greetings,
        });
      } else {
        const response = await fetch(`/api/employees/${params.id}`);
        const json = await response.json();

        console.log({ json });

        this.setState({
          isLoading: false,
          employee: getEmployeeFromJson(json),
          greetings,
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    console.log(this.props);

    if (this.state.isLoading) return <Loading />;

    if (this.state.employee) {
      return (
        <>
          {this.getHeader()}
          {this.state.greetings && `${this.state.greetings},`}
          <br />
          <EmployeeListItem {...this.state.employee} />
          <br />
          mais detalhes..
        </>
      );
    }

    return (
      <>
        <Header title={"Employee"} backPath={"/"} />
        <br />
        No content
      </>
    );
  }
}

export default EmployeePage;
