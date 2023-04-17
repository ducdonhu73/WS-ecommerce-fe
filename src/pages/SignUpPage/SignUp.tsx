import { instanceOfGearDealerApiError } from "apis/configs/types/apiResponse";
import { IconFB, IconGG } from "assets/images";
import { InputType, PrimaryButton, TextTitle } from "components";
import { useAuth } from "hooks/useAuth";
import { InputTypeModel } from "models";
import { useRegister } from "queries/sellerQueries";
import { BaseSyntheticEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";

import { SignUpForm, listInput } from "./data";
import { toast } from "react-toastify";

const SignUp = () => {
  const [error, setError] = useState([...Array<string>(listInput.length)].fill(""));
  const { mutate: register } = useRegister();
  const { login: appLogin, signInFirebase, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (isLoggedIn) {
    navigate("/", { replace: true });
  }

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const target = e.target as SignUpForm;
    register(
      {
        firstName: target.firstName.value,
        lastName: target.lastName.value,
        email: target.email.value,
        phoneNumber: target.phoneNumber.value,
        password: target.password.value,
        confirmPassword: target.confirmPassword.value,
      },
      {
        onSuccess: data => {
          const token = data.accessToken;
          appLogin(token);
          navigate("/");
        },
        onError: error => {
          if (instanceOfGearDealerApiError(error)) {
            toast.error(error.error.message);
            return;
          }
          console.log(error);
        },
      },
    );
  };

  const onBlur = (e: BaseSyntheticEvent, data: InputTypeModel, index: number) => {
    e.preventDefault();
    const { id, min, max } = data;
    const text = (e.currentTarget as HTMLInputElement).value;
    const err = [...error];
    if (text === "") {
      err[index] = "Input is not invalid";
      setError(err);
      return;
    }
    if (id === "email") {
      if (!validator.isEmail(text)) {
        err[index] = "Email is wrong";
        setError(err);
        return;
      }
    }
    if (id === "phoneNumber") {
      if (!validator.isMobilePhone(text)) {
        err[index] = "Phonenumber is wrong";
        setError(err);
        return;
      }
    }
    if ((max && text.length > max) || (min && text.length < min)) {
      err[index] = id + " must be more than " + min + " and less than " + max + " characters";
      setError(err);
      return;
    }
    err[index] = "";
    setError(err);
  };

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
        <TextTitle text="Create an account" variant="subtitle2" />
        <p className="text-[16px] text-[#666666]">Enter information about you</p>
      </div>
      <div className="m-auto mt-9 max-w-[540px]">
        <form id="signup" onSubmit={e => handleSubmit(e)}>
          <div className="grid grid-cols-2 gap-6">
            {listInput.map((input, index) => (
              <div key={index} className={input.span ? "col-span-2" : ""}>
                <InputType className="h-16" index={index} err={error[index]} data={input} onBlur={onBlur} />
              </div>
            ))}
          </div>
          <PrimaryButton className="mt-10 h-[42px]" text="Next" buttonType="submit" />
        </form>
        <div className="mt-12 text-center">
          <div className="relative">
            <p className="text-[16px] text-[#4D4C4C]">Or Sign up with</p>
            <div className="absolute top-[50%] w-[35%] border-t border-[#cccccc]"></div>
            <div className="absolute right-0 top-[50%] w-[35%] border-t border-[#cccccc]"></div>
          </div>
          <div className="m-auto mb-16 mt-10 flex max-w-[200px] justify-between">
            <div className="cursor-pointer" onClick={() => handleFirebaseSignIn("fb")}>
              <IconFB />
            </div>
            <div className="cursor-pointer" onClick={() => handleFirebaseSignIn("gg")}>
              <IconGG />
            </div>
          </div>
          <p className="text-[#666666]">
            Already have an account?
            <Link to="/sign-in" className="text-[var(--color-primary)]">
              {" "}
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
