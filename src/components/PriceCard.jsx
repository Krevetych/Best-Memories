import { useState } from 'react'
import MoreModal from './MoreModal'
import RentForm from './RentForm'

const PriceCard = ({ img, title, price, model, desc }) => {
	const [more, setMore] = useState(false)
	const [rent, setRent] = useState(false)

	return (
		<>
			{more || rent
				? document.body.classList.add('overflow-hidden')
				: document.body.classList.add('overflow-y-auto')}
			<div className='relative max-w-[300px] h-[450px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
				<div className='absolute bg-[#53337c] mx-2 my-2 px-[3px] py-[2px] rounded-md'>
					{model}
				</div>
				<img
					className='rounded-t-lg w-[300px] h-[300px] object-cover'
					src={`./price/${img}`}
					alt=''
				/>
				<div className='p-5'>
					<h5 className='mb-2 text-2xl line-clamp-1 font-bold tracking-tight text-gray-900 dark:text-white'>
						{title}
					</h5>
					<p className='mb-3 font-normal line-clamp-3 text-gray-700 dark:text-gray-400 '>
						{price}
					</p>
					<div className='flex items-center justify-between'>
						<button
							onClick={() => setRent(true)}
							type='button'
							className='inline-flex items-center px-3 py-2 text-sm font-medium text-center duration-500 text-white bg-[#7554a3] rounded-lg hover:bg-[#53337c]'
						>
							Записаться
						</button>
						<button
							onClick={() => setMore(true)}
							type='button'
							className='inline-flex items-center px-3 py-2 text-sm font-medium text-center duration-500 text-white border-2 border-solid border-[#53337c] rounded-lg hover:bg-[#7554a3]'
						>
							Подробнее
						</button>
					</div>
				</div>
			</div>

			{more ? (
				<MoreModal
					setMore={setMore}
					title={title}
					desc={desc}
					price={price}
					model={model}
				/>
			) : null}

			{rent ? <RentForm setRent={setRent} price={price} /> : null}
		</>
	)
}

export default PriceCard
