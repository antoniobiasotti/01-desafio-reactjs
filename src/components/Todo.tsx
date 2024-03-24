import styles from './Todo.module.css';

import { Trash } from 'phosphor-react';

export function Todo(){
     return(
          <div className={styles.todoCard}>
               <div className={styles.todo}>
                    <input type="radio"></input>
                    <p>Estudar Reactjs</p>
                    <button title="Deletar todo">
                         <Trash size={24} />
                    </button>
               </div>
          </div>
     )
}