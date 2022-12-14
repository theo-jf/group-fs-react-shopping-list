import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import ItemForm from '../ItemForm/ItemForm.jsx';
import ItemDisplay from '../ItemDisplay/ItemDisplay.jsx'
import CartButtons from '../CartButtons/CartButtons.jsx';

// PUT GET IN HERE :)
function App() {
    let [itemList, setItemList] = useState([]);

    useEffect(() => {
        getItems();
    }, []);

    const getItems = () => {
        axios.get('/shopping')
        .then(response => {
            setItemList(response.data);
            console.log('GET success?', response.data);
          })
          .catch(error => {
            alert('error getting items');
            console.log(error);
          })
    }

    return (
        <div className="App">
            <Header />
            <main>
                <ItemForm getItems={getItems}/>
                <CartButtons getItems={getItems} />
                <ItemDisplay itemList={itemList} getItems={getItems}/>
            </main>
        </div>
    );
}

export default App;
