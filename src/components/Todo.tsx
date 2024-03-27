import { useState } from 'react';
import styles from './Todo.module.css';

import { Trash } from 'phosphor-react';

export function Todo({ content }){

     // console.log(props);

     const [todos] = useState([
          1,
          2,
     ])

     return(
          <div className={styles.todoList}>
               <div className={styles.todo}>
                    <input type="radio"></input>
                    <label>{content}</label>
                    <button title="Deletar todo">
                         <Trash size={24} />
                    </button>
               </div>
          </div>
     )
}