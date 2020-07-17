import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList } from 'react-native';
import Header from './components/header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import { uuid } from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk', check: true },
    {id: uuid(), text: 'Eggs', check: false },
    {id: uuid(), text: 'Oranges', check: false },
    {id: uuid(), text: 'Bread', check: true },
    {id: uuid(), text: 'Juice', check: false }
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const checkItem = (id) => {
    setItems(prevItems => {
      return prevItems.map(item => item.id === id ? {...item, check: !item.check } : item);
    });
  }

  const addItem = text => {
    setItems(prevItems => {
      return [{id: uuid(), text},...prevItems];
    });
  }

  const deleteList = () => {
    setItems('');
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} deleteList={deleteList}/>
      <FlatList 
        data={items}
        renderItem={({item}) => <ListItem item={item} checkItem={checkItem} deleteItem={deleteItem} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
});

export default App;