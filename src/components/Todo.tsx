import styles from './Todo.module.css';

import { Trash } from 'phosphor-react';

export function Todo(props){

     console.log(props);

     return(
          <div className={styles.todoCard}>
               <div className={styles.todo}>
                    <input type="radio"></input>
                    <label>Estudar Reactjs</label>
                    <button title="Deletar todo">
                         <Trash size={24} />
                    </button>
               </div>
          </div>
     )
}