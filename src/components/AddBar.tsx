import { PlusCircle } from 'phosphor-react';
import styles from './AddBar.module.css';

export function AddBar() {
     return(
          <div className={styles.addbar}>
               <textarea
                    placeholder='Adicione uma nova tarefa'
               />
               <button>
                    Criar 
                    <PlusCircle size={16} />
               </button>
          </div>
     )
}