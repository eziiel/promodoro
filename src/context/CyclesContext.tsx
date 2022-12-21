import React, { ReactNode } from 'react'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startData: Date
  interrupterCycle?: Date
  finishedCycle?: Date
}
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
  interruptedCurrentCycle: () => void
}

export const CyclesContext = React.createContext({} as CyclesContextType)

interface CyclesContextProps {
  children: ReactNode
}
export const CyclesContextProvider = ({ children }: CyclesContextProps) => {
  const [cycles, setCycles] = React.useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = React.useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = React.useState(0)

  const ActiveCicle = cycles.find((cycle) => cycle.id === activeCycleId)

  const currentCycleAsFinished = () => {
    setCycles((prev) =>
      prev.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedCycle: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }
  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds)
  }

  const interruptedCurrentCycle = () => {
    setCycles((prev) =>
      prev.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interrupterCycle: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId(null)
  }

  const createNewCicle = (data: CreateCycleData) => {
    console.log('teste')
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startData: new Date(),
    }
    setCycles((prev) => [...prev, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
    // reset()
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
        interruptedCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
