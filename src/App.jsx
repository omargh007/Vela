import { useState } from 'react'
import UtilityBar       from './components/UtilityBar.jsx'
import Navbar           from './components/Navbar.jsx'
import Footer           from './components/Footer.jsx'
import HomePage         from './pages/HomePage.jsx'
import CategoryPage     from './pages/CategoryPage.jsx'
import VendorDashboard  from './pages/VendorDashboard.jsx'

export default function App() {
  const [view,      setView]      = useState('home')
  const [activeCat, setActiveCat] = useState({ category:'shoes', sub:'all' })
  const [userType,  setUserType]  = useState('shopper')
  const [wishlist,  setWishlist]  = useState(new Set())

  const navigate = (v, catParams) => {
    if (catParams) setActiveCat(catParams)
    setView(v)
    window.scrollTo({ top:0, behavior:'smooth' })
  }

  const toggleWishlist = id => setWishlist(prev => {
    const n = new Set(prev)
    n.has(id) ? n.delete(id) : n.add(id)
    return n
  })

  return (
    <>
      <UtilityBar userType={userType} setUserType={setUserType} />
      <Navbar
        view={view}
        navigate={navigate}
        cartCount={3}
        wishlistCount={wishlist.size}
        userType={userType}
      />

      {view === 'home'     && (
        <HomePage
          navigate={navigate}
          wishlistIds={wishlist}
          toggleWishlist={toggleWishlist}
        />
      )}
      {view === 'category' && (
        <CategoryPage
          activeCategory={activeCat}
          setActiveCategory={setActiveCat}
          wishlistIds={wishlist}
          toggleWishlist={toggleWishlist}
        />
      )}
      {view === 'vendor'   && <VendorDashboard />}

      <Footer />
    </>
  )
}