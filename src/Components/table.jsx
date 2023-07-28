import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import './../App.css'

function DarkExample() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const endpoint = 'http://rsudsamrat.site:8080/pengadaan/dev/v1/products/vendor/VEN1690350567205EA72';

    axios.get(endpoint)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="container my-5">
    <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.description}</td>
            <td>{product.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
}

export default DarkExample;
