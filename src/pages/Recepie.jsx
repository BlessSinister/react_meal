import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMealById } from '../api'
import { Preloade } from '../components/Preloade'

function Recepie() {
  const [reciepe, setRecepie] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  useEffect(() => {
    getMealById(id).then((data) => setRecepie(data.meals[0]))
  }, [id])
  console.log(reciepe)
  return !reciepe ? (
    <Preloade />
  ) : (
    <>
      <div className="reciepe" style={{ marginTop: 10 }}>
        <img src={reciepe.strMealThumb} alt={reciepe.strMeal} />
        <h1>{reciepe.strMeal}</h1>
        <h6>Category: {reciepe.strCategory}</h6>
        {reciepe.strArea ? <h6>Area: {reciepe.strArea}</h6> : null}
        <p>{reciepe.strInstructions}</p>
        <table className="centered">
          <thead>
            <th>Ingredient</th>

            <th>Measure</th>
          </thead>
          <tbody>
            {Object.keys(reciepe).map((key, index) => {
              if (key.includes('Ingredient') && reciepe[key]) {
                return (
                  <tr key={key}>
                    <td>{reciepe[key]}</td>
                    <td>{reciepe[`strMeasure${index - 8}`]}</td>
                  </tr>
                )
              }
              return null
            })}
          </tbody>
        </table>
        {reciepe.strYoutube ? (
          <div className="row">
            <h5>Video recepie</h5>
            <iframe
              src={`https://www.youtube.com/embed/${reciepe.strYoutube.slice(
                -11
              )}`}
              frameborder="0"
              title={id}
              allowfullscreen
            />
          </div>
        ) : null}
      </div>
      <button className="btn" onClick={goBack}>
        Go back
      </button>
    </>
  )
}
export { Recepie }
