import React from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import EmployeeList from "../../components/EmployeeList";
import EmployeeListItem from "../../components/EmployeeListItem";
import PropTypes from "prop-types";
import Loading from "../../components/Loading";

class Homepage extends React.Component {
  static propTypes = {
    onChangePage: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      title: "Employeer Directory",
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

      const list = json.results.map(({ picture, name, location }) => ({
        avatar: picture.thumbnail,
        name: `${name.first} ${name.last}`,
        position: location.country,
      }));

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
              return <EmployeeListItem key={index} {...employee} />;
            })}
          </EmployeeList>
        )}
      </>
    );
  }
}

export default Homepage;
