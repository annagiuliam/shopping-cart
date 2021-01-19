
import CakeCard from './CakeCard'

const Shop = (props) => {
 
  const {cakes} = props;
  props.checkPath(props.match);

  return (
    <div className='cakes-container'>        
        {cakes.map(cake => {
          return (
            <CakeCard  
              cake={cake}
              key={cake.id}
              onSubmit={props.onSubmit}
              count={props.count}
            />
          )
        })}    
    </div>
  );
}

export default Shop;
