// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import GenreMovieList from './Componets/GenreMovieList'
import Header from './Componets/Header'
import ProductionHouse from './Componets/ProductionHouse'
import Slider from './Componets/Slider'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="">

      <Header />

      <Slider />

      <ProductionHouse />

      <GenreMovieList/>

    </div>
  )
}

export default App
