import React from 'react'
import { CyclesContext } from '../../context/CyclesContext'
import * as S from './styles'

export const History = () => {
  const { cycles } = React.useContext(CyclesContext)
  return (
    <S.HistoryMain>
      <h1>Histórico de tarefas</h1>

      <pre>{JSON.stringify(cycles, null, 2)}</pre>

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
            <tr>
              <td>tarefa</td>
              <td>20 minutos</td>
              <td>há dois meses</td>
              <td>
                <S.StatusTaskColor color="red">interrompido</S.StatusTaskColor>
              </td>
            </tr>
            <tr>
              <td>tarefa</td>
              <td>20 minutos</td>
              <td>há dois meses</td>
              <td>
                <S.StatusTaskColor color="yellow">concluido</S.StatusTaskColor>
              </td>
            </tr>
            <tr>
              <td>tarefa</td>
              <td>20 minutos</td>
              <td>há dois meses</td>
              <td>
                <S.StatusTaskColor color="yellow">concluido</S.StatusTaskColor>
              </td>
            </tr>
            <tr>
              <td>tarefa</td>
              <td>20 minutos</td>
              <td>há dois meses</td>
              <td>
                <S.StatusTaskColor color="yellow">concluido</S.StatusTaskColor>
              </td>
            </tr>
            <tr>
              <td>tarefa</td>
              <td>20 minutos</td>
              <td>há dois meses</td>
              <td>
                <S.StatusTaskColor color="yellow">concluido</S.StatusTaskColor>
              </td>
            </tr>
            <tr>
              <td>tarefa</td>
              <td>20 minutos</td>
              <td>há dois meses</td>
              <td>
                <S.StatusTaskColor color="yellow">concluido</S.StatusTaskColor>
              </td>
            </tr>
            <tr>
              <td>tarefa</td>
              <td>20 minutos</td>
              <td>há dois meses</td>
              <td>
                <S.StatusTaskColor color="yellow">concluido</S.StatusTaskColor>
              </td>
            </tr>
          </tbody>
        </table>
      </S.TableContainer>
    </S.HistoryMain>
  )
}
