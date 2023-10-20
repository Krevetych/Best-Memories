const MoreModal = ({ setMore, title, price, desc, model }) => {
	return (
		<>
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-auto z-[60] max-h-screen none bg-[#10272d] p-5 flex flex-col gap-5'>
				<div className='flex items-center justify-between'>
					<p className='font-bold text-2xl'>{title}</p>
					<div>
						<p className='font-semibold text-white/70 text-lg'>Цена: {price}</p>
						<p className='text-white/70 font-semibold'>Тариф: {model}</p>
					</div>
				</div>
				<p>{desc}</p>
				<button
					className='bg-[#7554a3] px-3 py-2 rounded-lg duration-500 hover:bg-[#53337c]'
					type='button'
					onClick={() => setMore(false)}
				>
					Отлично👌
				</button>
			</div>
			<div className='fixed top-0 left-0 w-full h-full items-center justify-center bg-black/50 z-40'></div>
		</>
	)
}

export default MoreModal
