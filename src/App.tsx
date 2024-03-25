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
       content: [
            {type: 'parapraph', 
            content: 'Estudar Reactjs'}
       ]    
  },
  {
        id: 2,
        isComplete: false,
        content: [
            {type: 'parapraph', 
            content: 'Estudar Reactjs'}
        ]    
  }
];

export function App() {
  return (
    <>
      <Header />
      <AddBar />
      <TaskList />
      <main>
        {todos.map(todo => {
          return <Todo />
        })}
      </main>
    </>
  )
}
