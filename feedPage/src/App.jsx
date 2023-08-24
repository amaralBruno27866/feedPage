import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Post } from './components/Post'

const posts = [
  {
    id:1,
    author:{
      avatarUrl: 'https://github.com/amaralBruno27866.png',
      name: 'Bruno Amaral',
      role: 'Intern Programmer'
    },
    content: [
      {type: 'paragraph', content:'Hey guys 👋'},
      {type: 'paragraph', content:"I just uploaded another project to my portfolio. It's a project I did at NLW Return, a Rocketseat event. Project name is DoctorCare 🚀"},
      {type: 'link', content:'👉 bruno.progm/intership programmer'},
    ],
    publishedAt: new Date('2023-05-03 20:00:00'),
  },
  {
    id:2,
    author:{
      avatarUrl: 'https://github.com/NyctibiusVII.png',
      name: 'NyctibiusVII',
      role: 'Front-End Programmer'
    },
    content: [
      {type: 'paragraph', content:'Hey guys 👋'},
      {type: 'paragraph', content:"I just uploaded another project to my portfolio. It's a project I did at NLW Return, a Rocketseat event. Project name is DoctorCare 🚀"},
      {type: 'link', content:'👉 nyctibiusVII.progm/Front-End Programmer'},
    ],
    publishedAt: new Date('2023-05-10 20:00:00'),
  },
];

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return(
              <Post 
                author={post.author}
                content={post.content}
                publishedAt = {post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
