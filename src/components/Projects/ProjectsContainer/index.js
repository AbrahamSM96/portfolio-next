import React from 'react'
import { useRouter } from 'next/router'
import ArrowAnimation from 'src/components/ArrowAnimation'
import ProjectsItem from '../ProjectsItem'
import styles from './ProjectsContainer.module.css'

export default function ProjectsContainer() {
  const router = useRouter()
  return (
    <>
      <div className={styles._title}>
        <h1>Projects</h1>
      </div>
      <ProjectsItem />
      <div className={styles._button}>
        <ArrowAnimation route={() => router.push('/about')} />
      </div>
    </>
  )
}
