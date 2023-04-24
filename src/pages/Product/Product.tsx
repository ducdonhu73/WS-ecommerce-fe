import { useProduct } from "queries/productQueries";
import { useEffect, useState } from "react";
import { ProductResponse } from "../../apis/products/product.model";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';

export const Product = () => {
  const { mutate: getProduct } = useProduct();
  const [listProduct, setListProduct] = useState<ProductResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  console.log(listProduct.length);
  
  const pageCount = Math.ceil(listProduct.length / pageSize); // tính số trang cần phân trang
  const handlePageClick = (pageNumber: { selected: number; }) => {
    setCurrentPage(pageNumber.selected + 1);
  };

  const displayedProducts = listProduct.slice((currentPage - 1) * pageSize, currentPage * pageSize); // lấy các sản phẩm tương ứng với trang hiện tại
//   const abc = [
//     {
//         "_id": "64400e237178e194b25d6e76",
//         "category_id": "64400d377178e194b25d6e73",
//         "product_name": "Sữa rửa mặt Hadalabo dưỡng trắng",
//         "amount": 1000,
//         "price": 74000,
//         "image": "https://firebasestorage.googleapis.com/v0/b/btl-ws-n7.appspot.com/o/hadalaboxanh.png?alt=media&token=164c8e07-1c30-41fc-8cce-33f55fcfae1f",
//         "ngaysx": "2022-12-12T00:00:00.000Z",
//         "hsd": "2025-05-16T00:00:00.000Z",
//         "nhasx": "Hadalabo",
//         "createdAt": "2023-04-19T15:52:03.782Z",
//         "updatedAt": "2023-04-19T16:00:29.907Z",
//         "__v": 0
//     },
//     {
//         "_id": "64400f8f6aedd46690c4f260",
//         "category_id": "64400d377178e194b25d6e73",
//         "product_name": "Sữa rửa mặt Simple",
//         "amount": 1000,
//         "price": 76000,
//         "image": "https://firebasestorage.googleapis.com/v0/b/btl-ws-n7.appspot.com/o/sua-rua-mat-simple-giup-da-sach-thoang-150ml-1.jpg?alt=media&token=c137d094-65d3-4165-bddd-c0af61210469",
//         "ngaysx": "2022-04-05T00:00:00.000Z",
//         "hsd": "2024-01-29T00:00:00.000Z",
//         "nhasx": "Simple",
//         "createdAt": "2023-04-19T15:58:07.779Z",
//         "updatedAt": "2023-04-19T15:58:07.779Z",
//         "__v": 0
//     },
//     {
//         "_id": "64401676aced66a13f577ba6",
//         "category_id": "64400d377178e194b25d6e73",
//         "product_name": "Sữa rửa mặt Hadalabo White",
//         "amount": 737,
//         "price": 68000,
//         "image": "https://firebasestorage.googleapis.com/v0/b/btl-ws-n7.appspot.com/o/hadalaboTrang.png?alt=media&token=2f1d0bac-2e61-418d-b481-722041e2bb7a",
//         "ngaysx": "2022-03-09T00:00:00.000Z",
//         "hsd": "2024-02-27T00:00:00.000Z",
//         "nhasx": "Hadalabo",
//         "createdAt": "2023-04-19T16:27:34.728Z",
//         "updatedAt": "2023-04-19T16:27:34.728Z",
//         "__v": 0
//     },
//     {
//         "_id": "64401757aced66a13f577ba9",
//         "category_id": "64400d377178e194b25d6e73",
//         "product_name": "Sữa rửa mặt Hadalabo Red",
//         "amount": 737,
//         "price": 57000,
//         "image": "https://firebasestorage.googleapis.com/v0/b/btl-ws-n7.appspot.com/o/hadalaboRed.jpg?alt=media&token=68fd98c3-3c64-453d-82bd-129b47c8cc88",
//         "ngaysx": "2023-02-01T00:00:00.000Z",
//         "hsd": "2025-12-20T00:00:00.000Z",
//         "nhasx": "Hadalabo",
//         "createdAt": "2023-04-19T16:31:19.121Z",
//         "updatedAt": "2023-04-19T16:31:19.121Z",
//         "__v": 0
//     },
//     {
//         "_id": "6440191baced66a13f577bac",
//         "category_id": "64400d377178e194b25d6e73",
//         "product_name": "Sữa rửa mặt Cetaphil 500ml",
//         "amount": 500,
//         "price": 269000,
//         "image": "https://firebasestorage.googleapis.com/v0/b/btl-ws-n7.appspot.com/o/cetaphil500.jpg?alt=media&token=6a4b335f-92ec-4555-a942-7b522d20a98c",
//         "ngaysx": "2023-03-25T00:00:00.000Z",
//         "hsd": "2025-12-28T00:00:00.000Z",
//         "nhasx": "Cetaphil",
//         "createdAt": "2023-04-19T16:38:51.250Z",
//         "updatedAt": "2023-04-19T16:38:51.250Z",
//         "__v": 0
//     },
//     {
//         "_id": "644019eaaced66a13f577baf",
//         "category_id": "64400d377178e194b25d6e73",
//         "product_name": "Sữa rửa mặt Oxy Deep Wash",
//         "amount": 500,
//         "price": 80000,
//         "description": " sữa rửa mặt Oxy Deep Wash có thành phần chính được làm từ nguyên liệu than tre với cấu trúc tổ ong siêu xốp giúp hấp thu dầu thừa và bụi bẩn sâu tận lỗ chân lông, giúp nam giới kiểm soát nhờn, dầu trong thời gian dài suốt cả ngày. Than vỏ trấu với công nghệ Triporous độc quyền tối ưu hóa khả năng làm sạch nhờ cơ chế hấp thu đa dạng các tạp chất. Ngoài ra, sản phẩm còn được bổ sung thêm vitamin B3 cùng chiết xuát tảo biển giúp tăng cường độ ẩm cho làn da nam giới tút da lại sáng mịn hơn.",
//         "image": "https://firebasestorage.googleapis.com/v0/b/btl-ws-n7.appspot.com/o/oxyden.jpg?alt=media&token=405454d7-9395-4741-b687-514b97755d5b",
//         "ngaysx": "2023-01-25T00:00:00.000Z",
//         "hsd": "2025-08-09T00:00:00.000Z",
//         "nhasx": "Oxy",
//         "createdAt": "2023-04-19T16:42:18.793Z",
//         "updatedAt": "2023-04-19T16:42:18.793Z",
//         "__v": 0
//     },{
//       "_id": "644019eaaced66a13f577baf",
//       "category_id": "64400d377178e194b25d6e73",
//       "product_name": "Sữa rửa mặt Oxy Deep Wash",
//       "amount": 500,
//       "price": 80000,
//       "description": " sữa rửa mặt Oxy Deep Wash có thành phần chính được làm từ nguyên liệu than tre với cấu trúc tổ ong siêu xốp giúp hấp thu dầu thừa và bụi bẩn sâu tận lỗ chân lông, giúp nam giới kiểm soát nhờn, dầu trong thời gian dài suốt cả ngày. Than vỏ trấu với công nghệ Triporous độc quyền tối ưu hóa khả năng làm sạch nhờ cơ chế hấp thu đa dạng các tạp chất. Ngoài ra, sản phẩm còn được bổ sung thêm vitamin B3 cùng chiết xuát tảo biển giúp tăng cường độ ẩm cho làn da nam giới tút da lại sáng mịn hơn.",
//       "image": "https://firebasestorage.googleapis.com/v0/b/btl-ws-n7.appspot.com/o/oxyden.jpg?alt=media&token=405454d7-9395-4741-b687-514b97755d5b",
//       "ngaysx": "2023-01-25T00:00:00.000Z",
//       "hsd": "2025-08-09T00:00:00.000Z",
//       "nhasx": "Oxy",
//       "createdAt": "2023-04-19T16:42:18.793Z",
//       "updatedAt": "2023-04-19T16:42:18.793Z",
//       "__v": 0
//   },{
//     "_id": "644019eaaced66a13f577baf",
//     "category_id": "64400d377178e194b25d6e73",
//     "product_name": "Sữa rửa mặt Oxy Deep Wash",
//     "amount": 500,
//     "price": 80000,
//     "description": " sữa rửa mặt Oxy Deep Wash có thành phần chính được làm từ nguyên liệu than tre với cấu trúc tổ ong siêu xốp giúp hấp thu dầu thừa và bụi bẩn sâu tận lỗ chân lông, giúp nam giới kiểm soát nhờn, dầu trong thời gian dài suốt cả ngày. Than vỏ trấu với công nghệ Triporous độc quyền tối ưu hóa khả năng làm sạch nhờ cơ chế hấp thu đa dạng các tạp chất. Ngoài ra, sản phẩm còn được bổ sung thêm vitamin B3 cùng chiết xuát tảo biển giúp tăng cường độ ẩm cho làn da nam giới tút da lại sáng mịn hơn.",
//     "image": "https://firebasestorage.googleapis.com/v0/b/btl-ws-n7.appspot.com/o/oxyden.jpg?alt=media&token=405454d7-9395-4741-b687-514b97755d5b",
//     "ngaysx": "2023-01-25T00:00:00.000Z",
//     "hsd": "2025-08-09T00:00:00.000Z",
//     "nhasx": "Oxy",
//     "createdAt": "2023-04-19T16:42:18.793Z",
//     "updatedAt": "2023-04-19T16:42:18.793Z",
//     "__v": 0
// },{
//   "_id": "644019eaaced66a13f577baf",
//   "category_id": "64400d377178e194b25d6e73",
//   "product_name": "Sữa rửa mặt Oxy Deep Wash",
//   "amount": 500,
//   "price": 80000,
//   "description": " sữa rửa mặt Oxy Deep Wash có thành phần chính được làm từ nguyên liệu than tre với cấu trúc tổ ong siêu xốp giúp hấp thu dầu thừa và bụi bẩn sâu tận lỗ chân lông, giúp nam giới kiểm soát nhờn, dầu trong thời gian dài suốt cả ngày. Than vỏ trấu với công nghệ Triporous độc quyền tối ưu hóa khả năng làm sạch nhờ cơ chế hấp thu đa dạng các tạp chất. Ngoài ra, sản phẩm còn được bổ sung thêm vitamin B3 cùng chiết xuát tảo biển giúp tăng cường độ ẩm cho làn da nam giới tút da lại sáng mịn hơn.",
//   "image": "https://firebasestorage.googleapis.com/v0/b/btl-ws-n7.appspot.com/o/oxyden.jpg?alt=media&token=405454d7-9395-4741-b687-514b97755d5b",
//   "ngaysx": "2023-01-25T00:00:00.000Z",
//   "hsd": "2025-08-09T00:00:00.000Z",
//   "nhasx": "Oxy",
//   "createdAt": "2023-04-19T16:42:18.793Z",
//   "updatedAt": "2023-04-19T16:42:18.793Z",
//   "__v": 0
// },{
//   "_id": "644019eaaced66a13f577baf",
//   "category_id": "64400d377178e194b25d6e73",
//   "product_name": "Sữa rửa mặt Oxy Deep Wash",
//   "amount": 500,
//   "price": 80000,
//   "description": " sữa rửa mặt Oxy Deep Wash có thành phần chính được làm từ nguyên liệu than tre với cấu trúc tổ ong siêu xốp giúp hấp thu dầu thừa và bụi bẩn sâu tận lỗ chân lông, giúp nam giới kiểm soát nhờn, dầu trong thời gian dài suốt cả ngày. Than vỏ trấu với công nghệ Triporous độc quyền tối ưu hóa khả năng làm sạch nhờ cơ chế hấp thu đa dạng các tạp chất. Ngoài ra, sản phẩm còn được bổ sung thêm vitamin B3 cùng chiết xuát tảo biển giúp tăng cường độ ẩm cho làn da nam giới tút da lại sáng mịn hơn.",
//   "image": "https://firebasestorage.googleapis.com/v0/b/btl-ws-n7.appspot.com/o/oxyden.jpg?alt=media&token=405454d7-9395-4741-b687-514b97755d5b",
//   "ngaysx": "2023-01-25T00:00:00.000Z",
//   "hsd": "2025-08-09T00:00:00.000Z",
//   "nhasx": "Oxy",
//   "createdAt": "2023-04-19T16:42:18.793Z",
//   "updatedAt": "2023-04-19T16:42:18.793Z",
//   "__v": 0
// },{
//   "_id": "644019eaaced66a13f577baf",
//   "category_id": "64400d377178e194b25d6e73",
//   "product_name": "Sữa rửa mặt Oxy Deep Wash",
//   "amount": 500,
//   "price": 80000,
//   "description": " sữa rửa mặt Oxy Deep Wash có thành phần chính được làm từ nguyên liệu than tre với cấu trúc tổ ong siêu xốp giúp hấp thu dầu thừa và bụi bẩn sâu tận lỗ chân lông, giúp nam giới kiểm soát nhờn, dầu trong thời gian dài suốt cả ngày. Than vỏ trấu với công nghệ Triporous độc quyền tối ưu hóa khả năng làm sạch nhờ cơ chế hấp thu đa dạng các tạp chất. Ngoài ra, sản phẩm còn được bổ sung thêm vitamin B3 cùng chiết xuát tảo biển giúp tăng cường độ ẩm cho làn da nam giới tút da lại sáng mịn hơn.",
//   "image": "https://firebasestorage.googleapis.com/v0/b/btl-ws-n7.appspot.com/o/oxyden.jpg?alt=media&token=405454d7-9395-4741-b687-514b97755d5b",
//   "ngaysx": "2023-01-25T00:00:00.000Z",
//   "hsd": "2025-08-09T00:00:00.000Z",
//   "nhasx": "Oxy",
//   "createdAt": "2023-04-19T16:42:18.793Z",
//   "updatedAt": "2023-04-19T16:42:18.793Z",
//   "__v": 0
// },{
//   "_id": "644019eaaced66a13f577baf",
//   "category_id": "64400d377178e194b25d6e73",
//   "product_name": "Sữa rửa mặt Oxy Deep Wash",
//   "amount": 500,
//   "price": 80000,
//   "description": " sữa rửa mặt Oxy Deep Wash có thành phần chính được làm từ nguyên liệu than tre với cấu trúc tổ ong siêu xốp giúp hấp thu dầu thừa và bụi bẩn sâu tận lỗ chân lông, giúp nam giới kiểm soát nhờn, dầu trong thời gian dài suốt cả ngày. Than vỏ trấu với công nghệ Triporous độc quyền tối ưu hóa khả năng làm sạch nhờ cơ chế hấp thu đa dạng các tạp chất. Ngoài ra, sản phẩm còn được bổ sung thêm vitamin B3 cùng chiết xuát tảo biển giúp tăng cường độ ẩm cho làn da nam giới tút da lại sáng mịn hơn.",
//   "image": "https://firebasestorage.googleapis.com/v0/b/btl-ws-n7.appspot.com/o/oxyden.jpg?alt=media&token=405454d7-9395-4741-b687-514b97755d5b",
//   "ngaysx": "2023-01-25T00:00:00.000Z",
//   "hsd": "2025-08-09T00:00:00.000Z",
//   "nhasx": "Oxy",
//   "createdAt": "2023-04-19T16:42:18.793Z",
//   "updatedAt": "2023-04-19T16:42:18.793Z",
//   "__v": 0
// },{
//   "_id": "644019eaaced66a13f577baf",
//   "category_id": "64400d377178e194b25d6e73",
//   "product_name": "Sữa rửa mặt Oxy Deep Wash",
//   "amount": 500,
//   "price": 80000,
//   "description": " sữa rửa mặt Oxy Deep Wash có thành phần chính được làm từ nguyên liệu than tre với cấu trúc tổ ong siêu xốp giúp hấp thu dầu thừa và bụi bẩn sâu tận lỗ chân lông, giúp nam giới kiểm soát nhờn, dầu trong thời gian dài suốt cả ngày. Than vỏ trấu với công nghệ Triporous độc quyền tối ưu hóa khả năng làm sạch nhờ cơ chế hấp thu đa dạng các tạp chất. Ngoài ra, sản phẩm còn được bổ sung thêm vitamin B3 cùng chiết xuát tảo biển giúp tăng cường độ ẩm cho làn da nam giới tút da lại sáng mịn hơn.",
//   "image": "https://firebasestorage.googleapis.com/v0/b/btl-ws-n7.appspot.com/o/oxyden.jpg?alt=media&token=405454d7-9395-4741-b687-514b97755d5b",
//   "ngaysx": "2023-01-25T00:00:00.000Z",
//   "hsd": "2025-08-09T00:00:00.000Z",
//   "nhasx": "Oxy",
//   "createdAt": "2023-04-19T16:42:18.793Z",
//   "updatedAt": "2023-04-19T16:42:18.793Z",
//   "__v": 0
// },{
//   "_id": "644019eaaced66a13f577baf",
//   "category_id": "64400d377178e194b25d6e73",
//   "product_name": "Sữa rửa mặt Oxy Deep Wash",
//   "amount": 500,
//   "price": 80000,
//   "description": " sữa rửa mặt Oxy Deep Wash có thành phần chính được làm từ nguyên liệu than tre với cấu trúc tổ ong siêu xốp giúp hấp thu dầu thừa và bụi bẩn sâu tận lỗ chân lông, giúp nam giới kiểm soát nhờn, dầu trong thời gian dài suốt cả ngày. Than vỏ trấu với công nghệ Triporous độc quyền tối ưu hóa khả năng làm sạch nhờ cơ chế hấp thu đa dạng các tạp chất. Ngoài ra, sản phẩm còn được bổ sung thêm vitamin B3 cùng chiết xuát tảo biển giúp tăng cường độ ẩm cho làn da nam giới tút da lại sáng mịn hơn.",
//   "image": "https://firebasestorage.googleapis.com/v0/b/btl-ws-n7.appspot.com/o/oxyden.jpg?alt=media&token=405454d7-9395-4741-b687-514b97755d5b",
//   "ngaysx": "2023-01-25T00:00:00.000Z",
//   "hsd": "2025-08-09T00:00:00.000Z",
//   "nhasx": "Oxy",
//   "createdAt": "2023-04-19T16:42:18.793Z",
//   "updatedAt": "2023-04-19T16:42:18.793Z",
//   "__v": 0
// },{
//   "_id": "644019eaaced66a13f577baf",
//   "category_id": "64400d377178e194b25d6e73",
//   "product_name": "Sữa rửa mặt Oxy Deep Wash",
//   "amount": 500,
//   "price": 80000,
//   "description": " sữa rửa mặt Oxy Deep Wash có thành phần chính được làm từ nguyên liệu than tre với cấu trúc tổ ong siêu xốp giúp hấp thu dầu thừa và bụi bẩn sâu tận lỗ chân lông, giúp nam giới kiểm soát nhờn, dầu trong thời gian dài suốt cả ngày. Than vỏ trấu với công nghệ Triporous độc quyền tối ưu hóa khả năng làm sạch nhờ cơ chế hấp thu đa dạng các tạp chất. Ngoài ra, sản phẩm còn được bổ sung thêm vitamin B3 cùng chiết xuát tảo biển giúp tăng cường độ ẩm cho làn da nam giới tút da lại sáng mịn hơn.",
//   "image": "https://firebasestorage.googleapis.com/v0/b/btl-ws-n7.appspot.com/o/oxyden.jpg?alt=media&token=405454d7-9395-4741-b687-514b97755d5b",
//   "ngaysx": "2023-01-25T00:00:00.000Z",
//   "hsd": "2025-08-09T00:00:00.000Z",
//   "nhasx": "Oxy",
//   "createdAt": "2023-04-19T16:42:18.793Z",
//   "updatedAt": "2023-04-19T16:42:18.793Z",
//   "__v": 0
// }
// ]
  useEffect(() => {
    getProduct(
      {},
      {
        onSuccess: data => {
          data.push(...data);
          console.log(data);
          setListProduct(data);
        },
      },
    );
    // setListProduct(abc);
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
    <div>
      

    <div className="mt-32">
    <div className="pb-4 bg-white dark:bg-gray-900">
        <label className="sr-only">Search</label>
        <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" onChange={e => handleSreach(e.target.value)}/>
        </div>
    </div>
    <div className="absolute left-10">
    <div className="mb-4 text-[40px]">Price</div>
    
    <ul className="w-72 text-[18px] font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li className="w-full border-b border-inherit pb-3 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label className="w-full py-3 ml-2 text-[18px] font-medium text-gray-900 dark:text-gray-300">1000$-2000$</label>
        </div>
    </li>
    <li className="w-full border-b border-inherit pb-3 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label  className="w-full py-3 ml-2 text-[18px] font-medium text-gray-900 dark:text-gray-300">2000$-3000$</label>
        </div>
    </li>
    <li className="w-full border-b border-inherit pb-3 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label  className="w-full py-3 ml-2 text-[18px] font-medium text-gray-900 dark:text-gray-300">4000$-5000$</label>
        </div>
    </li>
    <li className="w-full border-b border-inherit pb-3 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label className="w-full py-3 ml-2 text-[18px] font-medium text-gray-900 dark:text-gray-300">6000$-7000$</label>
        </div>
    </li>
    <li className="w-full border-b border-inherit pb-3 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label className="w-full py-3 ml-2 text-md font-medium text-gray-900 dark:text-gray-300">6000$-7000$</label>
        </div>
    </li>
    <li className="w-full border-b border-inherit pb-3 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label className="w-full py-3 ml-2 text-md font-medium text-gray-900 dark:text-gray-300">6000$-7000$</label>
        </div>
    </li>
    
</ul>
    </div>
    

      <div className="flex flex-wrap">
        {displayedProducts.map((item, index) => (
          <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md" key={index}>
            <Link to={item._id}>
              <img className="h-60 rounded-t-lg object-cover" src={item.image} alt="product image" />
            </Link>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-slate-900 hitespace-nowrap whitespace-nowrap text-ellipsis overflow-hidden">{item.product_name}</h5>
            </a>
            <div className="mt-2.5 mb-5 flex items-center">
              <span className="mr-2 rounded bg-[#fde047] px-2.5 py-0.5 text-xs font-semibold">5.0</span>
              <svg aria-hidden="true" className="h-5 w-5 text-[#fde047]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg aria-hidden="true" className="h-5 w-5 text-[#fde047]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg aria-hidden="true" className="h-5 w-5 text-[#fde047]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg aria-hidden="true" className="h-5 w-5 text-[#fde047]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg aria-hidden="true" className="h-5 w-5 text-[#fde047]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <div className="flex items-center justify-between">
              <p>
                <span className="text-2xl font-bold text-slate-900">{`$`+item.price}</span>
              </p>
              <Link to={item._id} className="flex items-center rounded-md bg-[#000] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[gray] focus:outline-none focus:ring-4 focus:ring-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to cart
                </Link>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
    <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageClassName={'bg-blue-500 rounded-full py-2 px-4 mx-2 mb-10'}
        activeClassName={'bg-[gray] text-white'}
        containerClassName={'flex justify-center mt-4'}
        previousClassName={'rounded-full py-2 px-4 mx-2'}
        nextClassName={'rounded-full py-2 px-4 mx-2'}
      />
    </div>
  );
};