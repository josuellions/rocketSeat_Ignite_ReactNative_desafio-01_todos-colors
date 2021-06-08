import React, { ReactNode, createContext, useContext, useState, useEffect } from 'react';
import  AsyncLocalStorage  from '@react-native-async-storage/async-storage';
import { DefaultTheme } from 'styled-components';

import ligth from '../styles/themes/ligth';

interface SelectThemeProviderProps {
  children: ReactNode,
}

interface ISelectThemeData {
  theme: DefaultTheme;
  toogleTheme: (selecttheme: DefaultTheme) => void ;
}

const SelectThemeContext = createContext({} as ISelectThemeData)

function SelectThemeProvider( { children }: any) {
  const dataKey = '@todo:theme';
  const [theme, setTheme ] = useState<DefaultTheme>(ligth);

  function toogleTheme ( selecttheme: DefaultTheme){
    setTheme(selecttheme)
  }

  useEffect(() =>{
    async function loadThemeStorageData() {
      await AsyncLocalStorage.setItem(dataKey, JSON.stringify(theme));
    }
    loadThemeStorageData();
  },[theme])

  return (
    <SelectThemeContext.Provider value={{theme, toogleTheme}}>
      {children}
    </SelectThemeContext.Provider>
  )
}

function useSelectTheme() {
  const context = useContext(SelectThemeContext);

  return context;
}

export {SelectThemeProvider, useSelectTheme}