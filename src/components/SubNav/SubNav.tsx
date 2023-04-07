import TextTitle from "components/TextTitle";
import { SubNavModel } from "models"
import { Link } from "react-router-dom"

interface Props {
  listNav: SubNavModel[],
}

export const SubNav = ({listNav}: Props) => {
  const lastItem = listNav.length-1;

  return (
    <div>
      <div className="flex mt-16 mb-6">
        <div>
          <Link to="/" className="text-[gray]">Home</Link>
        </div>
        {listNav.map((item, index) => (
          <div key={index}>
            <span className="mx-1.5">/</span>
            {index===lastItem?
              <span>{item.title}</span> 
              : 
              <Link to={item.href} className="text-[gray]">{item.title}</Link>
            }
          </div>
        ))}
      </div>
      <TextTitle text={listNav[lastItem].title} variant="h3"/>
    </div>
  )
}
