import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { links } from '../constans'
import { useLocation } from 'react-router-dom'

const Header = () => {
	const [colorChange, setColorchange] = useState(false)
	const changeNavbarColor = () => {
		if (window.scrollY >= 50) {
			setColorchange(true)
		} else {
			setColorchange(false)
		}
	}

	window.addEventListener('scroll', changeNavbarColor)

	return (
		<>
			<header
				className={`${
					!colorChange
						? 'bg-transparent'
						: 'bg-[#10272d] scale-90 rounded-lg border-2 border-solid border-[#7554a3]'
				} fixed duration-500 top-0 right-0 left-0 z-30 flex items-center justify-between px-10 py-6`}
			>
				<NavLink to='/'>
					<p className='font-bold text-3xl'>BM</p>
					<span className='absolute top-[30%] left-[5%] bg-red-700 w-[10px] h-[10px] rounded-full'></span>
				</NavLink>
				<nav className='flex gap-5'>
					{links.map(item => (
						<NavLink
							key={item.title}
							to={item.link}
							className={({ isActive }) =>
								isActive
									? 'text-[#7554a3] duration-500 text-xl font-bold disabled:opacity-75 hover:text-[#7554a3]'
									: 'duration-500 text-xl font-bold hover:text-[#7554a3]'
							}
						>
							{item.title}
						</NavLink>
					))}
				</nav>

				<div className='flex gap-5'>
					<NavLink
						to='/register'
						className={({ isActive }) =>
							isActive
								? 'duration-500 text-xl font-semibold opacity-25 bg-[#7554a3] px-3 py-2 text-white rounded-lg cursor-default'
								: 'duration-500 text-xl font-semibold bg-[#7554a3] px-3 py-2 text-white rounded-lg cursor-pointer hover:bg-[#53337c]'
						}
					>
						Регистрация
					</NavLink>
					<NavLink
						to='/login'
						className={({ isActive }) =>
							isActive
								? 'duration-500 text-xl font-semibold opacity-25 bg-[#7554a3] px-3 py-2 text-white rounded-lg cursor-default'
								: 'duration-500 text-xl font-semibold bg-[#7554a3] px-3 py-2 text-white rounded-lg cursor-pointer hover:bg-[#53337c]'
						}
					>
						Вход
					</NavLink>
				</div>
			</header>
		</>
	)
}

export default Header
