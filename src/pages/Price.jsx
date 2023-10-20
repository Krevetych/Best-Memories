import PriceCard from '../components/PriceCard'
import { prices } from '../constans'

const Price = () => {
	return (
		<main>
			<p className='text-center mt-[5%] text-4xl font-bold'>Наш прайс</p>
			<div className='flex flex-wrap items-center gap-y-16 mb-10 justify-around mt-10'>
				{prices.map(item =>
					item.model.map(e => (
						<div key={e.id}>
							<PriceCard
								img={e.img}
								title={item.title}
								price={e.price}
								model={e.title}
								desc={e.desc}
							/>
						</div>
					))
				)}
			</div>
		</main>
	)
}

export default Price
