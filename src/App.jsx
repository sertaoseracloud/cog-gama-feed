import { Post } from './components/Post';
import { Header } from "./components/Header";
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';

export function App() {
  return (
   <div>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post 
        title="Titulo 1" 
        content="Texto 1 do meu Blog"/>
        <Post 
          title="Titulo 2" 
          content="Texto 2 do meu Blog"/>
      </main>
    </div>
   </div>
  )
}

