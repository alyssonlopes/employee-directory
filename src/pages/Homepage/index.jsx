import React from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import EmployeeList from "../../components/EmployeeList";
import EmployeeListItem from "../../components/EmployeeListItem";
import PropTypes from "prop-types";

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

  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      this.employeesData = [
        {
          avatar: "kjkj",
          name: "João Antônio",
          position: "cargo",
        },
        {
          avatar: "kjkj",
          name: "João Bione",
          position: "cargo2",
        },
      ];
      this.setState({
        employeesList: this.employeesData,
        isLoading: false,
      });
    }, 2000);
  }

  onSearch = (event) => {
    const { value } = event.target;

    console.log(this.employeesData);

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
          onAction={this.props.onChangePage}
        />
        <SearchBar onSearch={this.onSearch} />
        {this.state.isLoading && "Carregando lista.."}
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
