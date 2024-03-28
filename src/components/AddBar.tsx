import { PlusCircle } from 'phosphor-react';
import styles from './AddBar.module.css';

export function AddBar() {

     function handleDescribeNewTodo() { 
     }

     function handleCreateNewTodo(event) {
          event.preventDefault()

          // todos.push(3);

          console.log('oi');
     }

     return(
          <div className={styles.addbar}>
               <textarea onClick={handleDescribeNewTodo}
                    placeholder='Adicione uma nova tarefa'
                    required
               />
               <button onSubmit={handleCreateNewTodo} type="submit">
                    Criar 
                    <PlusCircle size={16} />
               </button>
          </div>
     )
}