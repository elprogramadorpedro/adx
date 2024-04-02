import styles from "./Adx.module.css";
import password from "../../assets/password.svg";
import passwords from "../../assets/passwords.svg"; // Importar la segunda imagen
import { useState } from "react";
import useGerarSenha from "../hooks/useGerarSenha";
import copiarSenhas from "../hooks/useCopy";
import InpuTamanhoDaSenha from "./Input/InputTamanhoSenha";

export default function ContainerApp() {
  const { senha, gerarSenha } = useGerarSenha();
  const { copy, copiarSenha } = copiarSenhas(senha);
  const [showInput, setShowInput] = useState(false);
  const [customSize, setCustomSize] = useState(12);
  const [img, setImg] = useState(false); // Estado para alternar entre las imágenes

  const handleGenerate = () => {
    const size = showInput ? customSize : 8;
    gerarSenha(size);
  };

  // Función para alternar entre las imágenes
  const toggleImage = () => {
    setImg((prevState) => !prevState);
  };

  return (
    <div className={styles.containerApp}>
      <div className={styles.boxLogo}>
        {/* Mostrar una imagen u otra dependiendo del estado de 'img' */}
        {img ? (
          <img className={styles.imgPass} src={passwords} alt="logo" />
        ) : (
          <img className={styles.imgPass} src={password} alt="logo" />
        )}
      </div>
      <div className={styles.boxTitle}>
        <p className={styles.titleAdx}>ADX</p>
      </div>

      <div className={styles.boxCustomPass}>
        <div className={styles.custonCheck}>
          <div className={styles.boxCheck}>
            <label htmlFor="" className={styles.paragCustom}>
              Customize Password
            </label>
          </div>
          <label htmlFor="showInput" className={styles.customCheckbox}>
  <input
    type="checkbox"
    id="showInput"
    checked={showInput}
    onChange={() => {
      setShowInput((currentState) => !currentState);
      toggleImage(); // Llamar a toggleImage cuando cambia el estado del checkbox
    }}
  />
  <span className={styles.checkmark}></span>
</label>
        </div>

        <div className={styles.boxSize}>
          {/* Mostrar el componente 'InpuTamanhoDaSenha' solo si 'showInput' es verdadero */}
          {showInput && <InpuTamanhoDaSenha customSize={customSize} setCustomSize={setCustomSize} />}
          <span></span>
        </div>
      </div>

      <div className={styles.groupButton}>
        <button className={styles.buttonPass} onClick={handleGenerate}>
          Generate Password
        </button>
        <button className={styles.buttonCopy} onClick={copiarSenha}>
          {copy ? "Copiado!" : "Copiar"}
        </button>
      </div>

      <div className={styles.boxSenha}>
        <div className={styles.senha}>
          <p>{senha}</p>
        </div>
      </div>
    </div>
  );
}
