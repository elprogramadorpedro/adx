import { useState } from "react";

export default function copiarSenhas(senha) {
    
  const [copy, setCopy] = useState(false);

  const copiarSenha = () => {
    navigator.clipboard.writeText(senha);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  return { copiarSenha, copy };
}