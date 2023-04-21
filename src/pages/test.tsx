import { useState } from "react";
import { Link } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

function Test() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Product 1", price: 10, quantity: 2 },
    { id: 2, name: "Product 2", price: 15, quantity: 1 },
  ]);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <body className="bg-gray-100">
        <div className="container mx-auto mt-10">
          <div className="my-10 flex shadow-md">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="text-2xl font-semibold">Shopping Cart</h1>
                <h2 className="text-2xl font-semibold">3 Items</h2>
              </div>
              <div className="mb-5 mt-10 flex">
                <h3 className="text-gray-600 w-2/5 text-xs font-semibold uppercase">Product Details</h3>
                <h3 className="text-gray-600 w-1/5 text-center text-xs font-semibold uppercase">Quantity</h3>
                <h3 className="text-gray-600 w-1/5 text-center text-xs font-semibold uppercase">Price</h3>
                <h3 className="text-gray-600 w-1/5 text-center text-xs font-semibold uppercase">Total</h3>
              </div>
              <div className="hover:bg-gray-100 -mx-8 flex items-center px-6 py-5">
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img
                      className="h-24"
                      src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                      alt=""
                    />
                  </div>
                  <div className="ml-4 flex flex-grow flex-col justify-between">
                    <span className="text-sm font-bold">Iphone 6S</span>
                    <span className="text-red-500 text-xs">Apple</span>
                    <Link to="#" className="hover:text-red-500 text-gray-500 text-xs font-semibold">
                      Remove
                    </Link>
                  </div>
                </div>
                <div className="flex w-1/5 justify-center">
                  <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>

                  <input className="mx-2 w-8 border text-center" type="text" value="1" />

                  <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="w-1/5 text-center text-sm font-semibold">$400.00</span>
                <span className="w-1/5 text-center text-sm font-semibold">$400.00</span>
              </div>

              <div className="hover:bg-gray-100 -mx-8 flex items-center px-6 py-5">
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img
                      className="h-24"
                      src="https://drive.google.com/uc?id=10ht6a9IR3K2i1j0rHofp9-Oubl1Chraw"
                      alt=""
                    />
                  </div>
                  <div className="ml-4 flex flex-grow flex-col justify-between">
                    <span className="text-sm font-bold">Xiaomi Mi 20000mAh</span>
                    <span className="text-red-500 text-xs">Xiaomi</span>
                    <Link to="#" className="hover:text-red-500 text-gray-500 text-xs font-semibold">
                      Remove
                    </Link>
                  </div>
                </div>
                <div className="flex w-1/5 justify-center">
                  <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>

                  <input className="mx-2 w-8 border text-center" type="text" value="1" />

                  <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="w-1/5 text-center text-sm font-semibold">$40.00</span>
                <span className="w-1/5 text-center text-sm font-semibold">$40.00</span>
              </div>

              <div className="hover:bg-gray-100 -mx-8 flex items-center px-6 py-5">
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img
                      className="h-24"
                      src="https://drive.google.com/uc?id=1vXhvO9HoljNolvAXLwtw_qX3WNZ0m75v"
                      alt=""
                    />
                  </div>
                  <div className="ml-4 flex flex-grow flex-col justify-between">
                    <span className="text-sm font-bold">Airpods</span>
                    <span className="text-red-500 text-xs">Apple</span>
                    <Link to="#" className="hover:text-red-500 text-gray-500 text-xs font-semibold">
                      Remove
                    </Link>
                  </div>
                </div>
                <div className="flex w-1/5 justify-center">
                  <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                  <input className="mx-2 w-8 border text-center" type="text" value="1" />

                  <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="w-1/5 text-center text-sm font-semibold">$150.00</span>
                <span className="w-1/5 text-center text-sm font-semibold">$150.00</span>
              </div>

              <Link to="#" className="text-indigo-600 mt-10 flex text-sm font-semibold">
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
                <span className="text-sm font-semibold">590$</span>
              </div>
              <div>
                <p className="mb-3 inline-block text-sm font-medium uppercase">Shipping</p>
                <select className="text-gray-600 block w-full p-2 text-sm">
                  <option>Standard shipping - $10.00</option>
                </select>
              </div>
              <div className="py-10">
                <label htmlFor="promo" className="mb-3 inline-block text-sm font-semibold uppercase">
                  Promo Code
                </label>
                <input type="text" id="promo" placeholder="Enter your code" className="w-full p-2 text-sm" />
              </div>
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm uppercase text-white">Apply</button>
              <div className="mt-8 border-t">
                <div className="flex justify-between py-6 text-sm font-semibold uppercase">
                  <span>Total cost</span>
                  <span>$600</span>
                </div>
                <button className="bg-indigo-500 hover:bg-indigo-600 w-full py-3 text-sm font-semibold uppercase text-white">
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

export default Test;
