import { FaGoogle } from "react-icons/fa";

function Login() {
    return (
        <div className="min-h-screen bg-[#f6f5f3] flex flex-col justify-center items-center px-4">
            <h1 className="text-3xl font-bold mb-8">
                <span className="font-signature text-4xl">Wegic</span>
            </h1>

            <div className="w-full max-w-md bg-white shadow-lg rounded-lg px-6 py-8 flex flex-col gap-4">
                {/* Google Login */}
                <button className="flex items-center justify-center gap-2 text-gray-700 font-semibold border border-gray-300 px-4 py-3 rounded-md shadow-sm hover:bg-gray-100 transition">
                    <FaGoogle className="text-lg" />
                    Continue with Google
                </button>

                <div className="relative text-center my-2">
                    <hr className="border-t border-gray-300" />
                    <span className="absolute top-[-12px] bg-white px-2 text-sm text-gray-500 left-1/2 -translate-x-1/2">or</span>
                </div>

                {/* Email & Password */}
                <input
                    type="email"
                    placeholder="Email"
                    className="border border-black px-4 py-3 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border px-4 py-3 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="text-right text-sm text-gray-600 hover:underline cursor-pointer">
                    Forgot Password?
                </div>

                <button className="bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-900 transition">
                    Login / Sign up
                </button>
            </div>

            {/* Terms */}
            <p className="text-xs text-gray-500 mt-4 text-center max-w-sm">
                By creating an account you agree with our <span className="text-blue-600 cursor-pointer">Terms of Service</span>, <span className="text-blue-600 cursor-pointer">Privacy Policy</span>
            </p>

            {/* Cute bottom characters (optional) */}
            <div className="mt-8 flex gap-4">
                <img src="/cute1.png" alt="char1" className="w-12 h-12" />
                <img src="/cute2.png" alt="char2" className="w-12 h-12" />
                <img src="/cute3.png" alt="char3" className="w-12 h-12" />
            </div>
        </div>
    );
}

export default Login;
