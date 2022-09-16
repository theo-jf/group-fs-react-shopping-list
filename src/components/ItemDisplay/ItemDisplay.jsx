// ROUTES USING IDS HERE 
import axios from 'axios';
// (Single PUT + single DELETE)
function ItemDisplay({ itemList, getItems }) {
    // PUT route for 'Buy' Button


    const handlePurchased = (id) => {
        console.log(id);
        axios({
            method: 'PUT',
            url: `/shopping/${id}`
        }).then((response) => {
            getItems();
        }).catch((error) => {
            console.log('Handle Purchased PUT request not working:', error);
        })
    }
    // DELETE route for 'Delete' Button
    const handleDelete = (id) => {
        console.log(id);
        axios({
            method: 'DELETE',
            url: `/shopping/${id}`
        }).then((response) => {
            getItems();
        }).catch((error) => {
            console.log('Handle Delete request not working:', error);
        })
    }


    // return (
    //     itemList.map(item => {
    //         return (
    //             <ItemView
    //                 item={item}
    //             />
    //         )
    //     })
    // )


    return (
        <>
            {itemList.map(item => (
                <section key={item.id} className="itemList">
                    <div>
                        {item.name}
                    </div>
                    <div>
                        {item.quantity}  {item.units}
                    </div>

                    {item.purchased ? <button onClick={() => handlePurchased(item.id)}>Undo Purchase</button> : <button onClick={() => handlePurchased(item.id)}>Buy</button>}

                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </section>

            ))}
        </>


    )
};

export default ItemDisplay;


// function ItemView({ item }) {

//     const buyMe = () => {
//         console.log('id is', item.id)
//     }

//     return (
//         <button onClick={buyMe} />
//     )
// }
