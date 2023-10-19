const Contacts = () => {
	return (
		<main>
			<p className='text-center mt-[5%] text-4xl font-bold'>Где нас найти</p>
			<img className='block my-0 mx-auto mt-5' src='./map.png' alt='' />
			<p className='text-center mt-[5%] text-4xl font-bold'>Наши контакты</p>
			<div className='flex flex-col text-lg text-[#7554a3] items-center justify-center text-center font-semibold gap-2 my-5'>
				<div>
					<p className='text-2xl font-bold text-center text-white'>Адрес:</p>{' '}
					Москва, улица проспект Мира, 119, стр. 186. <br /> Мы в парке "ВДНХ".
					Ближайшее метро - Ботанический сад,
				</div>
				<div>
					<p className='text-2xl font-bold text-center text-white'>Tелефон:</p>{' '}
					+7(903)567-22-45
				</div>
				<div>
					<p className='text-2xl font-bold text-center text-white'>email:</p>{' '}
					bestmemories-photo@mail.ru
				</div>
			</div>
		</main>
	)
}

export default Contacts
