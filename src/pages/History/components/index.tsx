import { ButtonDeleteHistory } from "./styles";
import { CyclesContext } from "../../../contexts/CyclesContext";
import { useContext } from "react";


export function DeleteHistory(){
  const { clearHistory } = useContext(CyclesContext);

  return (
    <ButtonDeleteHistory onClick={clearHistory}>
      Limpar Histórico
    </ButtonDeleteHistory>
  )
}