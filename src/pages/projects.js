import React from 'react'
import { motion } from 'framer-motion'
import ProjectsContainer from 'src/components/Projects/ProjectsContainer'

export default function Projects() {
  return (
    <>
      <motion.section exit={{ opacity: 0 }}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={content(isFirstMount)}
          className="space-y-12"
        >
          <ProjectsContainer />
        </motion.div>
      </motion.section>
    </>
  )
}
