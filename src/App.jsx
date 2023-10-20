import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Job from './pages/Job'
import Contacts from './pages/Contacts'
import Price from './pages/Price'
import Error from './pages/Error'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/job' element={<Job />} />
				<Route path='/contacts' element={<Contacts />} />
				<Route path='/price' element={<Price />} />
				<Route path='*' element={<Error />} />
				{/*<Route path='/register' element={} />
        <Route path='/login' element={} />*/}
			</Routes>
			<Footer />
		</>
	)
}

export default App
