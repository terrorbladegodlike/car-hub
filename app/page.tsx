// Import Components
import { CarCard, CustomFilter, SearchBar } from '@/components'
import Hero from '@/components/Hero'

// Import Utils
import { fetchCars } from '@/utils'

// Import Next Image
import Image from 'next/image'

export default async function Home() {

  const allCars = await fetchCars()

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        {/* Header Section */}
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Car Catalog
          </h1>
          <p>
            Explore the cars you might like
          </p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title='fuel' />
            <CustomFilter title='year' />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => <CarCard car={car} />)}
            </div>
          </section>
        ) : (
          <div className='home__erroe-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
