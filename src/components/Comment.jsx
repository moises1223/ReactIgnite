import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar
                src="https://github.com/HenriqueDeAssuncao.png"
                hasBorder={false}
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header className={styles.headerComment}>

                        <div className={styles.authorAndTime}>
                            <strong>Henrique doidão </strong>
                            <time className={styles.time} title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button className={styles.deleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>

                    </header>

                    <p className={styles.userComment}>Muito bosta q merda!! </p>

                </div>

                <footer className={styles.footer}>
                    <button className={styles.likebtn}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    );
}