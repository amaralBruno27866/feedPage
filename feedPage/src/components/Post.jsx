import styles from '../styles/Post.module.css'
import { Avatar } from './Avatar';
import { Comment } from './Comment';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <Avatar src="https://github.com/amaralBruno27866.png" alt="User picture" />

                    <div className={styles.authorInfo}>
                        <strong>Bruno Amaral</strong>
                        <span>Intership Programmer</span>
                    </div>

                    <time title="date and hour" dateTime="date USA">
                        Published 1 hour ago
                    </time>

                    <div className={styles.content}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing 
                            elit. Atque autem quasi maiores, odit exercitationem 
                            at iste laborum soluta delectus quis! Molestiae 
                            quibusdam numquam similique aliquam dolore dolorum 
                            reprehenderit facere obcaecati.
                        </p>
                    </div>

                </div>
            </header>
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