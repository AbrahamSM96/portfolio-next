import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import { ContextWrapper } from '../context/state'
import Navbar from 'src/components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [isFirstMount, setIsFirstMount] = useState(true)
  useEffect(() => {
    const handleRouteChange = () => {
      isFirstMount && setIsFirstMount(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])
  const router = useRouter()

  return (
    <>
      <ContextWrapper>
        <AnimatePresence exitBeforeEnter>
          {router.pathname !== '/' && <Navbar />}
          <Component
            isFirstMount={isFirstMount}
            key={router.route}
            {...pageProps}
          />
        </AnimatePresence>
      </ContextWrapper>
    </>
  )
}

// export async function getServerSideProps() {
//   const response = await fetch(`${process.env.API_URL}/api/data`)
//   const { about, contact, hero, projects, skills, social } =
//     await response.json()

//   return { props: { hero, about, skills, projects, contact, social } }
// }

export default MyApp
