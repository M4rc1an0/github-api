import { useState } from 'react'
import axios from "axios";
import styles from '../styles/home.module.css'
import { Search } from 'public/icons/search';
import Head from 'next/head';

export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const [userProfile, setUserProfile] = useState<any>()
  const [error, setError] = useState(false)

  const searchUser = async () => {
    axios
      .get(`https://api.github.com/users/${inputValue}`)
      .then((response: any) =>
        setUserProfile(response.data)
      ).catch(() =>
        alert('Deu Merda')
      )
  }

  console.log(userProfile, 'USER')

  return (
    <>
      <Head>
        <title>GitHub API</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap" rel="stylesheet" />
        <link rel="icon" href="gitWhite.png" />
      </Head>
      <div className={styles.container}>
        <section className={styles.sectionSearch}>
          <div className={styles.subSection}>
            <img className={styles.img} src='./gitBlack.png' alt='githubWhite' />
          </div>
          <h1 className={styles.title}>GitHub Profile</h1>
          <div className={styles.content_search}>
            <h2>Search for a user:</h2>
            <div>
              <input placeholder='User' onChange={(e: any) => setInputValue(e.target.value)} />
              <button className={styles.button_search} onClick={() => searchUser()}>
                <Search width={20} />
              </button>
            </div>
          </div>
        </section>
        <section className={styles.section_info}>
          {userProfile &&
            <div className={styles.section_card}>
              <img className={styles.img_avatar} src={userProfile.avatar_url} alt='img-avatar' />
              <ul className={styles.ul_info}>
                <li>
                  <h3>{userProfile.name}</h3>
                </li>
                <li>
                  <p>{userProfile.login}</p>
                </li>
                <li>
                  <p>Bio: {userProfile.bio}</p>
                </li>
                <li>
                  <p>Followers: {userProfile.followers}</p>
                </li>
                <li>
                  <p>Following: {userProfile.following}</p>
                </li>
              </ul>
            </div>
          }
        </section>
      </div>
    </>

  )
}
