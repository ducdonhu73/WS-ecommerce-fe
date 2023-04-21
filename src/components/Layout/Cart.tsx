import { useEffect, useState } from "react";
import { CartResponse } from "apis/carts/cart.model";
import { useAuth } from "hooks/useAuth";
import { useRemoveCart } from "queries/cartQueries";
import { toast } from "react-toastify";

const Cart = ({ display = true }: { display: boolean; setDisplay?: () => boolean }) => {
  // const { mutate: getCarts } = useCarts();
  const [listCart, setListCart] = useState<CartResponse[]>();
  const { cart } = useAuth();
  const { mutate: removeCart } = useRemoveCart();

  useEffect(() => {
    setListCart(cart);
  }, [cart]);

  const handleRemove = (cartId: string) => {
    removeCart(
      { cartId },
      {
        onSuccess: () => toast("product is deleted"),
        onError: () => toast("failed"),
      },
    );
  };

  return (
    <div>
      {display && (
        <div>
          <div className="absolute right-[5%] top-[70%] block border-[12px] border-[transparent] border-b-[#e0d6d6]"></div>
          <div className="scroll-bar absolute right-[-100%] top-[calc(90%+14px)] h-96 w-[377px] flex-col overflow-y-scroll rounded-md bg-[#f6efef] text-black shadow-2xl">
            {listCart?.map((item, index) => (
              <div
                key={index}
                className="flex w-full cursor-pointer border-b-[1px] border-[#b0a3a3] p-3 hover:bg-[#cbb7b7]"
              >
                <div>
                  <img className="mr-5 h-14 max-w-[50px]" src={item.product.image} alt="" />
                </div>
                <div className="relative flex w-full flex-col justify-between">
                  <p className="mb-4">{item.product.product_name}</p>
                  <div className="flex justify-between">
                    <p className="text-text-6">{item.product.price + " đ"}</p>
                    <p>{"Số lượng: " + item.quantity}</p>
                  </div>
                  <button
                    className="absolute right-[-10px] top-[-8px] border-[red] px-2 text-[red] hover:border-[1px]"
                    onClick={() => handleRemove(item._id)}
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
