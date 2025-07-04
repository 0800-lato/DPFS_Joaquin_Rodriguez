// import React from 'react'
import { useState, useEffect } from "react";
import {Product} from '../product/product';
import './last.css'

export const LastProduct = () => {
  const [model, setModel] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/api/products/last-product")
      .then((res) => res.json())
      .then((data) => setModel(data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="last">
      <div>Ultimo producto agregado</div>
      {model ? (
        <Product model={model}/>
      ) : (
        <p>Cargando...</p>
      )
      }
    </div>
  )
}