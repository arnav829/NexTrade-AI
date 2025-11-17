import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseconfigurations/config";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import bgImage from "../assets/login-bg.jpg";
import leftBg from "../assets/left-bg.jpg";

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
    <div className="flex h-screen text-white">
      <div
        className="w-1/3 relative flex flex-col p-10 shadow-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${leftBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col h-full">
          <h1 className="text-2xl font-bold mb-12">Nextrade AI</h1>

          <div className="flex flex-col flex-1 justify-center items-center gap-6">
            <div className="text-9xl">
              <i className="bx bx-user-circle"></i>
            </div>

            <h2 className="text-xl font-semibold">Sign In</h2>

            <button
              onClick={signIn}
              className="flex items-center justify-center gap-2 w-56 px-4 py-3 border border-gray-500
                rounded-lg bg-white text-gray-800 font-medium hover:bg-gray-100 transition cursor-pointer"
            >
              <FcGoogle size={22} />
              Login with Google
            </button>
          </div>
        </div>
      </div>

      <div
        className="w-2/3 flex flex-col relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-transparent"></div>

        <div className="relative z-10 h-full overflow-y-auto p-12 flex items-center">
          <div className="max-w-lg text-left space-y-6">
            <h1 className="text-4xl font-extrabold">
              Empowering Smarter Trading
            </h1>

            <p className="text-lg leading-relaxed">
              Nextrade AI combines the power of artificial intelligence with advanced market
              insights to help you make smarter, faster, and more confident trading decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
