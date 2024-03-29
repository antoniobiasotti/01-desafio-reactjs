import { PlusCircle } from 'phosphor-react';
import styles from './AddBar.module.css';

export function AddBar(todos) {

     function handleDescribeNewTodo() { 
     }

     function handleCreateNewTodo(event) {
          event.preventDefault()

          todos.push(3);

          console.log('oi');
     }

     return(
          <form onSubmit={handleCreateNewTodo} className={styles.addbar}>
               <textarea onClick={handleDescribeNewTodo}
                    placeholder='Adicione uma nova tarefa'
                    required
               />
               <button type="submit">
                    Criar 
                    <PlusCircle size={16} />
               </button>
          </form>
     )
}