import React from 'react'
import{
  BrowserRouter as Roter,
  Route,
  Routes
}
from 'react-router-dom'
import Header from './components/Header/Header'






export  default function App(){
  return(
    <Roter>
      <Header>
        <Routes>

        </Routes>
      </Header>
    </Roter>
  )
}