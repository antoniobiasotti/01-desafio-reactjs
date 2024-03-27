import { PlusCircle } from 'phosphor-react';
import styles from './AddBar.module.css';

export function AddBar() {

     function handleCreateNewTodo(event) {
          event.preventDefault()

          // todos.push(3);

          console.log('oi');
     }

     return(
          <div className={styles.addbar}>
               <textarea
                    placeholder='Adicione uma nova tarefa'
               />
               <button onSubmit={handleCreateNewTodo} type="submit">
                    Criar 
                    <PlusCircle size={16} />
               </button>
          </div>
     )
}