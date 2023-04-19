interface CarImagesProps {
  list?: {
    title?: string;
    listImages?: {
      img?: string;
    }[];
  }[];
}

function CarImages({ list }: CarImagesProps) {
  return (
    <div>
      {list?.map((item, index) => (
        <div key={index} className="mb-6 py-[14px] ">
          <h3 className="mb-2 text-lg font-bold leading-6 text-secondary-4 ">{item.title}</h3>
          <div className="flex w-full flex-wrap">
            {item.listImages?.map((ele, index) => (
              <div key={index}>
                <img className=" mt-4 h-[146px] w-[146px] rounded tablet:mr-6 " src={ele.img} alt="car_img" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarImages;
