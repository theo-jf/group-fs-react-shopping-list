import axios from "axios";

function CartButtons({getItems}) {

    // RESET ALL PURCHASE STATUSES
    const resetPurchases = () => {
        axios.put('/shopping')
        .then(response => {
            console.log('Purchases reset', response);
            getItems();
        })
        .catch(error => {
            alert('Error resetting purchases');
            console.log(error);
        })
    }

    // DELETE ALL
    const clearCart = () => {
        axios.delete('/shopping')
        .then(response => {
            console.log('All items removed', response);
            getItems();
        })
        .catch(error => {
            alert('Error clearing cart');
            console.log(error);
        })
    }
   
    return (
        <>
            <button onClick={resetPurchases}>Reset Purchases</button>
            <button onClick={clearCart}>Clear Purchases</button>
        </>
    );
}

export default CartButtons;