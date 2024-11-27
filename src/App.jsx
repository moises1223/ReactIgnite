import { Header } from './components/Header'
import { Post } from './post'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

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
        </main>
      </div>

    </div>
  )
}

