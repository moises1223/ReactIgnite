import styles from './Header.module.css'
import ignitelogo from '../assets/icon-logo.png'

export function Header() {
    return (
        <header className={styles.Header}>
        
                <img src="/src/assets/icon-logo.png" alt="Logotipo da" />
                <p>Ignite Feed</p>
            
        </header>
    )
}