import { useContext, useState, useMemo } from "react";
import { CartContext } from "../../components/context/CartContext";

function Cart() {
  const { cartItems, removeItem } = useContext(CartContext);

  const [quantities, setQuantities] = useState(() =>
    cartItems.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {}),
  );

  const increaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const decreaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + item.price * quantities[item.id];
    }, 0);
  }, [cartItems, quantities]);

  return (
    <div className="layout-container py-10">
      <h1 className="text-2xl font-bold mb-8">🛒 Order Summary</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty 🛒</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-2xl"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-28 h-28 object-contain"
                />

                <div className="flex-1 text-center sm:text-left">
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-gray-500">${item.price}</p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="w-8 h-8 border rounded-lg hover:bg-gray-100"
                  >
                    −
                  </button>

                  <span className="font-semibold">{quantities[item.id]}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="w-8 h-8 border rounded-lg hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                {/* Subtotal + Remove */}
                <div className="text-center min-w-[100px]">
                  <div className="font-semibold">
                    ${(item.price * quantities[item.id]).toFixed(2)}
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 text-sm hover:text-red-700 mt-1 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="border rounded-2xl p-6 h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-3">
              <span>Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between mb-3">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>

            <div className="border-t pt-4 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button className="w-full mt-6 bg-(--main-color) cursor-pointer text-white py-3 rounded-xl hover:opacity-90 transition">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
