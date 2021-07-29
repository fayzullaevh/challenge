import React,{useState, useEffect} from "react";
import "./Table.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

const TableUsers = () => {

  const [users, setUsers] = useState([]);
    
  useEffect(()=>{
     axios.get('http://localhost:3000/users')
     .then(response=>{
        setUsers(response.data);
     });

     console.log(users);
  },[]);

  return (
    <>
      <h1 className="header">All Users</h1>
      <p className="header">Users and their age</p>
      <div className="table">
    
     {users.length===0? <div className='spinner'><Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner></div>:
         
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user=>{
              return (
                <tr>
                <td>{user.username}</td>
                <td>{user.age}</td>
              </tr>
              )
          })} 
        </tbody>
      </Table>}
      </div>
    </>
  );
};

export default TableUsers;