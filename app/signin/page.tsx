"use client";

import Image from "next/image";
import becomeMemberImage from "../assets/images/becomemember.png";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-white pt-[72px]">
      <div className="relative min-h-[calc(100vh-72px)]">
        {/* Top Half - Image Background */}
        <div className="absolute top-0 left-0 right-0 h-1/2">
          <Image
            src={becomeMemberImage}
            alt="Sign In"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Bottom Half - White Background */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white"></div>

        {/* Form Card - Overlays both sections */}
        <div className="relative z-10 min-h-[calc(100vh-72px)] flex items-center justify-center px-4 py-8 md:py-12">
          <div className="max-4xl-mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 md:p-10">
              {/* Title */}
              <h1 className="text-3xl md:text-[24px] font-anton font-bold text-black mb-8 text-center">
                SIGN IN{" "}
                <span className="text-[20px] font-normal text-gray-900">
                  (Personnel only)
                </span>
              </h1>

              {/* Form */}
              <form className="space-y-5 mb-8">
                {/* Email Input */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 bg-gray-50 text-black placeholder-gray-400 text-sm focus:outline-none focus:border-gray-300 focus:bg-white transition-colors"
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1.5">Password</label>
                  <input
                    type="password"
                    placeholder="xxxxxxxx"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 bg-gray-50 text-black placeholder-gray-400 text-sm focus:outline-none focus:border-gray-300 focus:bg-white transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#D00002] hover:bg-[#B00002] text-white font-semibold py-3.5 px-6 rounded-full transition-colors duration-200 text-base"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
