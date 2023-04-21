import { CartResponse } from "apis/carts/cart.model";
import { useAuth } from "hooks/useAuth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./components/CartItem";
import { ProductResponse } from "apis/products/product.model";
import { UserResponse } from "apis/user/user.model";

export class CartModel implements CartResponse {
  _id: string;
  user: UserResponse;
  product: ProductResponse;
  quantity: number;
  checked: boolean;

  constructor(cart: CartResponse) {
    this._id = cart._id;
    this.user = cart.user;
    this.product = cart.product;
    this.quantity = cart.quantity;
    this.checked = true;
  }

  setChecked(checked: boolean) {
    this.checked = checked;
  }

  setQuantity(q: number) {
    this.quantity = q;
  }
}

function Cart() {
  const { cart } = useAuth();
  const [cartItems, setCartItems] = useState<CartModel[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart) {
      setCartItems(cart.map(c => new CartModel(c)));
      setTotalPrice(cart.reduce((total, item) => total + item.product.price * item.quantity, 0));
    }
  }, [cart]);

  useEffect(() => {
    setTotalPrice(
      cartItems.reduce((total, item) => (item.checked ? total + item.product.price * item.quantity : 0), 0),
    );
  }, [cartItems]);

  const callback = (c: CartModel) => {
    setCartItems(
      cartItems.map(i => {
        if (i._id === c._id) return c;
        return i;
      }),
    );
  };

  return (
    <div className="mt-24">
      <body className="bg-gray-100">
        <div className="container mx-auto mt-10">
          <div className="my-10 flex shadow-md">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="text-2xl font-semibold">Shopping Cart</h1>
                <h2 className="text-2xl font-semibold">{cartItems.length} Items</h2>
              </div>
              <div className="mb-5 mt-10 flex">
                <h3 className="w-2/5 text-xs font-semibold uppercase text-[gray]">Product Details</h3>
                <h3 className="w-1/5 text-center text-xs font-semibold uppercase text-[gray]">Quantity</h3>
                <h3 className="w-1/5 text-center text-xs font-semibold uppercase text-[gray]">Price</h3>
                <h3 className="w-1/5 text-center text-xs font-semibold uppercase text-[gray]">Total</h3>
              </div>
              {cartItems.map((cart, index) => (
                <div key={index}>
                  <CartItem cart={cart} callback={callback} />
                </div>
              ))}

              <Link to="/product" className="text-indigo-600 mt-10 flex text-sm font-semibold">
                <svg className="fill-current text-indigo-600 mr-2 w-4" viewBox="0 0 448 512">
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </Link>
            </div>

            <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className="border-b pb-8 text-2xl font-semibold">Order Summary</h1>
              <div className="mb-5 mt-10 flex justify-between">
                <span className="text-sm font-semibold uppercase">Items 3</span>
                <span className="text-sm font-semibold">{totalPrice}đ</span>
              </div>
              <div>
                <p className="mb-3 inline-block text-sm font-medium uppercase">Shipping</p>
              </div>
              <div className="py-10">
                <label htmlFor="promo" className="mb-3 inline-block text-sm font-semibold uppercase">
                  Discount Code
                </label>
                <input type="text" id="promo" placeholder="Enter your code" className="w-full p-2 text-sm" />
              </div>
              <button className="bg-[#f05b5b] px-5 py-2 text-sm uppercase text-white hover:bg-[red]">Apply</button>
              <div className="mt-8 border-t">
                <div className="flex justify-between py-6 text-sm font-semibold uppercase">
                  <span>Total cost</span>
                  <span>{totalPrice}đ</span>
                </div>
                <button className="w-full bg-[#4c0082ea] py-3 text-sm font-semibold uppercase text-white hover:bg-[indigo]">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Cart;
