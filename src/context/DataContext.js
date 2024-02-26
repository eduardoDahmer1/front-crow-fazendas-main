import React from 'react'
export const DataContext = React.createContext();

export const DataProvider = ({children}) => {

    const [search, setSearch] = React.useState('');

    return (
        <DataContext.Provider value={{ search, setSearch }}>
          {children}
        </DataContext.Provider>
    )
}
