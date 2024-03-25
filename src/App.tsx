import styles from './App.module.css'

import { AddBar } from './components/AddBar.tsx'
import { Header } from './components/Header.tsx'
import { TaskList } from './components/TaskList.tsx'
import { Todo } from './components/Todo.tsx'

import './global.css'

const todos = [
  {
       id: 1,
       isComplete: false,
       content: 'Estudar Reactjs' 
  },
  {
        id: 2,
        isComplete: false,
        content: 'Estudar Typescript'    
  }
];

export function App() {
  return (
    <article className={styles.app}>
      <Header />
      <AddBar />
      <TaskList />
      <main>
        {todos.map(todo => {
          return (
            <Todo 
              content={todo.content}
            />
          )
        })}
      </main>
    </article>
  )
}
