import styles from './App.module.css'

import { AddBar } from './components/AddBar.tsx'
import { Header } from './components/Header.tsx'
import { TaskList } from './components/TaskList.tsx'

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <AddBar />
      <TaskList />
    </>
  )
}
