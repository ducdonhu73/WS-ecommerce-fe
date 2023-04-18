import { useProduct } from "queries/productQueries";
import { useEffect, useState } from "react";
import { ProductResponse } from "../../apis/products/product.model";

export const Product = () => {
  const [listProduct, setListProduct] = useState<ProductResponse[]>([]);
  const { mutate: getProduct } = useProduct();

  useEffect(() => {
    getProduct(
      {},
      {
        onSuccess: data => {
          console.log(data.push(...data));
          setListProduct(data);
        },
      },
    );
  }, []);

  const handleSreach = (key: string) => {
    getProduct(
      { product_name: key },
      {
        onSuccess: data => {
          setListProduct(data);
        },
      },
    );
  };

  return (
    <div className="mt-32">
      <div>
        <input type="text" onChange={e => handleSreach(e.target.value)} />
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 bg-[#eee] tablet:grid-cols-2 laptop:grid-cols-4">
        {listProduct.map((item, index) => (
          <div
            key={index}
            className="flex h-[329px] flex-col justify-between bg-primary-1 px-5 py-5 shadow-[0_2.31px_2.72px_0_rgba(0,0,0,0.024),0_15.38px_18.09px_0_rgba(0,0,0,0.0456)] hover:h-[398px] hover:w-[204px] tablet:h-[393px] laptop:py-8"
          >
            <div className="flex h-[193px] flex-col justify-between">
              <div className="flex h-[100px] items-center justify-center">
                <img src={item.image} alt="" />
              </div>
              <div className="flex text-lg font-bold text-text-10 tablet:h-[56px] tablet:text-2xl">
                {item.product_name}
              </div>
            </div>
            <div className="mt-10 flex text-lg font-medium text-text-8 tablet:h-[122px]">{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
