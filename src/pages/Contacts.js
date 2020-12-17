import React from 'react';
import { Container, Table } from 'react-bootstrap';

export default function Contacts() {
  return (
    <Container>
      <h2>Contacts Page</h2>
      <Table striped border hover>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Number</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ostap</td>
            <td>Pluzhnik</td>
            <td>093-404-32-39</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ostap</td>
            <td>Pluzhnik</td>
            <td>093-404-32-39</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Ostap</td>
            <td>Pluzhnik</td>
            <td>093-404-32-39</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Ostap</td>
            <td>Pluzhnik</td>
            <td>093-404-32-39</td>
          </tr>
          <tr>
            <td>5</td>
            <td colSpan="2">Ostap Pluzhnik</td>
            <td>093-404-32-39</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
