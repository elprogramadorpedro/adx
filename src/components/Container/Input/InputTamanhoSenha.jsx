import styles from "./Adx.module.css";
import PropTypes from 'prop-types'

InpuTamanhoDaSenha.propTypes={
    customSize: PropTypes.number.isRequired,
    setCustomSize: PropTypes.func.isRequired
}

export default function InpuTamanhoDaSenha(props){
    return(
        <div>
             <label className={styles.paraSize} htmlFor="">
            Size
          </label>
          <span>
            <input
              type="number"
              id="passwordSize"
              min={1}
              max={20}
              className={styles.sizeBox}
              value={props.customSize} // Agregar value y onChange para mantener y actualizar el tamaño personalizado
              onChange={(e) => props.setCustomSize(+e.target.value)}
            />
          </span>
        </div>
    )
}

