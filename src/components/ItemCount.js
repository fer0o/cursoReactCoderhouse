import React from 'react';
import { useState } from 'react';


const ItemCount = ({ initial, stock, onAdd }) => {
  //hook de estado
  const [qty, setQty] = useState(initial);
  const [stockf, setStockf]= useState(stock)

  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div >
      <div >
        <button
          onClick={() => addProduct(-1)}
          disabled={qty === initial ? true : null}
        >
          -
        </button>
        <span>{qty}</span>
        <button
          onClick={() => addProduct(+1)}
          disabled={qty === stockf ? true : null}
        >
          +
        </button>
      </div>

      <button
        onClick={() => onAdd(qty)}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
  );
};

export default ItemCount;
