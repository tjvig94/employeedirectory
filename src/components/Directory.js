import React, { useState, useEffect } from 'react';
import getUsers from '../utils/API';
import TableRow from './TableRow';

function Directory() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
      loadUsers();
  }, []);

  function loadUsers() {
    getUsers().then(res => setEmployees(res));
  }

  function filterEmployees(employee) {
    if (employee.first.toLowerCase().includes(searchTerm.toLowerCase()) || employee.last.toLowerCase().includes(searchTerm.toLowerCase())) {
      return employee;
    }
  };

  return(
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <h1 className="navbar-brand">Employee Directory</h1>
        <form className="d-flex">
          <input className="form-control me-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search"
            onChange={event => {setSearchTerm(event.target.value)}}>
          </input>
        </form>
      </div>
    </nav>
      <table className="table">
          <thead>
              <tr>
                  <th scope="col">Photo</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone Number</th>
              </tr>
          </thead>
          <tbody>
            {employees.filter(employee => filterEmployees(employee)).map(employee => {
              return(
                <TableRow 
                  key={Math.random()}
                  image={employee.image}
                  first={employee.first}
                  last={employee.last}
                  email={employee.email}
                  phone={employee.phone}
                />  
              ) 
            })}
          </tbody>
      </table>
    </div>
  )
}

export default Directory;
