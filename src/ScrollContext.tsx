// ScrollContext.tsx
import { createContext, useContext, ReactNode } from 'react';

interface ScrollContextProps {
  registerScrollTarget: (target: HTMLElement | null) => void;
  scrollToTarget: (index: number) => void;
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const useScrollContext = (): ScrollContextProps => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const scrollTargets: (HTMLElement | null)[] = [];

  const registerScrollTarget = (target: HTMLElement | null) => {
    scrollTargets.push(target);
  };

  const scrollToTarget = (index: number) => {
    const target = scrollTargets[index];
    if (target) {
      // Implement your scrolling logic here
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ScrollContext.Provider value={{ registerScrollTarget, scrollToTarget }}>
      {children}
    </ScrollContext.Provider>
  );
};
