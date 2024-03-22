import styles from './AddBar.module.css';

export function AddBar() {
     return(
          <>
          <div className={styles.addbar}>
               <textarea
                    placeholder='Adicione uma nova tarefa'
               />
               <button>Criar</button>
          </div>
          </>
     )
}