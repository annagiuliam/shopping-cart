


import CakeCard from './CakeCard'

const Shop = (props) => {
 
  const {cakes} = props

 props.checkPath(props.match)
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
