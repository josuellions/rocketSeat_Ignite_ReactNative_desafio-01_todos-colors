import { useState } from 'react';
import {  DefaultTheme } from 'styled-components';

import ligth from '../styles/themes/ligth';
import dark from '../styles/themes/dark';

type ResponseProps = {
  title: string,
  theme: DefaultTheme,
  toggleSelectTheme: (title: string) => void
}

export function themeSelect() {
  const [theme, setTheme ] = useState<DefaultTheme>(ligth)

  function toggleSelectTheme (title: string) {
    switch (title) {
      case "ligth":
        setTheme(ligth)
        break;
      case 'dark':
        setTheme(dark)
        break;
      default: 
        setTheme(ligth)
        break;
    }
    return theme;
  }

  return { 
    theme,
    toggleSelectTheme,
  }
}

