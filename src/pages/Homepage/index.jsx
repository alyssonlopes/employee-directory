import React from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import EmployeeList from "../../components/EmployeeList";
import EmployeeListItem from "../../components/EmployeeListItem";
import PropTypes from "prop-types";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
import { getEmployeeFromJson } from "../../adapters/employee";
import { EmployeeContext } from "../../providers/Employee";

class InnerHomepage extends React.Component {
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
    console.log(this.props);
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
                  to="/employee"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  onClick={() => this.props.setEmployee(employee)}
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

const Homepage = ({ children, ...rest }) => {
  return (
    <EmployeeContext.Consumer>
      {(value) => {
        console.log(value);
        return (
          <InnerHomepage {...rest} {...value}>
            {children}
          </InnerHomepage>
        );
      }}
    </EmployeeContext.Consumer>
  );
};

export default Homepage;
