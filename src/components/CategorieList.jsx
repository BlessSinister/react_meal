import { CategoryItem } from './CategoryItem'

const CategorieList = ({ catalog = [] }) => {
  console.log(catalog)
  return (
    <div className="list">
      {catalog.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  )
}

export { CategorieList }
