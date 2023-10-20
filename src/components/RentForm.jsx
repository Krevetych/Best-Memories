import { photographers } from '../constans'
import { useNavigate } from 'react-router-dom'

const RentForm = ({ price }) => {
	const navigate = useNavigate()
	const handleSubmit = event => {
		event.preventDefault()

		navigate('/')
	}

	return (
		<>
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-auto z-[60] w-1/3 max-h-screen none bg-[#10272d] p-5'>
				<form className='flex flex-col gap-y-3' onSubmit={handleSubmit}>
					<div className='flex flex-col gap-y-2'>
						<label htmlFor='name' className='text-xl font-bold'>
							Ваше имя
						</label>
						<input
							type='text'
							className='outline-none border-none h-[50px] px-3 bg-gray-700 rounded-lg'
							id='name'
							name='name'
							placeholder='Введите ваше имя'
							required
						/>
					</div>
					<div className='flex flex-col gap-y-2'>
						<label htmlFor='phone' className='text-xl font-bold'>
							Ваш номер телефона
						</label>
						<input
							type='tel'
							className='outline-none border-none h-[50px] px-3 bg-gray-700 rounded-lg'
							name='phone'
							id='phone'
							placeholder='Введите ваш номер телефона'
							required
						/>
					</div>
					<div className='flex flex-col gap-y-2'>
						<label htmlFor='countries' className='text-xl font-bold'>
							Выберите фотографа
						</label>
						<select
							id='countries'
							className='bg-gray-50 outline-none border-none text-white/25 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							name='Фотограф'
							required
						>
							<option value=''>Выберите фотографа</option>
							{photographers.map(e => (
								<option value={e.name}>{e.name}</option>
							))}
						</select>
					</div>
					<p className='font-semibold text-white/70 text-lg'>Цена: {price}</p>
					<button
						className='bg-[#7554a3] px-3 py-2 rounded-lg duration-500 hover:bg-[#53337c]'
						type='submit'
					>
						Записаться
					</button>
				</form>
			</div>
			<div className='fixed top-0 left-0 w-full h-full items-center justify-center bg-black/50 z-40'></div>
		</>
	)
}

export default RentForm
