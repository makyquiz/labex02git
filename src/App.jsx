import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './Title'
import NavBar from './NavBar';
import Contents from './Contents';

function App() {
  return (
    <>
      <Title title="Lorem Ipsum" />
      <NavBar />
      <Contents />
    </>
  );
}

export default App
