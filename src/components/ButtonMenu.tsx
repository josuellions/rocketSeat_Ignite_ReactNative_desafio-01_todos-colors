import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { themeSelect  } from '../utils/themeSelect';

import { useSelectTheme } from '../hooks/selectTheme';

export function ButtonMenu( ) { 
  const { theme, toggleSelectTheme } = themeSelect();
  const { toogleTheme } = useSelectTheme();

  const [iconIsMenu, setIconIsMenu] = useState(false)
  function handleTogleMenu(){
    toggleSelectTheme(iconIsMenu ? 'ligth' : 'dark')
    setIconIsMenu(!iconIsMenu);
    toogleTheme(theme);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleTogleMenu}>
        <Ionicons name={!iconIsMenu ? 'ios-color-palette-outline' : 'ios-close-sharp'} size={34} color={theme.colors.text}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'transparent',
    position: "absolute",
    right: 0,
    marginRight: 10,
    paddingTop: 25,
    zIndex: 1
  }
})
