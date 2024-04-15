import { getAllCategories, getFilterCategory } from '../api'
import { useState, useEffect } from 'react'
import { Preloade } from '../components/Preloade'
import { CategorieList } from '../components/CategorieList'
import { Search } from '../components/Search'
const Home = () => {
  const [catalog, setCatalog] = useState([])
  const [filteredCatalog, setFilteredCatalog] = useState([])
  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.map((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    )
  }
  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories)
      setFilteredCatalog(data.categories)
    })
  }, [])
  console.log(filteredCatalog)
  return (
    <>
      {' '}
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloade />
      ) : (
        <CategorieList
          catalog={!filteredCatalog.length ? catalog : filteredCatalog}
        />
      )}
    </>
  )
}

export { Home }
