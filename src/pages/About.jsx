const photographers = [
	{
		name: 'Артем Вагапов',
		photo: './1.png',
		spec: 'Фотограф',
	},
	{
		name: 'Влад Смолин',
		photo: './2.png',
		spec: 'Фотограф',
	},
	{
		name: 'Злата Корнева',
		photo: './3.png',
		spec: 'Фотограф',
	},
	{
		name: 'Лена Ногина',
		photo: './4.png',
		spec: 'Фотограф',
	},
]

const About = () => {
	return (
		<>
			<p className='text-center mt-[5%] text-4xl font-bold'>Наши специалисты</p>

			<div className='flex gap-10 items-center justify-around'>
				{photographers.map(item => (
					<div
						key={item.name}
						className='flex flex-col items-center gap-y-3 mt-16'
					>
						<img
							className='w-[300px] h-[300px] rounded-full border-4 border-solid border-[#7554a3]'
							src={`./photographers/${item.photo}`}
							alt=''
						/>
						<p className='text-2xl font-semibold'>{item.name}</p>
						<p className='text-xl font-medium'>{item.spec}</p>
					</div>
				))}
			</div>

			<p className='text-center mt-[5%] text-4xl font-bold'>Последние работы</p>
		</>
	)
}

export default About
