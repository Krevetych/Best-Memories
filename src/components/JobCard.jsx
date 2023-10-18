import { useState } from 'react'
import Modal from './Modal'

const JobCard = ({ title, desc, photo }) => {
	const [showModal, setShowModal] = useState(false)
	return (
		<>
			<div className='max-w-[300px] h-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
				<img
					className='rounded-t-lg w-[300px] h-[300px] object-cover'
					src={`./work/${photo}`}
					alt=''
				/>
				<div className='p-5'>
					<h5 className='mb-2 text-2xl line-clamp-1 font-bold tracking-tight text-gray-900 dark:text-white'>
						{title}
					</h5>
					<p className='mb-3 font-normal line-clamp-3 text-gray-700 dark:text-gray-400 '>
						{desc}
					</p>
					<button
						type='button'
						onClick={() => setShowModal(true)}
						className='inline-flex items-center px-3 py-2 text-sm font-medium text-center duration-500 text-white bg-[#7554a3] rounded-lg hover:bg-[#53337c]'
					>
						Глянуть
						<svg
							className='w-3.5 h-3.5 ml-2'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 14 10'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M1 5h12m0 0L9 1m4 4L9 9'
							/>
						</svg>
					</button>

					{showModal ? <Modal setShowModal={setShowModal} /> : null}
				</div>
			</div>
		</>
	)
}

export default JobCard
