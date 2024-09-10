import { useState } from "react";
import { pizzas as initialCart } from "../components/pizzas"; 
import "/src/carrito.css"; 
import Swal from "sweetalert2";
import { formatNumber } from "../components/CambioM";
import { Link } from "react-router-dom";



const Cart = () => {
  const [pizzaList, setPizzaList] = useState(initialCart);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Función para aumentar la cantidad de pizza
  const increaseQuantity = (pizza) => {
    setCart((prevState) => {
      const exist = prevState.find((x) => x.id === pizza.id);

      if (exist) {
        const updatedCart = prevState.map((x) =>
          x.id === pizza.id ? { ...exist, quantity: exist.quantity + 1 } : x
        );
        setTotal(calculateTotal(updatedCart));
        return updatedCart;
      } else {
        const updatedCart = [...prevState, { ...pizza, quantity: 1 }];
        setTotal(calculateTotal(updatedCart));
        return updatedCart;
      }
    });
  };

  // Función para disminuir la cantidad de pizza
  const decreaseQuantity = (pizza) => {
    setCart((prevState) => {
      const exist = prevState.find((x) => x.id === pizza.id);

      if (exist) {
        if (exist.quantity <= 1) {
          const updatedCart = prevState.filter((x) => x.id !== pizza.id);
          setTotal(calculateTotal(updatedCart));
          return updatedCart;
        } else {
          const updatedCart = prevState.map((x) =>
            x.id === pizza.id ? { ...exist, quantity: exist.quantity - 1 } : x
          );
          setTotal(calculateTotal(updatedCart));
          return updatedCart;
        }
      }
      return prevState;
    });
  };

  // Función para calcular el total
  const calculateTotal = (cart) => {
    return cart.reduce(
      (total, pizza) => total + pizza.price * pizza.quantity,
      0
    );
  };
 //Funcion Limpiar Carrito
  const clearCart = () => {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, vaciar carrito'
    }).then((result) => {
        if (result.isConfirmed) {
            setCart([]);
            setTotal(0);
            setCountPizzas(0);
            Swal.fire(
                '¡Vaciado!',
                'Tu carrito ha sido vaciado.',
                'success'
            );
        }
    });
};
//funcion Pagar Compra
const pagoCart = () => { 
  Swal.fire({ 
    title: 'Compra Realizada', 
    text: "¡Disfruta....Pizza MIA!", 
    icon: 'success', 
    showCancelButton: true, 
    confirmButtonColor: '#3085d6', 
    cancelButtonColor: '#d33' 
  }).then((result) => { 
    if (result.isConfirmed) { 
      setCart([]); 
      setTotal(0); 
      setCountPizzas(0); 
      Swal.fire( 
        '', 
        '', 
        '' 
      );
    } 
  });
};


  return (
    <div className={`wrapper modal is-open`}>
     
        <h2>Carrito de Compra:</h2>
        <Link  to="/"><button type="button" className="modal-close">&times;</button> </Link>

         <ol>
          {cart.map((pizza) => (
            <li key={pizza.id} className="text-cart">
              <div className="pizza-details">
                {pizza.quantity > 0 ? (
                <p>
                <img src={pizza.img} style={{ width: "100px", border: "2px" }} />
                <strong>{pizza.name}</strong> {formatNumber(pizza.price)} x {pizza.quantity} = $ {(pizza.price * pizza.quantity).toFixed(2)}
              </p>
                  ) : null}
              </div>
            </li>
           ))}
          </ol>

          <div className="total">
            <h3>Total: </h3>
            <span className="total-pagar">{formatNumber(total)}</span>
          </div>
          <div className="pagador">
            <button type="button" class="btn btn-info" onClick={clearCart} className="clear-all">
             Vaciar Carrito
            </button>
            <button className="pay-button" onClick={pagoCart}>Pagar</button>
          </div>
        

         <hr className="linea"></hr>
         <h1>Productos</h1>
         <ul> {pizzaList.map((pizza) => (
          <li key={pizza.id} className="card">
              <img src={pizza.img} alt={pizza.name} style={{ width: "200px", border: "2px " }} className="pizza-image" />
              <div className="pizza-details">
               <h2>{pizza.name}</h2>
               <p>{formatNumber(pizza.price)}</p>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(pizza)} className="menor">-</button>
                <span> {cart.find((x) => x.id === pizza.id)?.quantity || 0} </span>
                <button onClick={() => increaseQuantity(pizza)} className="mayor">+</button>
              </div> </div> </li> ))} </ul> 
              
     </div> 
  );
};

export default Cart;
