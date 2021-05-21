import React, { useEffect, useRef } from 'react'
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
        <span>, Made with ❤️ by AbrahamSM</span>
      </footer>
    </>
  )
}
