import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { app } from '../config.json'
import { useEffect } from 'react'
export default function Home() {
  let atlz_lang = 'pt-br'
  let lang = app.lang[0]

  
  return (
    
    <body>
    <div className={styles.container}>
      <Head>
        <title>{ app.name } - MP3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         { lang.data.title } <a href="https://youtube.com/">{ lang.data.youtube }</a>
        </h1>
        <p className={styles.description}>
          { lang.data.convert }
          <b />
          <form action="/api/download" method="POST">
          <input className={styles.input} name="urlYT" placeholder={ lang.data.convert }></input>
          <select className={styles.select} name="format" required>
  <option value="mp3">mp3</option>
  <option value="mp4">mp4</option>
          </select>
          <br />
          <button name="submit" className={styles.butao} type="submit">{ lang.data.convert }</button>
          </form>
        </p>
      </main>
    </div>
    </body>
  )
}
