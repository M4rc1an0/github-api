import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>GitHub Profile</h1>
      <div className={styles.content_search}>
        <h2>Search for a user:</h2>
        <div>
          <input placeholder='User' onChange={() => { }} />
          <button>Search</button>
        </div>
      </div>
    </div>
  )
}
