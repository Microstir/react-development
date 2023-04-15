import React from 'react'

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar,  } from './components';
import "./app.css";

const App = () => {
  return (
    <div className='App'>
    <div className='gradient__bg'> 
    <Navbar></Navbar>
    <Header></Header>
    </div>
    <Brand></Brand>
    <Features></Features>
    <Footer></Footer>
    <Header></Header>
    <Possibility></Possibility>
    <WhatGPT3></WhatGPT3>
    </div>
  )
}

export default App