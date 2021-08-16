import React from 'react';
import Swal from 'sweetalert2'

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;

  const checkout = () => {
    Swal.fire({
      title: 'Hacer pedido?',
      text: "Si lo pides, te lo comes!",
      icon: 'warning',
      iconColor: '#b8d8d6',
      showCancelButton: true,
      confirmButtonColor: '#127974',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, comenzar a cocinar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Cocinando!',
          'Se esta preparando su comida.',
          'success'
        )
      }
    })
  }

  return (
    <aside className="block col-1">
      <h2>Orden</h2>
      <div>
        {cartItems.length === 0 && <div>Su orden está vacia</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x Bs.{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">
                <strong>Total</strong>
              </div>
              <div className="col-1 text-right">
                <strong>Bs.{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={checkout}>
                Registrar
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}