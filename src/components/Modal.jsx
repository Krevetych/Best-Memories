import { useState } from 'react'
import DescModal from './DescModal'

const Modal = ({ setShowModal, title, photos, desc }) => {
	const [showDesc, setShowDesc] = useState(false)

	return (
		<>
			<div
				className={`${
					showDesc ? 'overflow-hidden' : 'overflow-y-auto'
				} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-50 max-h-screen none`}
			>
				<div className='sticky top-0 bg-[#10272d] text-white flex items-center justify-between p-5'>
					<div>
						<p className='font-bold text-2xl'>{title}</p>
						<p
							className='mt-2 font-semibold text-lg duration-500 text-[#7554a3] hover:text-[#53337c] hover:cursor-pointer'
							onClick={() => setShowDesc(true)}
						>
							Клик для описания
						</p>
					</div>
					<button
						className='bg-[#7554a3] px-3 py-2 rounded-lg duration-500 hover:bg-[#53337c]'
						type='button'
						onClick={() => setShowModal(false)}
					>
						Красиво ❤️
					</button>
				</div>
				<div>
					{photos.map(item => (
						<img
							className='w-full object-cover'
							src={`./work/${item.img}`}
							alt=''
						/>
					))}
				</div>
			</div>
			<div className='absolute top-0 left-0 w-full h-full bg-black/50 z-40'></div>

			{showDesc ? <DescModal desc={desc} setShowDesc={setShowDesc} /> : null}
		</>
	)
}

export default Modal
