import PropTypes from "prop-types";
import { useProductId } from "queries/productQueries";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { ProductResponse } from "apis/products/product.model";
const ProductDetail = () => {
  const { id } = useParams();
  const { mutate: getProduct } = useProductId();
  const [product, setProduct] = useState<ProductResponse>();
  useEffect(() => {
    if (id)
      getProduct(
        { idProduct: id },
        {
          onSuccess: data => {
            setProduct(data);
          },
        },
      );
  }, [id]);
  return (
    <div className="mx-auto mt-32 max-w-3xl px-4 py-8">
      <h2 className="mb-4 text-2xl font-bold">{product?.product_name}</h2>
      <img className="mb-4 w-full" src={product?.image} alt={product?.product_name} />
      <p className="text-gray-600">{product?.description}</p>
      <p className="text-red-500 text-xl font-bold">{product?.price} đ</p>
    </div>
  );
};

export default ProductDetail;
