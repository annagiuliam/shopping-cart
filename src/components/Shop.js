

import cakes from '../cakes';
import CakeCard from './CakeCard'

function Shop() {
  console.log(cakes)
  return (
    <div className="cakes-container">      
      
        {cakes.map(cake => {
          return (
            <CakeCard  
            src={cake.src}
            name={cake.name}
            price={cake.price}
            key={cake.id}
            />
          )
        })}
    
    </div>
  );
}

export default Shop;
