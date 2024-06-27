import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Navbar from './components/Navbar'
import AllRecipesPage from './pages/AllRecipesPage'
import RecipeDetailsPage from './pages/RecipeDetailsPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/recipes' element={<AllRecipesPage />} />
        <Route path='/recipes/:recipeId' element={<RecipeDetailsPage />} />

        <Route path='*' element={<h1>404 page</h1>} />
      </Routes>
    </>
  )
}

export default App
