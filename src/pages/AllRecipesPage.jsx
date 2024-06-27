import { Link } from 'react-router-dom'

const recipesData = [
  { id: '1', title: 'Pizza', difficulty: 'easy' },
  { id: '2', title: 'Paella', difficulty: 'easy' },
  { id: '3', title: 'Quenelles', difficulty: 'easy' },
]

const AllRecipesPage = () => {
  return (
    <>
      <h1>All recipes</h1>
      <ul>
        {recipesData.map(currentRecipe => (
          <li key={currentRecipe.id}>
            <Link to={`/recipes/${currentRecipe.id}`}>{currentRecipe.title}</Link>
          </li>
        ))}
        <li key={'3'}>
          <Link to={`/recipes/3?people=2`}>Nothing</Link>
        </li>
      </ul>
    </>
  )
}

export default AllRecipesPage
