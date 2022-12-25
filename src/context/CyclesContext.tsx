import { differenceInSeconds } from 'date-fns'
import React, { ReactNode } from 'react'
import {
  addNewCycleAction,
  interruptedNewCycleAction,
  markedCycleHasFinishedAction,
} from '../reducers/cycles/actions'
import { Cycle, CyclesReducer } from '../reducers/cycles/reducer'

interface CreateCycleData {
  task: string
  minutesAmount: number
}
interface CyclesContextType {
  cycles: Cycle[]
  ActiveCicle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  currentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCicle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
}

export const CyclesContext = React.createContext({} as CyclesContextType)

interface CyclesContextProps {
  children: ReactNode
}

export const CyclesContextProvider = ({ children }: CyclesContextProps) => {
  const [cyclesState, dispatch] = React.useReducer(
    CyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-timer: cycles-state-1.0.0',
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
    },
  )

  const { cycles, activeCycleId } = cyclesState
  const ActiveCicle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = React.useState(() => {
    if (ActiveCicle) {
      return differenceInSeconds(new Date(), new Date(ActiveCicle.startData))
    }
    return 0
  })

  React.useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@ignite-timer: cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

  const currentCycleAsFinished = () => {
    dispatch(markedCycleHasFinishedAction())
  }
  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds)
  }

  const createNewCicle = (data: CreateCycleData) => {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startData: new Date(),
    }
    dispatch(addNewCycleAction(newCycle))
    setAmountSecondsPassed(0)
  }

  const interruptCurrentCycle = () => {
    dispatch(interruptedNewCycleAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        ActiveCicle,
        activeCycleId,
        currentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCicle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
