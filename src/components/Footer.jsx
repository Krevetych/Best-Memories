import { NavLink } from 'react-router-dom'

const Footer = () => {
	return (
		<>
			<footer>
				<p className='absolute bottom-3 w-full flex items-center justify-center font-bold text-lg'>&copy; {new Date().getFullYear()} Все права защищены 😊</p>
			</footer>
		</>
	)
}

export default Footer
