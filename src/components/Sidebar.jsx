import styles from './Sidebar.module.css';

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            {/** imagem de fundo*/}
            <img 
                src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=50&w=450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className={styles.cover}
            />
            {/** profile */}
            <div className={styles.profile}>
                <img 
                    src="https://www.github.com/engcfraposo.png" 
                    className={styles.avatar} 
                />

                <strong>Cláudio Raposo</strong>
                <span>Software Architect</span>
            </div>
            <footer>
                <a href="#">
                    Editar Perfil
                </a>
            </footer>
        </aside>
    )
}