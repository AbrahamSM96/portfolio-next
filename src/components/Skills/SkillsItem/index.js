import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import styles from './SkillsItem.module.css'
import { useAppContext } from '../../../context/state'

export default function SkillsItem() {
  const { data, load, error, setLoad } = useAppContext()
  const { skills = {} } = data
  const { skillArray = [] } = skills
  const NOTFOUND_POSTER = 'https://dummyimage.com/120x120.png'

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
            {skillArray.map(({ id, img = NOTFOUND_POSTER, skill, name }) => (
              <div key={id} className={styles._skillCard}>
                <figure className={styles._skillCard_figure}>
                  <img
                    src={img}
                    alt={skill}
                    style={{ height: 'auto', width: '100%' }}
                    loading="lazy"
                  />
                </figure>

                <h2>{name}</h2>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  )
}
