import { NavLink } from 'react-router-dom'

const Error = () => {
	return (
		<main className='h-screen w-full flex flex-col justify-center items-center'>
			<h1 className='text-9xl font-extrabold text-white tracking-widest'>
				404
			</h1>
			<div className='bg-[#7554a3] px-2  text-sm rounded rotate-12 absolute'>
				Страница не найдена
			</div>
			<button className='mt-5 px-8 py-3 duration-300 rounded-lg bg-[#7554a3] hover:bg-[#53337c]'>
				<NavLink to='/' className='text-xl font-semibold'>
          Домой
        </NavLink>
			</button>
		</main>
	)
}

export default Error
