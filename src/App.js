import './App.css'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Category } from './pages/Category'
import { Recepie } from './pages/Recepie'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main className="container content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/meal/:id" element={<Recepie />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
