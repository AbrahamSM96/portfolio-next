import React from 'react'
import { motion } from 'framer-motion'

import SkillsContainer from 'src/components/Skills/SkillsContainer'

export default function Skills() {
  return (
    <>
      <motion.section exit={{ opacity: 0 }}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={content(isFirstMount)}
          className="space-y-12"
        >
          <SkillsContainer />
        </motion.div>
      </motion.section>
    </>
  )
}
