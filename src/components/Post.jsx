import { useState } from 'react';
import styles from './Post.module.css';

export function Post(props){
    const [comments, setComments] = useState([
        'Parabéns pelo contéudo!',
        'Gostaria de mais posts como esse!'
    ])

    const [newComment, setNewComment] = useState('');

    const handleChange = (e) => {
        setNewComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setComments(prevState => [...prevState, newComment]);
    }

    return(
       <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img 
                    className={styles.avatar}
                    src="https://www.github.com/engcfraposo.png"  
                />

                <div className={styles.authorInfo}>
                    <strong>Cláudio Raposo</strong>
                    <span>Software Architect</span>
                </div>
            </div>
       
        </header>
        <div className={styles.content}>
            <p>{ props.content }</p>
        </div>
        <form onSubmit={handleSubmit} className={styles.commentForm}>
            <strong>Deixe o seu feedback</strong>
            <textarea 
                name="comment" 
                placeholder='Deixe um comentário'
                value={newComment}
                onChange={handleChange}
            />
            <button type='submit'>Publicar</button>
        </form>
        <div className={styles.commentList}>
        { comments.map( comment => (
            <div className={styles.commentBox}>
                <p>{comment}</p>
            </div>
        ))}
       </div>
       </article>
    )
}
