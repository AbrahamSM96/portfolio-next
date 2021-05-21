import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import styles from './SkillsItem.module.css'
import { useAppContext } from '../../../context/state'

export default function SkillsItem() {
  const { data, load, error } = useAppContext()
  const { skills = {} } = data
  const { skillArray = [] } = skills

  return (
    <>
      <div className={styles._content}>
        {load ? (
          <SkeletonTheme color="#d3d3d3" highlightColor="#706f6f">
            <Skeleton
              count={7}
              width={230}
              height={190}
              style={{ margin: '1rem' }}
            />
          </SkeletonTheme>
        ) : (
          <>
            {skillArray.map((skill) => (
              <div key={skill.id} className={styles._skillCard}>
                <figure className={styles._skillCard_figure}>
                  <img
                    src={skill.img}
                    alt={skill.skill}
                    style={{ height: 'auto', width: '100%' }}
                  />
                </figure>

                <h2>{skill.name}</h2>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  )
}
