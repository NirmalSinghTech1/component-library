import React from 'react'
import './App.css'
import Badges from './components/badges/Badges'
import Banners from './components/banners/Banners'
import Navigation from './Navigation'
import Typewriter from './utils/Typewriter'

function App() {
  const [page, setPage] = React.useState('Badges')
  console.log(page)
  return (
    <main className='main-container'>
      <Navigation setPage={setPage} />
      <Typewriter value={page} />
      {page === 'Badges' && <Badges />}
      {page === 'Banners' && <Banners />}
    </main>
  )
}

export default App
