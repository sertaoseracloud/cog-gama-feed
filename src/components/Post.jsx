import styles from './Post.module.css';

export function Post(props){
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
       
       </article>
    )
}
