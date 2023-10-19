const DescModal = ({ desc, setShowDesc }) => {
	return (
		<>
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-auto z-[60] max-h-screen none bg-[#10272d] p-5 flex flex-col gap-5'>
				{desc}
				<button
					className='bg-[#7554a3] px-3 py-2 rounded-lg duration-500 hover:bg-[#53337c]'
					type='button'
					onClick={() => setShowDesc(false)}
				>
					Отлично👌
				</button>
			</div>
		</>
	)
}

export default DescModal
