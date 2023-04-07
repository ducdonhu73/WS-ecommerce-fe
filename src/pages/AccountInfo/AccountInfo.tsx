import SubNav from "components/SubNav"
import { listInput, listInputAddress, listNavAccount, listSubNav } from "./data"
import { NavAccount } from "./component/NavAccount"
import { InputType, TextTitle } from "components"
import { useAuth } from "hooks/useAuth"
import { UserResponse } from "apis/user/user.model"
import { Address } from "models"

export const AccountInfo = () => {

  const { user } = useAuth();

  return (
    <div className="mt-32 mb-52">
      <SubNav listNav={listSubNav} />
      <div className="mt-20 grid grid-cols-4">
        <div className="col-span-1">
          <NavAccount listNav={listNavAccount} indexActive={2}/>
        </div>
        <div className="col-span-3 ml-20">
          <div className="w-48 h-48 overflow-hidden rounded-full m-auto">
            <img src="https://zda.vn/wp-content/uploads/2023/02/201-anh-gai-xinh-trung-quoc-ngau-dep-hut-hon-sieu-hot_1.jpg" alt="" />
          </div>
          <div className="mt-[52px]">
            <div>
              <TextTitle variant="subtitle2" text="Personal information" className="text-[18px]"/>
              <div className="mt-8 grid grid-cols-2 gap-5">
                {listInput.map((input, index) => 
                  <div key={index}>
                    <InputType data={input} value={user?user[input.id as keyof UserResponse] as string:""} className="h-16"/>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-[52px]">
              <TextTitle variant="subtitle2" text="Address" className="text-[18px]"/>
              <div className="mt-8 grid grid-cols-2 gap-5">
                {listInputAddress.map((input, index) => 
                  <div key={index} className={"col-span-"+input.span}>
                    <InputType data={input} value={user?.address?user.address[input.id as keyof Address] as string:""} className="h-16"/>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
