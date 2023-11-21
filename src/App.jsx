import { Fragment } from "react"
import { Post } from './components/Post'
import { Header } from "./components/Header"

export function App() {
  return (
   <Fragment>
   <Header />
   <Post 
    title="Titulo 1" 
    content="Texto 1 do meu Blog"/>
   <Post 
    title="Titulo 2" 
    content="Texto 2 do meu Blog"/>
   <Post 
    title="Titulo 3" 
    content="Texto 3 do meu Blog"/>
   <Post 
    title="Titulo 4" 
    content="Texto 4 do meu Blog"/>
    {Post({
      title: 'Titulo 5', 
      content: 'mais conteudo'
    })}
   </Fragment>
  )
}

