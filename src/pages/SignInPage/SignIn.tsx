import { IconFB, IconGG } from "assets/images";
import { TextTitle, InputType, PrimaryButton } from "components";
import { listInput, LoginError, LoginForm } from "./data";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "queries/sellerQueries";
import { useAuth } from "hooks/useAuth";
import { BaseSyntheticEvent, useState } from "react";
import validator from "validator";
import { InputTypeModel } from "models";

const Signin = () => {
  const { mutate: login } = useLogin();
  const { login: appLogin, signInFirebase } = useAuth();
  const [error, setError] = useState([...Array<string>(listInput.length)].fill(""));
  const navigate = useNavigate();

  const handleSignIn = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const target = e.target as LoginForm;
    setError([...Array<string>(listInput.length)].fill(""));
    login(
      { email: target.email.value, password: target.password.value },
      {
        onSuccess: data => {
          const token = data.accessToken;
          appLogin(token);
          navigate("/");
        },
        onError: error => {
          const err = (error as LoginError).error.message;
          alert(err);
          setError([...Array<string>(listInput.length)].fill("wrong"));
        },
      },
    );
  };
  const set_error = (str: string, i: number): void => {
    const err = [...error];
    err[i] = str;
    setError(err);
  };

  const onBlur = (e: BaseSyntheticEvent, data: InputTypeModel, index: number) => {
    e.preventDefault();
    const { id, min, max } = data;
    const text = (e.currentTarget as HTMLInputElement).value;
    if (text === "") {
      set_error("Input is not invalid", index);
      return;
    }
    if (id === "email") {
      if (!validator.isEmail(text)) {
        set_error("Email is wrong", index);
        return;
      }
    }
    if (id === "phoneNumber") {
      if (!validator.isMobilePhone(text)) {
        set_error("Phonenumber is wrong", index);
        return;
      }
    }
    if ((max && text.length > max) || (min && text.length < min)) {
      set_error(id + " must be more than " + min + " and less than " + max + " characters", index);
      return;
    }
    set_error("", index);
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
        <TextTitle text="Sign in to Gear" variant="subtitle2" />
      </div>
      <div className="m-auto mt-9 max-w-[540px]">
        <form id="signin" onSubmit={e => handleSignIn(e)}>
          {listInput.map((input, index) => (
            <InputType
              key={index}
              className="mt-6 h-16"
              data={input}
              index={index}
              isRequired
              err={error[index]}
              onBlur={onBlur}
            />
          ))}
          <div className="mt-6 mb-10 cursor-pointer text-right text-[16px] text-[#4D4C4C]">Forgot password</div>
          <PrimaryButton className="h-[42px]" text="Sign in" />
        </form>
        <div className="mt-12 text-center">
          <div className="relative">
            <p className="text-[16px] text-[#4D4C4C]">Or Sign in with</p>
            <div className="absolute top-[50%] w-[35%] border-t border-[#cccccc]"></div>
            <div className="absolute top-[50%] right-0 w-[35%] border-t border-[#cccccc]"></div>
          </div>
          <div className="m-auto mt-10 mb-16 flex max-w-[200px] justify-between">
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

export default Signin;
