
import { format, formatDistanceToNow } from "date-fns"
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"

import styles from "./Post.module.css"

const comments



export function Post({ author, publishedAt, content }) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
        locale: ptBR
    });
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    return (
        <article className={styles.post}>
            <header className={styles.header}>
                <div>
                    <div className={styles.author}>
                        <Avatar
                            src={author.avatarUrl}
                            hasBorder
                        />
                        <div className={styles.authorInfo}>
                            <strong className={styles.username}>{author.name} </strong>
                            <span className={styles.role}>{author.role}</span>
                        </div>
                    </div>
                </div>

                <time className={styles.time} title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>

            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p>{line.content}</p>
                    }
                    else if (line.type == 'link') {
                        return <p><a href="">{line.content}</a></p>
                    }
                })}
            </div>

            <form className={styles.commentForm}>

                <strong className={styles.title}>Deixe seu feedback</strong>

                <textarea className={styles.comment} placeholder="Deixe um comentário" />

                <div className={styles.divBtn}>
                    <button className={styles.commentButton} type="submit">Publicar</button>
                </div>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}