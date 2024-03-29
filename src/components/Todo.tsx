import { useState } from 'react';
import styles from './Todo.module.css';

import { Trash } from 'phosphor-react';

export function Todo({ todo, onDelete }){

     
     // console.log(content);

     return(
          <main>
               <div className={styles.todo}>
                    <input type="radio"></input>
                    <label>{content}</label>
                    <button onClick={handleDeleteClick} title="Deletar todo">
                         <Trash size={24} />
                    </button>
               </div>
          </main>
     )
}