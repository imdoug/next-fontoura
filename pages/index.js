import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const { locale, locales, push } = useRouter()
  const handleClick = (l) =>{
    console.log(l)
  }
  return (
    <div className={styles.container}>
      <h1>{locale}</h1>
      <div>
          <h3>With useRouter</h3>
          <h1>Choose your locale: </h1>
          { locales.map((l)=>(
            <button 
              key={l} 
              onClick={()=>{handleClick(l)}}>
                {l}
            </button>
          ))}
      </div>
    </div>
  )
}
