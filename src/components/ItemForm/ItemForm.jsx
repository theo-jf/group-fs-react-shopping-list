import React, { useState } from 'react';
import axios from 'axios';

// POST REQUEST HERE

function ItemForm({getItems}) {

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('');
    const [units, setUnits] = useState('');

    const addItem = (newItem) => {
        console.log(newItem)
        axios.post('/shopping', newItem)
            .then(response => {
                console.log('/shopping POST successful', response);
                getItems();
                setName('');
                setQuantity('');
                setUnits('');
            })
            .catch(error => {
                console.log('/shopping POST error', error);
            });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let item = {
            name: name,
            quantity: quantity,
            units: units
        }
        addItem(item);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="item name" />
            <input onChange={(e) => setQuantity(e.target.value)}
                    value={quantity}
                    placeholder="item quantity" />
            <input onChange={(e) => setUnits(e.target.value)}
                    value={units}
                    placeholder="units" />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default ItemForm;