import React, { useEffect, useRef } from 'react'
import { FaHeart } from 'react-icons/fa'

import styles from './Footer.module.css'
export default function Footer() {
  const refDate = useRef(null)
  useEffect(() => {
    const date = new Date().getFullYear()
    refDate.current.append(date)
  }, [])

  return (
    <>
      <footer className={styles._footer}>
        <span>©</span>
        <span ref={refDate}></span>
        <span>
          , Made with <FaHeart className={styles._footer_heart} /> by AbrahamSM
        </span>
      </footer>
    </>
  )
}
