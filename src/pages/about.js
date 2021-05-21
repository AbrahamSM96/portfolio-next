import React from 'react'
import { motion } from 'framer-motion'
import AboutContainer from 'src/components/About/AboutContainer'
import Footer from 'src/components/Footer'

export default function about() {
  return (
    <>
      <motion.section exit={{ opacity: 0 }}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={content(isFirstMount)}
          className="space-y-12"
        >
          <AboutContainer />
          <Footer />
        </motion.div>
      </motion.section>
    </>
  )
}
