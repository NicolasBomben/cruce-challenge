import styles from './BreadCrumb.module.css';

export const BreadCrumb = () => {
  return (
    
    <nav className={styles.breadCrumbContainer}>
        <span className={styles.linkInactive}>Inicio</span>
        <span className={styles.linkSeparator}>/</span>
        <span className={styles.linkInactive}>Juguetes</span>
        <span className={styles.linkSeparator}>/</span>
        <span className={styles.linkActive}>Funko Pop</span>
    </nav>
  )
}
