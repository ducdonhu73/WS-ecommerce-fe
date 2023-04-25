/* eslint-disable jsx-a11y/no-redundant-roles */
import { useProductId } from "queries/productQueries";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { ProductResponse } from "apis/products/product.model";
import { Link } from "react-router-dom";
import { useAddToCart } from "queries/cartQueries";
import { toast } from "react-toastify";
import { TextTitle } from "components";
const ProductDetail = () => {
  const { id } = useParams();
  const { mutate: getProduct } = useProductId();
  const [product, setProduct] = useState<ProductResponse>();
  const { mutate: addCart } = useAddToCart();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (id) {
      getProduct(
        { idProduct: id },
        {
          onSuccess: data => {
            setProduct(data);
          },
        },
      );
    }
  }, [id]);
  const addToCart = () => {
    if (id)
      addCart(
        { p_id: id, quantity },
        {
          onSuccess: () => {
            toast.success("product has been added to cart");
          },
          onError: () => toast.error("fail"),
        },
      );
  };
  return (
    <div className="mx-auto mt-6 w-[75%] px-4 py-8">
      <section className="sm:py-16 py-12">
        <div className="container mx-auto px-4">
          <nav className="flex">
            <ul role="list" className="flex items-center">
              <li className="text-left">
                <div className="-m-1">
                  <Link
                    to="#"
                    className="text-gray-600 focus:text-gray-900 hover:text-gray-800 rounded-md p-1 text-sm font-medium focus:shadow"
                  >
                    {" "}
                    Home{" "}
                  </Link>
                </div>
              </li>

              <li className="text-left">
                <div className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <div className="-m-1">
                    <Link
                      to="#"
                      className="text-gray-600 focus:text-gray-900 hover:text-gray-800 rounded-md p-1 text-sm font-medium focus:shadow"
                    >
                      {" "}
                      Products{" "}
                    </Link>
                  </div>
                </div>
              </li>

              <li className="text-left">
                <div className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <div className="-m-1">
                    <Link
                      to="#"
                      className="text-gray-600 focus:text-gray-900 hover:text-gray-800 rounded-md p-1 text-sm font-medium focus:shadow"
                      aria-current="page"
                    >
                      {product?.product_name}
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          <div className="lg:col-gap-12 xl:col-gap-16 lg:mt-12 lg:grid-cols-5 lg:gap-16 mt-8 flex grid-cols-1 flex-wrap gap-12">
            <div className="lg:col-span-3 lg:row-end-1 w-[40%]">
              <div className="lg:flex lg:items-start">
                <div className="lg:order-2 lg:ml-5">
                  <div className="max-w-xl overflow-hidden rounded-lg">
                    <img className="xl:h-[450px] h-full w-full max-w-full object-cover" src={product?.image} alt="" />
                  </div>
                </div>

                <div className="lg:order-1 lg:w-32 lg:flex-shrink-0 mt-2 w-full">
                  <div className="lg:flex-col flex flex-row items-start">
                    <button
                      type="button"
                      className="flex-0 border-gray-900 mb-3 aspect-square h-20 overflow-hidden rounded-lg border-2 text-center"
                    >
                      <img className="h-full w-full object-cover" src={product?.image} alt="" />
                    </button>
                    <button
                      type="button"
                      className="flex-0 mb-3 aspect-square h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                    >
                      <img className="h-full w-full object-cover" src={product?.image} alt="" />
                    </button>
                    <button
                      type="button"
                      className="flex-0 mb-3 aspect-square h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                    >
                      <img className="h-full w-full object-cover" src={product?.image} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2 w-[50%]">
              <h1 className="sm: text-gray-900 sm:text-3xl text-2xl font-bold">{product?.product_name}</h1>

              <div className="mt-5 flex items-center">
                <div className="flex items-center">
                  <svg
                    className="text-yellow-500 block h-4 w-4 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                  <svg
                    className="text-yellow-500 block h-4 w-4 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                  <svg
                    className="text-yellow-500 block h-4 w-4 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                  <svg
                    className="text-yellow-500 block h-4 w-4 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                  <svg
                    className="text-yellow-500 block h-4 w-4 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-500 ml-2 text-sm font-medium">1,209 Reviews</p>
              </div>

              <h2 className="text-gray-900 mt-8 text-base">Type</h2>
              <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                <label className="">
                  <input type="radio" name="type" value="Powder" className="peer sr-only" checked />
                  <p className="rounded-lg border border-black px-6 py-2 font-bold peer-checked:bg-black peer-checked:text-white">
                    Powder
                  </p>
                </label>
                <label className="">
                  <input type="radio" name="type" value="Whole Bean" className="peer sr-only" />
                  <p className="rounded-lg border border-black px-6 py-2 font-bold peer-checked:bg-black peer-checked:text-white">
                    Whole Bean
                  </p>
                </label>
                <label className="">
                  <input type="radio" name="type" value="Groud" className="peer sr-only" />
                  <p className="rounded-lg border border-black px-6 py-2 font-bold peer-checked:bg-black peer-checked:text-white">
                    Groud
                  </p>
                </label>
              </div>
              <TextTitle className="my-6" variant="subtitle2" text={"Amount: " + product?.amount ?? 0} />

              <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                <div className="h-[30px] w-[30px]" onClick={() => setQuantity(pre => (pre > 1 ? --pre : pre))}>
                  <div className="h-full flex-1">
                    <div className="border-gray-400 flex h-full flex-1 items-center justify-center rounded-full border p-2">
                      <div className="relative">
                        <img
                          src="https://e7.pngegg.com/pngimages/255/159/png-clipart-plus-and-minus-signs-subtraction-meno-plus-minus-sign-mathematics-rectangle-black-thumbnail.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-3 w-[80px] rounded bg-[#000] py-2 text-center text-[16px] font-medium text-[#fff]">
                  {quantity}
                </div>
                <div
                  className="h-[30px] w-[30px]"
                  onClick={() => setQuantity(pre => (pre < (product?.amount ?? 10) ? ++pre : pre))}
                >
                  <div className="h-full flex-1">
                    <div className="border-gray-400 flex h-full flex-1 items-center justify-center rounded-full border p-2">
                      <div className="relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-gray-500 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>

              <div className="sm:flex-row sm:space-y-0  mt-10 flex items-center justify-between space-y-4 border-b border-t py-4">
                <div className="flex items-end">
                  <h1 className="text-3xl font-bold">{product?.price + "đ"}</h1>
                  {/* <span className="text-base">/month</span> */}
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-[#000] bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out hover:bg-[gray] focus:shadow"
                  onClick={addToCart}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3 h-5 w-5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Add to cart
                </button>
              </div>

              <ul className="mt-8 space-y-2">
                <li className="text-gray-600 flex items-center text-left text-sm font-medium">
                  <svg
                    className="text-gray-500 mr-2 block h-5 w-5 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      className=""
                    ></path>
                  </svg>
                  Free shipping worldwide
                </li>

                <li className="text-gray-600 flex items-center text-left text-sm font-medium">
                  <svg
                    className="text-gray-500 mr-2 block h-5 w-5 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      className=""
                    ></path>
                  </svg>
                  Cancel Anytime
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <div className="border-gray-300 border-b">
                <nav className="flex gap-4">
                  <Link
                    to="#"
                    title=""
                    className="border-gray-900 text-gray-900 hover:border-gray-400 hover:text-gray-800 border-b-2 py-4 text-sm font-medium"
                  >
                    {" "}
                    Description{" "}
                  </Link>

                  {/* <a href="#" title="" className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
              Reviews
              <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
            </a> */}
                </nav>
              </div>

              <div className="sm:mt-12 mt-8 flow-root">{product?.description}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
