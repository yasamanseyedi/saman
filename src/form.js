import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import create_post from "./data";
import Newpost from './postcom';

const FormExample = () => {
  const [inputValue, setInputValue] = useState('');
  

  const schema = yup.object().shape({
    title: yup.string().required("**title is a required field**"),
    body: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    create_post(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        title:
        <input
          {...register("title")}
        />
      </label><br/>
      {errors.title && <p style={{color:'red'}}>{errors.title.message}</p>}
      <label>
        body:
        <textarea
          {...register("body")}
        />
      </label><br/>
      <button type="submit" className='submit'>Add Post</button>
    </form>
  );
};

export default FormExample;