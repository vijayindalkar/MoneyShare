import { useNavigate } from "react-router-dom";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/Subheading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/ButtonNormal";
import { BottomWarning } from "../components/ButtonWarning";

export const Signin = () => {
  const Navigate = useNavigate();
  

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className=" rounded-lg bg-white w-80 text-center p-4 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            // onChange={(e) => {
            //   setUserName(e.target.value);
            // }}
            placeholder={"John"}
            label={"Email"}
          />
          <InputBox
            // onChange={(e) => {
            //   setLastName(e.target.value);
            // }}
            placeholder={"john@wick"}
            label={"Password"}
          />
          <div className="pt-4">
            <Button label={"Sign In"} />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
