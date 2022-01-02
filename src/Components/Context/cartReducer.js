const storeCartItems = (cartItems) => {
    const cart = cartItems.length > 0 ? cartItems :[];
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const sumItems = cartItems => {
    storeCartItems(cartItems);
    return {
      itemCount: cartItems.reduce((total, prod) => total + prod.quantity , 0),
      total: cartItems.reduce((total, prod) => total + (prod.price * prod.quantity), 0)
    }
  }

const cartReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            // item esta en el carrito 
            if (!state.cartItems.find(item => item.id === action.payload.id)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1,
                })
            }
            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }

        
        case 'INCREASE':
          
            const increaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            const productadd = state.cartItems[increaseIndex] 
            if(productadd.stock > productadd.quantity){
            productadd.quantity++;
          }
      
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      }

      case 'DECREASE':
      const decreaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      const product = state.cartItems[decreaseIndex];


      if (product.quantity > 1) {
        product.quantity--;
      }
      
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      }

      case 'REMOVEITEM':
        const newCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
        return{
            ...state,
            cartItems: [...newCartItems],
            ...sumItems(newCartItems),
        }

    case 'CLEAR':
        localStorage.removeItem('cart');
        return{
            cartItems: [],
            itemCount: 0, 
            total: 0,
        }
        
        default:
            return state;
    }
}
export default cartReducer;