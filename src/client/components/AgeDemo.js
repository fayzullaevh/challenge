import React,{useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from 'react-bootstrap/Dropdown';
import './AgeDemo.css';
import axios from "axios";
import Table from 'react-bootstrap/Table';

const AgeDemo = () => {

  const [items, setItems]= useState(['carrot','beef','apple','grapes','cake','tv','crackers','chips','ham']);
  const [results, setResults] = useState([]);

  

  const handleClick = (item)=> {
      axios.get(`http://localhost:3000/users/age?item=${item}`)
      .then(response=> {
            setResults(response.data);
      })
  }
    
  return (
    <>
      <h1 className="header">Age Demographics of Users With ____</h1>
      <div className="drop">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Item
        </Dropdown.Toggle>

        <Dropdown.Menu>
            {items.map(item=>{
                return (
                    <Dropdown.Item onClick={()=>{
                        setResults([]);
                        handleClick(item)
                    }
                }>{item}</Dropdown.Item>
                )
            })}
        </Dropdown.Menu>
      </Dropdown>
      </div>
      <div className="age_table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Age</th>
            <th>Count</th>
          </tr>
        </thead>
        
        <tbody>
            
          {results.map(result=>{
              return (
                <tr>
                <td>{result.age}</td>
                <td>{result.count}</td>
              </tr>
              )
          })}  
        </tbody>
      </Table>
      </div>
    </>
  );
};

export default AgeDemo;
