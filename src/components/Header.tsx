import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

import { ButtonMenu } from '../components/ButtonMenu';
import { useTheme } from 'styled-components';

export function Header() {
  const theme = useTheme();

  return (
    <View style={[ styles.header, {backgroundColor: theme.colors.header}]}>
      <Text style={[styles.headerText, {color: theme.colors.text}]}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold', color: theme.colors.text }]}>do</Text>

      <ButtonMenu /> 
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  }
});
