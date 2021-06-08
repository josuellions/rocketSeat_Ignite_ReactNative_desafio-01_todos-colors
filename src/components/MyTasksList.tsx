import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

import { useTheme } from 'styled-components';

function FlatListHeaderComponent() {
  const theme = useTheme();
  return (
    <View>
      <Text style={[styles.header, { color: theme.colors.title}]}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  const theme = useTheme();
  return (
    <View style={{backgroundColor: theme.colors.secundary, flex: 1, marginTop: -25}} >
      <FlatList
        data={tasks}
        keyExtractor={item => String(item.id)}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              testID={`button-${index}`}
              activeOpacity={0.7}
              //TODO - use onPress, onLongPress and style props
              onPress={() => onPress(item.id)}
              onLongPress={() => onLongPress(item.id)}
              style={!item.done ? [styles.taskButton, {borderColor: theme.colors.backgroundSecundary}] : 
                [styles.taskButtonDone,{backgroundColor: theme.colors.backgroundSecundary}]}

            >
              <View 
                testID={`marker-${index}`}
                //TODO - use style prop 
                style={!item.done ? 
                  [ styles.taskMarker, {borderColor: theme.colors.text_shape}]
                  :
                  [styles.taskMarkerDone, {backgroundColor: theme.colors.backgroundPrimary}]
                }
              />
              <Text 
                //TODO - use style prop
      
                style={!item.done ? [{color: theme.colors.text_shape}] : [styles.taskTextDone,{color:theme.colors.text_ligth}]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )
        }}
        ListHeaderComponent={<FlatListHeaderComponent />}
        ListHeaderComponentStyle={{
          marginBottom: 20
        }}
        style={{
          marginHorizontal: 24,
          marginTop: 32
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 10
  },
  // taskText: {
  //   color: '#3D3D4D',
  // },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginRight: 10
  },
  taskTextDone: {
    textDecorationLine: 'line-through'
  }
})