import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import ItemForm from '../ItemForm/ItemForm.jsx';

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
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
