import React from 'react'
import { CyclesContext } from '../../context/CyclesContext'
import * as S from './styles'

export const History = () => {
  const { cycles } = React.useContext(CyclesContext)
  return (
    <S.HistoryMain>
      <h1>Histórico de tarefas</h1>

      <S.TableContainer>
        <table>
          <thead>
            <tr>
              <th>tarefa</th>
              <th>duração</th>
              <th>inicío</th>
              <th>status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount}</td>
                  <td>{cycle.startData.toISOString()}</td>
                  <td>
                    {cycle.finishedCycle && (
                      <S.StatusTaskColor color="green">
                        Concluído
                      </S.StatusTaskColor>
                    )}
                    {cycle.interruptedCycle && (
                      <S.StatusTaskColor color="red">
                        Interrompido
                      </S.StatusTaskColor>
                    )}
                    {!cycle.finishedCycle && !cycle.interruptedCycle && (
                      <S.StatusTaskColor color="yellow">
                        Em andamento
                      </S.StatusTaskColor>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </S.TableContainer>
    </S.HistoryMain>
  )
}
