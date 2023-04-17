import { instanceOfGearDealerApiError } from "apis/configs/types/apiResponse";
import { EyeOff, IconFB, IconGG } from "assets/images";
import { PrimaryButton, TextTitle } from "components";
import Field from "components/Field/Field";
import { Form, Formik } from "formik";
import { useAuth } from "hooks/useAuth";
import { useLogin } from "queries/sellerQueries";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

const SignIn = () => {
  const { mutate: login } = useLogin();
  const { login: appLogin, signInFirebase, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (isLoggedIn) {
    navigate("/", { replace: true });
  }

  const handleFirebaseSignIn = (provider: "gg" | "fb") => {
    try {
      signInFirebase(provider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#fff] py-52 text-[#000]">
      <div className="text-center">
        <TextTitle text="Sign in to Gear" variant="subtitle2" />
      </div>
      <div className="m-auto mt-9 max-w-[540px]">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            login(
              { email: values.email, password: values.password },
              {
                onSuccess: data => {
                  const token = data.accessToken;
                  appLogin(token);
                  if (window.history.state && window.history.state.idx > 0) {
                    navigate(-1);
                  } else {
                    navigate("/", { replace: true }); // the current entry in the history stack will be replaced with the new one with { replace: true }
                  }
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
          {({ isSubmitting }) => (
            <Form>
              <Field name="email" label="Email" />
              <Field name="password" label="Password" inputType="password" icon={<EyeOff />} onIconClicked={() => {}} />
              <div className="mb-10 mt-6 cursor-pointer text-right text-[16px] text-text-8">Forgot password</div>
              <PrimaryButton className="h-[42px]" text="Sign in" buttonType="submit" loading={isSubmitting} />
            </Form>
          )}
        </Formik>
        <div className="mt-12 text-center">
          <div className="relative">
            <p className="text-[16px] text-text-8">Or Sign in with</p>
            <div className="absolute top-[50%] w-[35%] border-t border-text-3"></div>
            <div className="absolute right-0 top-[50%] w-[35%] border-t border-text-3"></div>
          </div>
          <div className="m-auto mb-16 mt-10 flex max-w-[200px] justify-between">
            <div className="cursor-pointer" onClick={() => handleFirebaseSignIn("fb")}>
              <IconFB />
            </div>
            <div className="cursor-pointer" onClick={() => handleFirebaseSignIn("gg")}>
              <IconGG />
            </div>
          </div>
          <div className="text-[#666666]">
            {"Don't"} have an account?
            <Link to="/sign-up" className="text-[var(--color-primary)]">
              {" "}
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
