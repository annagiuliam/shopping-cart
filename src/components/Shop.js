

import cakes from '../cakes';
import CakeCard from './CakeCard'

function Shop() {
  console.log(cakes)
  return (
    <div className="App">
     {cakes.map(cake => {
       return (
         <CakeCard  
         src={cake.src}
         name={cake.name}
         price={cake.price}
         />
       )
     })}
    </div>
  );
}

export default Shop;
