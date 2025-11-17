import Link from "next/link";
import { image } from "../constants/image";
import NavBar from "../components/NavBar";

export default function BecomeMemberPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="relative min-h-screen pt-[72px]">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image.heroBg.src})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-[calc(100vh-72px)] flex items-center justify-center px-4 py-8 md:py-12">
          {/* Become A Member Form Card - Large White Overlay */}
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-12 md:p-16">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-12 text-left">
              Become A Member
            </h1>

            {/* Form - Only Three Input Fields */}
            <form className="space-y-6 mb-8">
              {/* Full Name Input */}
              <div>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-5 py-4 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 text-base focus:outline-none focus:border-gray-400 transition-colors"
                />
              </div>

              {/* Phone Number Input */}
              <div>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full px-5 py-4 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 text-base focus:outline-none focus:border-gray-400 transition-colors"
                />
              </div>

              {/* Address Input */}
              <div>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full px-5 py-4 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 text-base focus:outline-none focus:border-gray-400 transition-colors"
                />
              </div>
            </form>

            {/* Log In Link - At Bottom, Centered */}
            <div className="text-center text-base text-black mt-12 pt-8">
              Are You A Personnel?{" "}
              <Link href="/login" className="text-[#D00002] font-semibold underline hover:no-underline">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

