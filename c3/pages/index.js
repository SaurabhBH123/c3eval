import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({profile}) {
  return (
    <div>
      <div>
        <h1>{profile.name}</h1>
        <Image src={profile.avatar_url} alt="profilePic" height="200px" width="200px"/>
        <h2>{profile.bio}</h2>
        <button>Resume</button>
        <button>Follow</button>
      </div>
      <h1>Skills</h1>
      <div style={{
        display:"flex",
      }}>
        <h4 style={{border:"1px solid blue",color:"teal",width:"auto"}}>HTML</h4>
        <h4 style={{border:"1px solid blue",color:"teal",width:"auto"}}>CSS</h4>
        <h4 style={{border:"1px solid blue",color:"teal",width:"auto"}}>Javascript</h4>
        <h4 style={{border:"1px solid blue",color:"teal",width:"auto"}}>React JS</h4>
        <h4 style={{border:"1px solid blue",color:"teal",width:"auto"}}>Redux</h4>
        <h4 style={{border:"1px solid blue",color:"teal",width:"auto"}}>Chakra UI</h4>
        <h4 style={{border:"1px solid blue",color:"teal",width:"auto"}}>Next JS</h4>
      </div>
      <h1>Education</h1>
      <div style={{
        display:"flex",
        flexDirection:"column"
      }}>
      <div>
        <h2>Masai School</h2>
        <p>Full Stack Web Development</p>
        <p>05/2022 - present</p>
      </div>
      <div>
        <h2>Modern College, Pune</h2>
        <p>B.Sc.</p>
        <p>05/2014 - 05/2017</p>
      </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/users/SaurabhBH123')
  const profile = await res.json()

  return {
    props: {
      profile,
    },
  }
}

