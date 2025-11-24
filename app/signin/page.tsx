"use client";

import { image } from "../constants/image";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative min-h-screen pt-[72px]">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image.heroBg.src})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-[calc(100vh-72px)] flex items-center justify-center px-4 py-8 md:py-12">
          <div className="w-full max-w-2xl rounded-2xl bg-white p-12 shadow-2xl md:p-16">
            <h1 className="text-left font-anton text-4xl font-bold text-black md:text-5xl mb-12">
              SIGN IN{" "}
              <span className="text-[20px] font-normal text-gray-900">
                (Personnel only)
              </span>
            </h1>

            <form className="mb-8 space-y-6">
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-lg border border-gray-300 bg-white px-5 py-4 text-base text-black placeholder-gray-400 transition-colors focus:border-gray-400 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-lg border border-gray-300 bg-white px-5 py-4 text-base text-black placeholder-gray-400 transition-colors focus:border-gray-400 focus:outline-none"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="w-full rounded-lg bg-[#ff0000] px-5 py-4 text-base font-medium text-white transition-colors focus:outline-none"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

