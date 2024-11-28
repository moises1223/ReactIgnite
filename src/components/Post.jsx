import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post() {
    return (
        <article className={styles.post}>
            <header className={styles.header}>
                <div>
                    <div className={styles.author}>
                        <img className={styles.avatar} src="https://github.com/moises1223.png" alt="" />
                        <div className={styles.authorInfo}>
                            <strong className={styles.username}> Moisés Souza </strong>
                            <span className={styles.role}>Web developer</span>
                        </div>
                    </div>
                </div>
                <time className={styles.time} title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Públicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p> Oi ! 😁 </p>
                <p>Hoje eu joguei muito de odin e foi muito divertido eu tenho 5 gatos e eu gosto muito de dinheiro. </p>
                <p>Acessem meu site: </p>
                <p> 😉 <a href="https://abystract.com.br/"> abystract.com.br</a> </p>
                <p>
                    <a href="#"> #empresafoda</a>
                    <a href="#"> #melhorempresadomundo</a>
                    <a href="#"> #tech</a>
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong className={styles.title}>Deixe seu feedback</strong>
                <textarea className={styles.comment} placeholder="Deixe um comentário" />
                <div className={styles.divBtn}>
                    <button className={styles.commentButton} type="submit">Publicar</button>
                </div>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>

        </article>
    )
}