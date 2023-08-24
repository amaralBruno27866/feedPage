import {Trash, ThumbsUp} from 'phosphor-react'
import styles from '../styles/Comment.module.css'
import { Avatar } from './Avatar';

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/facefusion.png" alt="User Picture" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.aoutherAdnTime}>
                            <strong>Username</strong>
                            <time title="date and hour" dateTime="date USA">
                                Published 1 hour ago
                            </time>
                        </div>
                        <button title='Delete'>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Good job user!!!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Like<span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}