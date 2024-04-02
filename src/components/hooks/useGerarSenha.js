import { useState } from "react";

export default function useGerarSenha() {
  const [senha, setSenha] = useState("");

  const gerarSenha = (tamanho) => {
    const caracteresEspeciais = "!@#$%^&*()-_=+";
    const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";

    let senhaGerada = "";

    // Agregar al menos un carácter especial, una mayúscula y una minúscula
    senhaGerada += caracteresEspeciais.charAt(
      Math.floor(Math.random() * caracteresEspeciais.length)
    );
    senhaGerada += letrasMayusculas.charAt(
      Math.floor(Math.random() * letrasMayusculas.length)
    );
    senhaGerada += letrasMinusculas.charAt(
      Math.floor(Math.random() * letrasMinusculas.length)
    );

    // Generar el resto de la contraseña
    for (let i = 3; i < tamanho; i++) {
      const todosCaracteres =
        caracteresEspeciais + letrasMayusculas + letrasMinusculas + numeros;
      senhaGerada += todosCaracteres.charAt(
        Math.floor(Math.random() * todosCaracteres.length)
      );
    }

    // Barajar la contraseña generada
    senhaGerada = senhaGerada
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .join("");

    setSenha(senhaGerada);
  };

  return { senha, gerarSenha };
}
