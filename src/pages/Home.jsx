const Home = () => {
	return (
		<>
			<img
				className='brightness-50  w-full object-cover'
				src='./img/hero.jpg'
				alt='Hero'
			/>
			<p className='absolute top-[40%] right-0 ml-0 mr-0 text-center w-full text-6xl'>
				<span className='font-bold'>B</span>est{' '}
				<span className='font-bold'>M</span>emories
			</p>
			<p className='absolute top-[48%] right-0 ml-0 mr-0 text-center w-full text-3xl font-normal'>
				Каждый снимок — шедевр. <br />
				Сохраним моменты вашей жизни.
			</p>
		</>
	)
}

export default Home
