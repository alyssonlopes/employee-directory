import React from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import EmployeeList from "../../components/EmployeeList";
import EmployeeListItem from "../../components/EmployeeListItem";
import PropTypes from "prop-types";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
import { getEmployeeFromJson } from "../../adapters/employee";

class Homepage extends React.Component {
  static propTypes = {
    onChangePage: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      title: "Employee Directory",
      employeesList: [],
      isLoading: true,
    };

    this.employeesData = [];
  }

  setEmployeesData = (results) => {
    this.employeesData = results;

    this.setState({
      employeesList: this.employeesData,
      isLoading: false,
    });
  };

  async componentDidMount() {
    try {
      const response = await fetch("/api/employees");
      const json = await response.json();

      const list = json.results.map(getEmployeeFromJson);

      this.setEmployeesData(list);
    } catch (error) {
      console.error(error);
    }
  }

  onSearch = (event) => {
    const { value } = event.target;

    this.setState({
      employeesList: this.employeesData.filter((employee) => {
        return employee.name.toLowerCase().includes(value.toLowerCase());
      }),
    });
  };

  render() {
    return (
      <>
        <Header
          title={this.state.title}
          actionText="Add"
          addPath={"/register"}
        />
        <SearchBar onSearch={this.onSearch} />

        {this.state.isLoading && <Loading />}
        {!this.state.isLoading && (
          <EmployeeList>
            {this.state.employeesList.map((employee, index) => {
              console.log({ employee });
              return (
                <Link
                  key={index}
                  to={{
                    pathname: "/employee",
                    search: "?greetings=Welcome to Employee Directory",
                    state: { employee },
                  }}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <EmployeeListItem {...employee} />
                </Link>
              );
            })}
          </EmployeeList>
        )}
      </>
    );
  }
}

export default Homepage;
