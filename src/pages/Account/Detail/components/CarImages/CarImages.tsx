interface CarImagesProps {
  list?: {
    title?: string;
    category?: {
      img?: string;
    }[];
  }[];
}

function CarImages({ list }: CarImagesProps) {
  return (
    <div>
      {list?.map((item, index) => (
        <div key={index} className="mb-6 py-[14px] ">
          <h3 className="mb-2 text-lg font-bold leading-6 text-[var(--color-secondary-04)] ">{item.title}</h3>
          <div className="flex flex-wrap">
            {item.category?.map((ele, index) => (
              <div key={index}>
                <img className="mr-6 mt-4 h-[146px] w-[146px] rounded " src={ele.img} alt="car_img" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarImages;
