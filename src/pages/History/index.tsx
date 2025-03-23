import { useContext } from "react";
import { formatDistanceToNow } from "date-fns";
import { ptBR }  from 'date-fns/locale/pt-BR'
import { HeaderHistory, HistoryContainer, HistoryList, Status } from "./styles";
import { CyclesContext } from "../../contexts/CyclesContext";
import { DeleteHistory } from "./components";



export function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <HistoryContainer>
      <HeaderHistory>
        <h1>Meu histórico</h1>
        <DeleteHistory />
      </HeaderHistory>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount}</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status $statusColor="green">Concluído</Status>
                    )}

                    {cycle.interruptedDate && (
                      <Status $statusColor="red">Interrompido</Status>
                    )}

                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status $statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
