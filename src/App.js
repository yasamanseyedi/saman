import React, { useState, useEffect } from 'react';
import { Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  FaTrashAlt  } from 'react-icons/fa';
import FormExample from './form.js';
import './main.css';
import Newpost from './postcom.js';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);


  function deletePost(data){
    fetch('https://jsonplaceholder.typicode.com/posts/'+data, {
      method: 'DELETE',
        });
    document.getElementById(data).style.display="none";
  }

  return (
    <div>
      <div className='backform'>
        <h1 className='header' >Creat New Post:</h1>
        <FormExample></FormExample>
      </div>
      <h1 style={{marginLeft:'30px',marginTop:'20px', textAlign:'center'}}>List of posts:</h1>
      {data.length > 0 ? (
           <div id='listOfpost'>
            <Newpost></Newpost>
           {data.map(item => (
             <Card style={{margin:"20px 120px" }} key={item.id} id={item.id}>
             <Card.Title style={{ margin: '0.8rem',color:'blue',textAlign:'center' }}>{item.title}</Card.Title>
             <Card.Body>
              <Card.Text style={{textAlign:'center' }}>{item.body}</Card.Text>
              < FaTrashAlt style={{color:"red",float:'inline-end'}} icon="fa-solid fa-trash-can"
               onClick={() => deletePost(item.id)}/>
              </Card.Body>
             </Card>
           ))}
           
         </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};






export default App;