import { Link } from 'react-router-dom'
import React from 'react'

function Meal(props) {
  const { idMeal, strMealThumb, strMeal } = props

  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-atcion">
        <Link to={`/meal/${idMeal}`} className="btn">
          Watch reciepe
        </Link>
      </div>
    </div>
  )
}
export { Meal }
