import { Avatar } from './Avatar';
import {Trash, ThumbsUp} from 'phosphor-react'
import styles from '../styles/Comment.module.css'

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/facefusion.png" alt="User Picture" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.aoutherAdnTime}>
                            <strong>Sahra Jones - </strong>
                            <time title="May 13 at 08:13PM" dateTime="2023-05-13 20:13:30">
                                Arround 1 hour ago
                            </time>
                        </div>
                        <button title='Delete'>
                            <Trash size={24} />
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