import styles from '../styles/Sidebar.module.css'
import cover from '../images/cover.png'
import {PencilLine} from 'phosphor-react'
import {Avatar} from '../components/Avatar'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src={cover}
                alt="cover picture" />
            <div className={styles.profile}>
                <Avatar src="https://github.com/amaralBruno27866.png"/>
                <strong>Bruno Amaral</strong>
                <span>Intern Programmer</span>
            </div>

            <footer>
                <a href="#">
                <PencilLine size={20}/> 
                Edit you profile
                </a>
            </footer>
        </aside>
    );
}