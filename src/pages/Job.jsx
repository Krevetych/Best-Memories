import JobCard from '../components/JobCard'
import { works } from '../constans'

const Job = () => {
	return (
		<main>
			<p className='text-center mt-[5%] text-4xl font-bold'>Все наши работы</p>
			<div className='flex flex-wrap items-center justify-around mt-10'>
				{works.map(item => (
					<div key={item.title}>
						<JobCard {...item} />
					</div>
				))}
			</div>
		</main>
	)
}

export default Job
