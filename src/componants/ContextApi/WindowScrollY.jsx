import React, { createContext, useEffect,useContext } from 'react'
export const WindowScrollYContext = createContext()

export const WindowScrollYProvider = ({ children }) => {
    const [scrollY, setScrollY] = React.useState(0)
    
    
    useEffect(()=>{
        const handleScroll = () => {
           setScrollY(window.scrollY)
        }
       window.addEventListener('scroll', handleScroll)

       return () => {window.removeEventListener('scroll',handleScroll)}
    },[])

  return (
    <WindowScrollYContext.Provider value={{ scrollY}}>
        {children}
    </WindowScrollYContext.Provider>
  )
}

export const useWindowScrollY  = () => useContext(WindowScrollYContext);