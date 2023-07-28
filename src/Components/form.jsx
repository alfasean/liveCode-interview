import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import swal from 'sweetalert';
import './../App.css';

function BasicExample() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const alertSuccess = () => {
    swal({
      title: "Success",
      text: "Successfully entered the data",
      icon: "success",
      button: "Oke",
    });
  }

  const alertError = () => {
    swal({
      title: "Error",
      text: "The data was not successfully input",
      icon: "error",
      button: "Oke",
    });
  }

  const clearData = () => {
    setName('');
    setPrice('');
    setQuantity('');
    setDescription('');
  }

  const handleSubmit = () => {
    const apiUrl = 'http://rsudsamrat.site:8080/pengadaan/dev/v1/products/VEN1690350567205EA72';
    const dataSend = {
      name: name,
      price: price,
      quantity: quantity,
      description: description,
      imageUrl: '',
      categoryIds: [5],
      subCategoryId: [],
      status: 'APPROVED'
    };

    axios.post(apiUrl, dataSend)
      .then((response) => {
        clearData();
        alertSuccess();
      })
      .catch((error) => {
        console.error('Error:', error);

        if (error.response) {
          alertError();
        }
      });
  };

  return (
    <div className="container my-3">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" onChange={handleName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Price" onChange={handlePrice} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" placeholder="Quantity" onChange={handleQuantity} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>description</Form.Label>
        <Form.Control type="text" placeholder="Description" onChange={handleDescription} />
      </Form.Group>

      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default BasicExample;
