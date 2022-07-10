import { Route } from 'wouter'
import './App.css'
import Nav from './components/Nav'
import Create from './Pages/Create'
import Delete from './Pages/Delete'
import Home from './Pages/home'
import Update from './Pages/Update'

function App() {

  return (
    <div className="App">
      <div className="App-header">
        <Nav />
        <main>
          <Route path='/' component={Home} />
          <Route path='/create' component={Create} />
          <Route path='/delete' component={Delete} />
          <Route path='/update/:id' component={Update} />
        </main>
      </div>
    </div>
  )
}

export default App
