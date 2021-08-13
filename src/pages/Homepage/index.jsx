import React from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import EmployeeList from "../../components/EmployeeList";
import EmployeeListItem from "../../components/EmployeeListItem";

class Homepage extends React.Component {
  render() {
    return (
      <>
        <Header titulo={"Employeer Directory"} />
        <SearchBar />
        <EmployeeList>
          <EmployeeListItem></EmployeeListItem>
          <EmployeeListItem></EmployeeListItem>
          <EmployeeListItem></EmployeeListItem>
          <EmployeeListItem></EmployeeListItem>
        </EmployeeList>
      </>
    );
  }
}
export default Homepage;
