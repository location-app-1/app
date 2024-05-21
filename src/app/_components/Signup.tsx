import { SignUp } from "@clerk/nextjs";

export default function Signup() {
  return (
        <div className="flex flex-1 justify-center items-center w-full h-full">
            <SignUp path="/sign-up" />
        </div>
  );
}