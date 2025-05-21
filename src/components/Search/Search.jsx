import styles from './Search.module.css'

export default function Search({handleChange}) {
    return(
        <div className={styles.searchContainer}>
            <input 
                type="text" 
                placeholder="Поиск игр" 
                onChange={handleChange} 
                className={styles.searchInput}
            />
        </div>
    )
}