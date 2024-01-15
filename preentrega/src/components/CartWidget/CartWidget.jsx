import { BsFillCartCheckFill } from 'react-icons/bs';
import {useCartContext} from '../Context/CartContext';


const CartWidget = () => {
  const {totalProducts, cart} = useCartContext();
  return (
    <div className="container">
     
        <BsFillCartCheckFill />
        
    </div>
  );
};

export default CartWidget;