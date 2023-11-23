import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import ProductCard from './components/ProductCard'

function App() {
  const [search, setSearch] = useState('');
  const [allFood, setAllFood] = useState([]);
  const [loading, setLoading] = useState(false);

  const APP_ID = "b3972793"
  const APP_KEY = "91d4d909be31b7f05b7997fb6f2380b0"

  const fetchFood = async () => {
    try {
      setLoading(true)
      // const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=b3972793&app_key=91d4d909be31b7f05b7997fb6f2380b0`);
      const data = await res.json();
      setAllFood(data.hits);
      setLoading(false)
    } catch (error) {
      // console.log(error)
      setLoading(false)
    }
  }

  return (
    <div>
      <Navbar />
      <SearchBar search={search} setSearch={setSearch} fetchFood={fetchFood} />
      <ProductCard allFood={allFood} loading={loading} />
    </div>
  )
}

export default App