
import CakeCard from './CakeCard';
import {useContext} from 'react';
import { ShopContext } from '../context/ShopContext';

const Shop = (props) => {
 const {cakes, checkPath} = useContext(ShopContext);
 
  checkPath(props.match) // fix warning

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
