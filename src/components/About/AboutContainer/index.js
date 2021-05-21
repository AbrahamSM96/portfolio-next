import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import styles from './AboutContainer.module.css'
import { useAppContext } from '../../../context/state'
import Social from 'src/components/Social'

export default function AboutContainer() {
  const { data, error, load } = useAppContext()
  const { about = {}, contact = {}, social = {} } = data
  const { url } = contact
  const { titleAbout, subtitle, contentAbout } = about
  return (
    <>
      <div className={styles._title}>
        <h1>{titleAbout}</h1>
      </div>
      {load ? (
        <SkeletonTheme color="#d3d3d3" highlightColor="#706f6f">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              margin: '0 2rem'
            }}
          >
            <Skeleton height={250} width={200} />
            <Skeleton height={200} width={500} />
          </div>
        </SkeletonTheme>
      ) : (
        <div className={styles._container}>
          <div className={styles._contentImage}>
            {url === 'undefined' ? (
              <SkeletonTheme color="#d3d3d3" highlightColor="#706f6f">
                <Skeleton height={250} width={200} />
              </SkeletonTheme>
            ) : (
              <figure className={styles._contentImage_figure}>
                <img
                  src={url}
                  alt={subtitle}
                  className={styles._contentImage_img}
                />
              </figure>
            )}
          </div>
          <div className={styles._contentInfo}>
            <h1 className={styles._contentInfo_title}>{subtitle}</h1>
            <p className={styles._contentInfo_data}>{contentAbout}</p>
          </div>
        </div>
      )}
      <Social />
    </>
  )
}
