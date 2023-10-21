// Import Components
import { CustomFilter, SearchBar } from '@/components'
import Hero from '@/components/Hero'

// Import Next Image
import Image from 'next/image'

export default function Home() {
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
      </div>
    </main>
  )
}
