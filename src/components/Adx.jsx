import styles from "./Adx.module.css"
import ContainerApp from "./Container/ContainerApp"
export default function Adx(){
    return(
        <div className={styles.superContainer}>
           <ContainerApp>
           </ContainerApp>
        </div>
    )
}