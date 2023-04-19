import { useProductId } from "queries/productQueries";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { ProductResponse } from "apis/products/product.model";
import { InputType, PrimaryButton, TextTitle } from "components";
const ProductDetailAdmin = () => {
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
    <div className="mb-[88px] mt-10 w-full tablet:mt-0">
      <div>
        <div>
          <div className="mt-10 tablet:mt-[52px]">
            <form>
              <div>
                <div>
                  <TextTitle variant="subtitle2" text="Personal information" className="text-[18px]" />
                  <div className="mt-[30px]">
                    <div className="tablet:grid tablet:grid-cols-2">
                      <div className="mr-0 tablet:mr-4">
                        <InputType data={{ type: "inputText", label: "da", typeInput: "text" }} />
                      </div>
                      <div>
                        <InputType data={{ type: "inputText", label: "da", typeInput: "text" }} />
                      </div>
                    </div>
                    <div className="tablet:grid tablet:grid-cols-2">
                      <div className="mr-0 tablet:mr-4">
                        <InputType data={{ type: "inputText", label: "da", typeInput: "text" }} />
                      </div>
                      <div>
                        <InputType data={{ type: "inputText", label: "da", typeInput: "text" }} disabled />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[52px] flex justify-end ">
                <div className="w-[150px]">
                  <PrimaryButton text="Edit" buttonType="submit" loading={false} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailAdmin;
