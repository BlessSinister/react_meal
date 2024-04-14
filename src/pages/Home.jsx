import { getAllCategories, getFilterCategory } from '../api'
import { useState, useEffect } from 'react'
import { Preloade } from '../components/Preloade'
import { CategorieList } from '../components/CategorieList'

const Home = () => {
  const [catalog, setCatalog] = useState([])

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories)
    })
  }, [])
  return (
    <>{!catalog.length ? <Preloade /> : <CategorieList catalog={catalog} />}</>
  )
}

export { Home }
