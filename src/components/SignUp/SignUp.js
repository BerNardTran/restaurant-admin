import React from "react";
import SignUpLeft from "./SignUpLeft/SignUpLeft";
import SignUpRight from "./SignUpRight/SignUpRight";

const SignUp = () => {
  return (
    <div className="flex h-[1000px]">
      <div className="w-2/5">
        <SignUpLeft />
      </div>
      <div className="w-3/5 h-screen">
        <label className="text-5xl font-semibold absolute w-[600px] h-[100px] top-28 right-52">Welcome to my restaurant</label>
        <SignUpRight/>
      </div>
    </div>
  );
};

export default SignUp;
