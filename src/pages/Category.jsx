import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFilterCategory } from '../api'
import { Preloade } from '../components/Preloade'
import { MealsList } from '../components/MealsList'

function Category() {
  const { name } = useParams()
  const [meals, setMeals] = useState([])

  useEffect(() => {
    getFilterCategory(name).then((data) => setMeals(data.meals))
  }, [name])
  return <div>{!meals.length ? <Preloade /> : <MealsList meals={meals} />}</div>
}

export { Category }
