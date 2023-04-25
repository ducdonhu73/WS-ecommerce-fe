import { useRemoveCart } from "queries/cartQueries";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { CartModel } from "../Cart";

const CartItem = ({ cart, callback }: { cart: CartModel; callback: (cart: CartModel) => void }) => {
  const [quantity, setQuantity] = useState(cart.quantity);
  const { mutate: removeCart } = useRemoveCart();

  const handleRemove = () => {
    removeCart(
      { cartId: cart._id },
      {
        onSuccess: () => toast("product is deleted"),
        onError: () => toast("failed"),
      },
    );
  };

  const handleCheck = () => {
    cart.setChecked(!cart.checked);
    callback(cart);
  };

  const handleSub = () => {
    if (quantity > 1) {
      setQuantity(pre => --pre);
      cart.setQuantity(quantity);
    }
  };

  const handleAdd = () => {
    setQuantity(pre => (pre < cart.product.amount ? ++pre : pre));
  };

  useEffect(() => {
    cart.setQuantity(quantity);
    callback(cart);
  }, [quantity]);

  return (
    <div className="hover:bg-gray-100 -mx-8 flex items-center px-6 py-5">
      <div className="flex w-2/5">
        <input type="checkbox" className="m-auto mr-5" checked={cart.checked} onClick={handleCheck} />
        <div className="w-20">
          <img className="max-w-20 h-20" src={cart.product.image} alt="" />
        </div>
        <div className="ml-4 flex flex-grow flex-col justify-between">
          <span className="text-sm font-bold">{cart.product.product_name}</span>
          <span className="text-red-500 text-xs">{cart.product.nhasx}</span>
          <div onClick={handleRemove} className="cursor-pointer text-xs font-semibold text-[gray] hover:text-error">
            Remove
          </div>
        </div>
      </div>
      <div className="flex w-1/5 justify-center">
        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512" onClick={handleSub}>
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>

        <input
          className="mx-2 w-16 border text-center"
          type="text"
          value={quantity}
          onChange={e => {
            const v = Number.parseInt(e.currentTarget.value);
            if (v) setQuantity(v <= cart.product.amount ? v : cart.product.amount);
            else setQuantity(0);
          }}
        />

        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512" onClick={handleAdd}>
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <span className="w-1/5 text-center text-sm font-semibold">{cart.product.price}đ</span>
      <span className="w-1/5 text-center text-sm font-semibold">{cart.product.price * cart.quantity}đ</span>
    </div>
  );
};

export default CartItem;
