import { useEffect, useState } from 'react'
import axios from 'axios'

const UseFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProducts = () => {
    //const url = 'https://proyecto5-backend-git-main-alexiamata95.vercel.app/api/v1/products'
    const url = 'http://localhost:4003/api/v1/products'
    axios.get(url)
      .then((res) => {
        setLoading(true)
        console.log('Charm', res)
        setData(res.data)
      })
      .catch(error => setError(error))
  }
  
  useEffect( () => {
    getProducts()
  }, [])
  
  return [data, loading, error]
}

export default UseFetch