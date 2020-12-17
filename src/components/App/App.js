import React, { Suspense } from 'react';
import NavBar from '../NavBar';

export default function App({ isLoading, message }) {
  return (
    <>
      <NavBar />
      <h1>My project</h1>
    </>
  );
}
