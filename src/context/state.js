import { createContext, useContext } from 'react'
import { useFetchAPI } from '../hooks/useFetchAPI'

const AppContext = createContext()

export function ContextWrapper({ children }) {
  const { data, load, error } = useFetchAPI()
  let sharedState = {
    data,
    load,
    error
  }

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
