import React, { createContext, useMemo, useState } from 'react'

interface ScrollProviderProps {
  children: React.ReactNode
}

interface ScrollContextValue {
  registerScrollTarget: (target: HTMLElement | null) => void
  scrollToTarget: (index: number) => void
}

const ScrollContext = createContext<ScrollContextValue | undefined>(undefined)

const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [scrollTargets, setScrollTargets] = useState<(HTMLElement | null)[]>([])

  const registerScrollTarget = (target: HTMLElement | null) => {
    setScrollTargets((prevTargets) => [...prevTargets, target])
  }

  const scrollToTarget = (index: number) => {
    const target = scrollTargets[index]
    if (target) {
      // Implement your scrolling logic here
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const contextValue: ScrollContextValue = useMemo(
    () => ({
      registerScrollTarget,
      scrollToTarget,
    }),
    [scrollTargets, registerScrollTarget, scrollToTarget],
  )

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollProvider
