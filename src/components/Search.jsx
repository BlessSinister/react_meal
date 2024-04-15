import React, { useState } from 'react'

function Search({ cb = Function.prototype }) {
  const [search, setSearch] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }
  const handleSubmit = () => {
    cb(search)
  }
  console.log(search)
  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          value={search}
        />
        <button className="btn" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
  )
}
export { Search }
