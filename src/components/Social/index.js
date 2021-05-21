import React from 'react'
import { GrLinkedinOption, GrGithub, GrFacebook } from 'react-icons/gr'
import styles from './Social.module.css'
import { useAppContext } from '../../context/state'
import Footer from '../Footer'

export default function Social() {
  const { data, load, error } = useAppContext()
  const { contact = {}, social = {} } = data

  const { urlPortfolio, socialMedia = [] } = social
  const { titleContact, email } = contact
  const SIZE = '80'
  return (
    <>
      <div className={styles._contact_title}>
        <h1>{titleContact}</h1>
      </div>
      <div className={styles._container}>
        <div className={styles._contact}>
          <h3>Cualquier duda:</h3>
          <span className={styles._contact_emailContainer}>
            <a href="https://outlook.live.com">{email}</a>
          </span>
        </div>
        <div className={styles._social}>
          <div className={styles._social_networks}>
            <figure>
              <GrLinkedinOption size={SIZE} />
            </figure>
            <figure>
              <GrGithub size={SIZE} />
            </figure>
            <figure>
              <GrFacebook size={SIZE} />
            </figure>
          </div>
          <div className={styles._social_portfolio}>
            <span>
              <a
                href={urlPortfolio}
                rel="Curriculum_AbrahamSM"
                download={urlPortfolio}
              >
                Curriculum
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
