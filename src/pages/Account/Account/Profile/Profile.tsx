import { instanceOfGearDealerApiError } from "apis/configs/types/apiResponse";
import { PrimaryButton, TextTitle } from "components";
import Field from "components/Field/Field";
import { Form, Formik } from "formik";
import initials from "initials";
import { useGetCurrentUser, useUpdateUser } from "queries/sellerQueries";
import { toast } from "react-toastify";
import * as Yup from "yup";

function Profile() {
  const { data: userData } = useGetCurrentUser();
  const { mutate: updateUser, isLoading } = useUpdateUser();

  return (
    <div>
      <div className="mb-[88px] mt-10 w-full tablet:mt-0">
        {userData && (
          <div>
            <div className="flex items-center justify-center">
              <div className="flex h-[120px] w-[120px] items-center justify-center rounded-[50%] bg-text-1 tablet:h-[180px] tablet:w-[180px]">
                <span className="select-none text-5xl font-bold uppercase text-primary tablet:text-7xl">
                  {initials(`${userData.firstName} ${userData.lastName}`)}
                </span>
              </div>
            </div>
            <div>
              <div className="mt-10 tablet:mt-[52px]">
                <Formik
                  initialValues={{
                    firstName: userData?.firstName,
                    lastName: userData?.lastName,
                    phoneNumber: userData?.phoneNumber,
                    email: userData?.email,
                    address: userData?.address?.address,
                    city: userData.address?.city,
                    country: userData.address?.country,
                    province: userData.address?.province,
                    postalCode: userData.address?.postalCode,
                  }}
                  validationSchema={Yup.object().shape({
                    firstName: Yup.string().required("First name is required"),
                    email: Yup.string().email("Invalid email address"),
                    lastName: Yup.string().required("Last name is required"),
                    phoneNumber: Yup.string(),
                    city: Yup.string(),
                    country: Yup.string(),
                    province: Yup.string(),
                    postalCode: Yup.string(),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    updateUser(
                      {
                        firstName: values.firstName,
                        lastName: values.lastName,
                        phoneNumber: values.phoneNumber,
                        address: {
                          address: values.address,
                          city: values.city,
                          country: values.country,
                          province: values.province,
                          postalCode: values.postalCode,
                        },
                      },
                      {
                        onSuccess: () => {
                          toast.success("Update profile successfully");
                        },
                        onError: error => {
                          if (instanceOfGearDealerApiError(error)) {
                            toast.error(error.error.message);
                            return;
                          }
                          console.log(error);
                        },
                        onSettled: () => {
                          setSubmitting(false);
                        },
                      },
                    );
                  }}
                >
                  {() => (
                    <Form>
                      <div>
                        <div>
                          <TextTitle variant="subtitle2" text="Personal information" className="text-[18px]" />
                          <div className="mt-[30px]">
                            <div className="tablet:grid tablet:grid-cols-2">
                              <div className="mr-0 tablet:mr-4">
                                <Field label="First name" name="firstName" />
                              </div>
                              <div>
                                <Field label="Last name" name="lastName" />
                              </div>
                            </div>
                            <div className="tablet:grid tablet:grid-cols-2">
                              <div className="mr-0 tablet:mr-4">
                                <Field label="Mobile number" name="phoneNumber" />
                              </div>
                              <div>
                                <Field label="Email" disabled inputType="email" name="email" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-10 tablet:mt-[52px]">
                          <TextTitle variant="subtitle2" text="Address" className="text-[18px]" />
                          <div className="mt-[30px]">
                            <div className="">
                              <div>
                                <Field label="Address" name="address" />
                              </div>
                            </div>
                            <div className="tablet:grid tablet:grid-cols-2">
                              <div className="mr-0 tablet:mr-4">
                                <Field label="City" name="city" />
                              </div>
                              <div>
                                <Field label="Country" name="country" />
                              </div>
                            </div>
                            <div className="tablet:grid tablet:grid-cols-2">
                              <div className="mr-0 tablet:mr-4">
                                <Field label="Province" name="province" />
                              </div>
                              <div>
                                <Field label="Postal code" name="postalCode" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-[52px] flex justify-end ">
                        <div className="w-[150px]">
                          <PrimaryButton text="Edit" buttonType="submit" loading={isLoading} />
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
