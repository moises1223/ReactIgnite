import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header></Header>

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          <Post
            author="Diego Fernandes"
            content="lorem ipsum lorem ipsum"
          />

          <Post
            author="Araujo souza"
            content="lorem ipsum lorem ipsum"
          />
          <Post
            author="Araujo souza"
            content="lorem ipsum lorem ipsum"
          />

        </main>
      </div>

    </div>
  )
}

