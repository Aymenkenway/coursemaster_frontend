import React from 'react'

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className='search-bar'>
      {' '}
      <input
        type='text'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='Search for courses...'
      />
    </div>
  )
}

export default SearchBar
