


import CakeCard from './CakeCard'

function Shop(props) {
  const {cakes} = props
  return (
    <div className="cakes-container">      
      
        {cakes.map(cake => {
          return (
            <CakeCard  
            /* src={cake.src}
            name={cake.name}
            price={cake.price} */
            cake={cake}
            key={cake.id}
            //onClick={props.onClick}
            /* onChange={props.onChange} */
            onSubmit={props.onSubmit}
            count={props.count}
            />
          )
        })}
    
    </div>
  );
}

export default Shop;
