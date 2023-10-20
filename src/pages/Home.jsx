const Home = () => {
	return (
		<main>
			<img
				className='brightness-50 h-screen w-full object-cover'
				src='./img/hero.jpg'
				alt='Hero'
			/>
			<p className='absolute top-[40%] right-0 ml-0 mr-0 text-center w-full text-6xl font-bold'>
				Best Memorise
			</p>
			<p className='absolute top-[48%] right-0 ml-0 mr-0 text-center w-full text-3xl font-normal'>
				Каждый снимок — шедевр. <br />
				Сохраним моменты вашей жизни.
			</p>
		</main>
	)
}

export default Home
