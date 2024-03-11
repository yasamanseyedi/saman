
import React, { useState, useEffect } from 'react';
import { Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  FaTrashAlt  } from 'react-icons/fa';


const Newpost =(data)=>{
    console.log(data)
    console.log("Newpost",data);
    console.log("title new post ",data.title)

        function deletePost(data){
        fetch('https://jsonplaceholder.typicode.com/posts/'+data.id, {
          method: 'DELETE',
            });
        document.getElementById(data).style.display="none";
      }
        

    return(
            <Card style={{ margin:"20px 120px" , display:'none' }} key={data.id} id='new'>
             <Card.Title style={{ margin: '0.8rem',color:'blue',textAlign:'center' }} id='title_new'></Card.Title>
             <Card.Body>
              <Card.Text id='body_new' style={{textAlign:'center' }}></Card.Text>
              < FaTrashAlt style={{color:"red",float:'inline-end'}} icon="fa-solid fa-trash-can"
               onClick={() => deletePost(data.id)}/>
              </Card.Body>
             </Card>
    )

    
}

export default Newpost;

