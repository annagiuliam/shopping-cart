
import CakeCard from './CakeCard';
import {useContext} from 'react';
import { ShopContext } from '../context/ShopContext';

const Shop = () => {
 const {cakes} = useContext(ShopContext);

  return (
     <div className='cakes-container'>        
        {cakes.map(cake => {
          return (
              <CakeCard  
              cake={cake}
              key={cake.id}
            />  
          )
        })}    
    </div> 
  )
}

export default Shop;
