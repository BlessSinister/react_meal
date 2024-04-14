import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Meal } from './Meal'

function MealsList(props) {
  const { idMeal, meals } = props
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  return (
    <>
      <button className="btn" onClick={goBack}>
        Go back
      </button>
      <div className="list">
        {meals.map((item, index) => (
          <Meal key={item.idMeal} {...item} />
        ))}
      </div>
    </>
  )
}
export { MealsList }
