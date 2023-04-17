import TextTitle from "components/TextTitle";
import { SubNavModel } from "models";
import { Link } from "react-router-dom";

interface Props {
  listNav: SubNavModel[];
}

export const SubNav = ({ listNav }: Props) => {
  const lastItem = listNav.length - 1;

  return (
    <div>
      <div className="mb-3 flex tablet:mt-16 tablet:mb-6">
        <div>
          <Link to="/" className="text-[gray]">
            Home
          </Link>
        </div>
        {listNav.map((item, index) => (
          <div key={index}>
            <span className="mx-1.5">/</span>
            {index === lastItem ? (
              <span className="text-sm tablet:text-base">{item.title}</span>
            ) : (
              <Link to={item.href} className="text-sm text-[gray] tablet:text-base">
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </div>
      <TextTitle text={listNav[lastItem].title} variant="subtitle2" className="text-secondary-5 tablet:text-4xl" />
    </div>
  );
};
