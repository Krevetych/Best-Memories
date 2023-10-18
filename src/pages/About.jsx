import Slider from "../components/Slider"
import { photographers } from "../constans"

const About = () => {
	return (
		<main>
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

			<p className='text-center mt-[5%] text-4xl font-bold mb-8'>Последние работы</p>
			<Slider />
		</main>
	)
}

export default About
