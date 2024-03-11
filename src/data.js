import React, { useState, useEffect } from 'react';
import { Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  FaTrashAlt  } from 'react-icons/fa';
import deletePost from './App.js';
import Newpost from './postcom.js';



const create_post =(data)=>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: data.title,
          body: data.body,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
        Newpost(data)
        document.getElementById('title_new').innerText = data.title;
        document.getElementById('body_new').innerText = data.body;
        document.getElementById('new').style.display = 'block';
    
}

export default create_post;