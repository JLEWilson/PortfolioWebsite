import React from 'react';
import { useScrollContext } from '../ScrollContext';

const Navigation: React.FC = () => {
  const { scrollToTarget } = useScrollContext();
  const buttonStyles = "bg-primary text-left indent-1"
    return (
        <nav className='flex flex-col space-y-8 mb-8 p-2 text-text'>
            <button className={buttonStyles} onClick={() => scrollToTarget(0)}>Top</button>
            <button className={buttonStyles} onClick={() => scrollToTarget(1)}>About</button>
            <button className={buttonStyles} onClick={() => scrollToTarget(2)}> Projects</button>
        </nav>
    )
}

export default Navigation