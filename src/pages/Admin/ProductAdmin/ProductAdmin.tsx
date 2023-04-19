import ListItem from "./components/ListItem/ListItem";
import { formatCurrency } from "utils/formatCurrency";
import FilterButton from "./components/FilterButton/FilterButton";
import { createdAtOptionBtn, filterOfferBtn } from "./data";
import { useState, useEffect } from "react";
import { useProduct } from "queries/productQueries";
import { ProductResponse } from "apis/products/product.model";

function ProductAdmin() {
  const [listProduct, setListProduct] = useState<ProductResponse[]>([...Array(5)]);

  const { mutate: getProduct } = useProduct();

  useEffect(() => {
    getProduct(
      {},
      {
        onSuccess: data => setListProduct(data),
      },
    );
  }, []);

  const handleFilterOfferByStatus = (type?: string) => {
    type = type?.toLocaleLowerCase();
  };

  const handleFilterOfferByTime = () => {
    console.log("");
  };

  return (
    <div>
      <div className="">
        <div className="mb-10 mt-8 flex items-center justify-end tablet:my-10 ">
          <div>
            <FilterButton
              title={filterOfferBtn.title}
              filterType={filterOfferBtn.filterType}
              menu={filterOfferBtn.menu}
              className={filterOfferBtn.className}
              onClick={handleFilterOfferByStatus}
            />
          </div>
          <div className="ml-2.5">
            <FilterButton
              title={createdAtOptionBtn.title}
              filterType={createdAtOptionBtn.filterType}
              menu={createdAtOptionBtn.menu}
              className={createdAtOptionBtn.className}
              onClick={handleFilterOfferByTime}
            />
          </div>
        </div>
      </div>
      {/* list offer */}
      <div>
        {listProduct.map((item, index) => {
          return (
            <div key={index}>
              <ListItem
                product={item}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductAdmin;
