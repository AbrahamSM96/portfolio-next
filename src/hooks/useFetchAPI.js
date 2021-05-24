import { useState, useEffect } from 'react'

export function useFetchAPI() {
  const [data, setData] = useState({})
  const [load, setLoad] = useState(false)
  const [error, setError] = useState(null)
  const API = `https://quiet-mountain-18164.herokuapp.com/api/data`
  const fetchAPI = async () => {
    try {
      setLoad(true)
      setError(null)
      const response = await fetch(API)
      const datas = await response.json()
      setLoad(false)
      setData(datas)
      setError(null)
    } catch (error) {
      setLoad(false)
      setError(error)
    }
  }

  useEffect(() => {
    fetchAPI()
  }, [])
  return { data, load, error, setLoad }
}
