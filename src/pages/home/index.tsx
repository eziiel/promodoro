import React from 'react'
import { HandPalm, Play } from 'phosphor-react'
import * as S from './styles'
import { NewCycleForm } from './components/newCycleform'
import { CountDown } from './components/countDown'
import * as zod from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CyclesContext } from '../../context/CyclesContext'

const ValidatorCicleSchema = zod.object({
  task: zod.string().min(1, 'informe uma tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'preencha com numero acima de 5')
    .max(60, 'preencha com numero abaixo de 60'),
})

type NewCicleFormData = zod.infer<typeof ValidatorCicleSchema>

export const Home = () => {
  const { ActiveCicle, createNewCicle, interruptCurrentCycle } =
    React.useContext(CyclesContext)

  const newCycleForm = useForm<NewCicleFormData>({
    resolver: zodResolver(ValidatorCicleSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const task = watch('task')
  const thisSubmitIsDisabled = !task

  const handleCreateNewCycle = (data: NewCicleFormData) => {
    createNewCicle(data)
    reset()
  }

  return (
    <S.HomeContent>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <CountDown />

        {ActiveCicle ? (
          <S.StopButtonFormCount type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24} />
            Interromper
          </S.StopButtonFormCount>
        ) : (
          <S.StartButtonFormCount type="submit" disabled={thisSubmitIsDisabled}>
            <Play size={24} />
            começar
          </S.StartButtonFormCount>
        )}
      </form>
    </S.HomeContent>
  )
}
