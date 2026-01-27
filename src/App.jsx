import React from 'react'
import './App.css'
import Badges from './components/badges/Badges'
import Banners from './components/banners/Banners'
import Card from './components/cards/Card'
import TestimonialWithImg from './components/testimonials/TestimonialWithImg'
import Navigation from './Navigation'
import Typewriter from './utils/Typewriter'

function App() {
  const [page, setPage] = React.useState('Badges')
  
  return (
    <main className='main-container'>
      <Navigation setPage={setPage} currentPage={page} />
      <Typewriter value={page} />
      {page === 'Badges' && <Badges />}
      {page === 'Banners' && <Banners />}
      {page === 'Cards' && <Card />}
      {page === 'Testimonials' && <TestimonialWithImg />}
    </main>
  )
}

export default App
