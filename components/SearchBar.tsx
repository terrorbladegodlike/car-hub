'use client'
// Import Use State
import { useState } from "react"

// Import Components
import { SearchManufacturer } from "."

const SearchBar = () => {

  // Use State
  const [manufacturer, setManufacturer] = useState('')

  const handleSearch = () => { }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar