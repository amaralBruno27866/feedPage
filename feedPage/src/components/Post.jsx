import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from '../styles/Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <Avatar src="https://github.com/NyctibiusVII.png" alt="User picture" />

                    <div className={styles.authorInfo}>
                        <strong>NyctibiusVII</strong>
                        <span>Front-End Programmer</span>
                    </div>
                </div>

                    <time title="May 13 at 08:13PM" dateTime="2023-05-13 20:13:30">
                        Published 1 hour ago
                    </time>

            </header>

            <div className={styles.content}>
                    <p>Hey guys 👋</p>
                    <p>I just uploaded another project to my portfolio. It's a project I did at NLW Return, a Rocketseat event. Project name is DoctorCare 🚀</p>
                    <p>👉{''}<a>jane.design/doctorcare</a></p>
                    <p>
                        <a>#newproject </a>{''}
                        <a>#nlw </a>{''}
                        <a>#rocketseat</a>
                    </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Leave your comment</strong>
                <textarea placeholder="Write a comment"></textarea>
                <footer>
                    <button type='submit'>Publish</button>
                </footer>
            </form>
            <div>
                <Comment />
            </div>
        </article>
    );
}