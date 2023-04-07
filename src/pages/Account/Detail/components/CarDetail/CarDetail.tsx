interface CarDetailProps {
  list?: {
    title?: string;
    attributes?: {
      key?: string;
      value?: string;
      link?: boolean;
    }[];
    content?: string;
  }[];
}

function CarDetail({ list }: CarDetailProps) {
  return (
    <div>
      {list?.map((item, index) => (
        <div key={index} className="mb-6 py-[14px] ">
          <h3 className="mb-6 text-lg font-bold leading-6 text-[var(--color-secondary-04)] ">{item.title}</h3>
          {item.attributes?.map((ele, index) => (
            <div key={index}>
              <div className="flex">
                <p className="text-base font-medium leading-6 text-[var(--color-text-09)]">{ele.key}</p>
                <span
                  className={`${
                    ele.link ? "cursor-pointer text-[var(--color-secondary-03)] underline" : ""
                  } ml-1 text-base font-normal leading-6 text-[var(--color-text-08)]`}
                >
                  {ele.value}
                </span>
              </div>
            </div>
          ))}
          {item.content && (
            <p className="text-base font-normal leading-6 text-[var(--color-text-08)]">{item.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default CarDetail;
