import * as S from './styles'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../context/CyclesContext'

export const NewCycleForm = () => {
  const { ActiveCicle } = React.useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <S.FormContainer>
      <label htmlFor="task">vou trabalhar em</label>
      <S.TaskInputText
        list="task-sujestions"
        type="text"
        id="task"
        placeholder="Dê um nome para o projeto"
        disabled={!!ActiveCicle}
        {...register('task')}
      />

      <label htmlFor="minutesAmount">durante </label>
      <S.CountDownInputNumber
        type="number"
        placeholder="00"
        id="minutesAmount"
        max={60}
        min={5}
        step={5}
        disabled={!!ActiveCicle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <datalist id="task-sujestions">
        <option value="estudar">estudar</option>
        <option value="ler">ler</option>
        <option value="jogar">jogar</option>
      </datalist>

      <span>minutos</span>
    </S.FormContainer>
  )
}
