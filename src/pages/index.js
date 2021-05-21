import Head from 'next/head'
import { motion } from 'framer-motion'
import HomePage from '../components/Home/HomePage'
import InitialTransition from 'src/components/InitialTransition'
const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 }
  }
})

export default function Home({ isFirstMount }) {
  return (
    <>
      <motion.section exit={{ opacity: 0 }}>
        {isFirstMount && <InitialTransition />}
        <motion.div
          initial="initial"
          animate="animate"
          variants={content(isFirstMount)}
          className="space-y-12"
        >
          <Head>
            <title>Abraham Serrano | Frontend Developer</title>
          </Head>
          <HomePage />
        </motion.div>
      </motion.section>
    </>
  )
}

// export async function getServerSideProps() {
//   const response = await fetch(`${process.env.API_URL}/api/data`)
//   const { about, contact, hero, projects, skills, social } =
//     await response.json()

//   return { props: { hero, about, skills, projects, contact, social } }
// }
