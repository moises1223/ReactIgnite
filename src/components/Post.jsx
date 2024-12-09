
import { format, formatDistanceToNow } from "date-fns"
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"

import styles from "./Post.module.css"
import { useState } from "react"


export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState(
        [
            1,
            2,

        ]
    )

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
        locale: ptBR
    });
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    function handleCreateNewComment() {

        event.preventDefault()
        setComments([...comments, comments.length + 1])
        console.log(comments)

    }

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

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>

                <strong className={styles.title}>Deixe seu feedback</strong>

                <textarea className={styles.comment} placeholder="Deixe um comentário" />

                <div className={styles.divBtn}>
                    <button className={styles.commentButton} type="submit">Publicar</button>
                </div>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment />
                })}
            </div>

        </article>
    )
}