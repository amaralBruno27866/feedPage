import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { format, formatDistanceToNow } from 'date-fns';
import { useState } from 'react';
import styles from '../styles/Post.module.css'

export function Post({author, publishedAt, content}){

    const [comments, setComments] = useState ([
        1,
        2,
    ])

    const publishedDateFormatted = format(
        publishedAt,
        "d 'at' LLLL '-' HH:MM 'h'"
    )

    const publishedDateRelativeToNow = formatDistanceToNow(
        publishedAt, {
            addSuffix: true,
        }
    )

    function handleCreateNewComment(){
        event.preventDefault()
        setComments([...comments, commentsList + 1]);
    }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <Avatar src={author.avatarUrl} alt="User picture" />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                    <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                        {publishedDateRelativeToNow}
                    </time>

            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p>{line.content}</p>;
                    }else if(line.type === 'link'){
                        return<p><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form className={styles.commentForm}>
                <strong>Leave your comment</strong>
                <textarea placeholder="Write a comment" />
                <footer>
                    <button type='submit'>Publish</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment />
                })}
            </div>
        </article>
    );
}