import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseconfigurations/config";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import bgImage from "../assets/login-bg.jpg";

export default function Login({ setUser }) {
  const navigate = useNavigate();

  async function signIn() {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setUser(user);
      navigate("/dashboard");
    } catch (err) {
      console.error("Error during sign-in:", err);
    }
  }

  return (
    <div
      className="flex flex-col md:flex-row h-screen text-white bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-full md:w-1/3 flex flex-col p-6 md:p-10">
        <h1 className="text-xl md:text-2xl font-bold mb-6 md:mb-12">Nextrade AI</h1>

        <div className="flex flex-col flex-1 justify-center items-center gap-4 md:gap-6">
          <div className="text-7xl md:text-9xl">
            <i className="bx bx-user-circle"></i>
          </div>

          <h2 className="text-lg md:text-xl font-semibold">Sign In</h2>

         <button
  onClick={signIn}
  className="
    flex items-center justify-center gap-2
    w-36 px-3 py-2 text-sm
    md:w-56 md:px-4 md:py-3 md:text-base
    border border-gray-500 rounded-lg
    bg-white text-gray-800 font-medium
    hover:bg-gray-100 transition cursor-pointer
  "
>
  <FcGoogle size={20} className="md:size-[22px]" />
  Login with Google
</button>

        </div>
      </div>

      <div className="relative z-10 w-full md:w-2/3 p-6 md:p-12 flex items-center">
        <div className="max-w-lg space-y-4 md:space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Empowering Smarter Trading
          </h1>

          <p className="text-base md:text-lg leading-relaxed">
            Nextrade AI combines the power of artificial intelligence with
            advanced market insights to help you make smarter, faster, and more
            confident trading decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
