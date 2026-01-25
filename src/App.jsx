import './App.css'
import Badge from './components/Badge'
import Badges from './components/Badges'
import Navigation from './Navigation'
import Typewriter from './utils/Typewriter'

function App() {
  const badgeThemes = [
    'gray',
    'red',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple',
    'pink'
  ]

  return (
    <main className='main-container'>
      <Navigation />
      <Typewriter />
      <Badges>
        {
          badgeThemes.map(badge => {
            return <Badge colorTheme={badge} border="pill" />
          })
        }
      </Badges>
      <Badges>
        {
          badgeThemes.map(badge => {
            return <Badge colorTheme={badge} border="square" />
          })
        }
      </Badges>
    </main>
  )
}

export default App
