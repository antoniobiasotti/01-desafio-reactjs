import { ClipboardText } from 'phosphor-react';
import styles from './TaskList.module.css';

export function TaskList() {
     return(
          <div>
               <div className={styles.tasklist}>
                    <h4 className={styles.tarefasCriadas}>Tarefas criadas<button>0</button></h4>
                    <h4 className={styles.tarefasConcluidas}>Concluídas<button>0</button></h4>
               </div>
               <div className={styles.tasktable}>
                    <ClipboardText size={32} />
                    <h4>Você ainda não tem tarefas cadastradas</h4>
                    <span>Crie tarefas e organize seus itens a fazer</span>
               </div>
          </div>
     )
}