import React, { useState, useEffect } from 'react';
import { Alert, View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

// interface Props {
//   toogleTheme: (selectTheme: string) => void;
// }
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { useSelectTheme } from '../hooks/selectTheme';
import ligth from '../styles/themes/ligth';

import  AsyncLocalStorage  from '@react-native-async-storage/async-storage';

export function Home() {
  const baseTasks = [
      {
        id: Number(new Date().getTime()),
        title: "React",
        done: false
      },
      {
        id: Number(new Date().getTime() + 1),
        title: "React Native",
        done: false
      },
      {
        id: Number(new Date().getTime() + 2),
        title: "Node JS",
        done: false
      },
  ]
  const { theme, toogleTheme } = useSelectTheme();
  const [ seletcTheme, setSelectTheme ] = useState<DefaultTheme>(theme === undefined ? ligth : theme as DefaultTheme);
  
  const dataKey = '@todo:theme';

  const [tasks, setTasks] = useState<Task[]>(baseTasks);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if(newTaskTitle !== '' && newTaskTitle.length > 0 ){ 
      setTasks(old => [... old, {
        id: Number(new Date().getTime()), 
        title: newTaskTitle,
        done: false
      }]);
      
      return newTaskTitle
    }

    Alert.alert('Todo não pode ser vazio!')
    return null;
    
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const UpTasks = tasks.map((task) => {
      if(task.id === id) {
        task.done = !task.done;
      }
      return task
    });

    setTasks(UpTasks);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const removeTasks = tasks.filter( task => task.id !== id);

    setTasks(removeTasks);
  }

  useEffect(() => {
    async function loadThemeStorageData() {
      const themeStorage = await AsyncLocalStorage.getItem(dataKey)
     
      if(themeStorage){
        setSelectTheme(JSON.parse(themeStorage) as DefaultTheme )
      }
    }
    loadThemeStorageData();
  }, [toogleTheme])

  return (
    <>
      <ThemeProvider theme={seletcTheme}>
        <Header />

        <TodoInput addTask={handleAddTask} />
      
        <MyTasksList 
          tasks={tasks} 
          onPress={handleMarkTaskAsDone} 
          onLongPress={handleRemoveTask} 
        />
        
      </ThemeProvider>
    </>
  )
}