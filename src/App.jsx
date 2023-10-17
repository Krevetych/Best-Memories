import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				{/*<Route path='/job' element={} />
        <Route path='/categorys' element={} />
        <Route path='/price' element={} />
        <Route path='/contacts' element={} />
        <Route path='/register' element={} />
        <Route path='/login' element={} />*/}
			</Routes>
			<Footer />
		</>
	)
}

export default App
