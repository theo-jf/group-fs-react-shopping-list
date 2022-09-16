// ROUTES USING IDS HERE 
// (Single PUT + single DELETE)
function ItemDisplay({itemList}){
    // PUT route for 'Buy' Button

    // DELETE route for 'Delete' Button

    return(
        <>
        {itemList.map(item => (
            <section key={item.id} className="itemList">
                <div>
                    {item.name}
                </div>
                <div>
                    {item.quantity}  {item.units}
                </div>
                
            
                {item.purchased ? null : <button>Buy</button>}
                
                
                <button>Delete</button>
            </section>
                
        ))}
        </>

        
    )
};

export default ItemDisplay;