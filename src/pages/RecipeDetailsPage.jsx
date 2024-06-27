import { Navigate, useParams, useSearchParams } from 'react-router-dom'

const recipesData = [
  { id: '1', title: 'Pizza', difficulty: 'easy', servings: '300' },
  { id: '2', title: 'Paella', difficulty: 'easy', servings: '200' },
  { id: '3', title: 'Quenelles', difficulty: 'easy', servings: '150' },
]

const RecipeDetailsPage = () => {
  const { recipeId } = useParams()

  const [searchParams, setSearchParams] = useSearchParams()

  const numOfPeople = searchParams.get('people')

  const currentRecipe = recipesData.filter(currentRecipe => currentRecipe.id === recipeId)[0]

  if (typeof currentRecipe === 'undefined') {
    console.log('No recipe with this id')
    return <Navigate to='/recipes' />
  }

  return (
    <>
      <h1>Details of the {currentRecipe.title}</h1>
      <p>Difficulty: {currentRecipe.difficulty}</p>
      <p>Servings needed: {currentRecipe.servings * numOfPeople}</p>
      <button type='button' onClick={() => setSearchParams({ people: parseInt(numOfPeople) + 1 })}>
        +
      </button>
    </>
  )
}

export default RecipeDetailsPage
