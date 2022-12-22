import { differenceInSeconds } from 'date-fns'
import React from 'react'
import { CyclesContext } from '../../../../context/CyclesContext'
import * as S from './styles'

export const CountDown = () => {
  const {
    ActiveCicle,
    activeCycleId,
    currentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = React.useContext(CyclesContext)

  const totalSeconds = ActiveCicle ? ActiveCicle.minutesAmount * 60 : 0

  const currentSeconds = ActiveCicle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  React.useEffect(() => {
    if (ActiveCicle) {
      document.title = `Promodoro ${minutes} : ${seconds}`
    } else {
      document.title = `Promodoro`
    }
  }, [ActiveCicle, minutes, seconds])

  // timer
  React.useEffect(() => {
    let secondsTimePassed: number

    if (ActiveCicle) {
      secondsTimePassed = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          ActiveCicle.startData,
        )

        if (secondsDifference >= totalSeconds) {
          currentCycleAsFinished()

          setSecondsPassed(totalSeconds)
          clearInterval(secondsTimePassed)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }
  }, [
    ActiveCicle,
    totalSeconds,
    activeCycleId,
    currentCycleAsFinished,
    setSecondsPassed,
  ])

  return (
    <S.CountDownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <S.Separetor>:</S.Separetor>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </S.CountDownContainer>
  )
}
