import { createContext, useContext, useState } from "react";

export const RevisionContext = createContext({
    revId: '',
    setRevId: () => { }
})

export const useRevision = () => useContext(RevisionContext)

export const RevisionProvider = ({ children }) => {
    const [revId, setRevId] = useState('')

    return (
        <RevisionContext.Provider value={{ revId, setRevId }}>
            {children}
        </RevisionContext.Provider>
    )
}