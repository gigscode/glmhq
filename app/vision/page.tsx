"use client";

import Image from "next/image";
import visionHeroImage from "../assets/images/auxano_centers_header.png";
import glmLogo from "../assets/images/glm-logo.png";

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-white pt-[72px]">
      {/* Hero Section with Background Image */}
      <div className="relative h-[400px] md:h-[500px]">
        <Image
          src={visionHeroImage}
          alt="Vision - Where God Is Taking Us"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Hero Text */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-anton font-bold text-white text-center px-4 uppercase leading-tight">
            WHERE GOD IS<br />TAKING US
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Quote Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-8">
            &ldquo;SOUGHT OUT, A CITY NOT FORSAKEN..&rdquo;
          </h2>
        </div>

        {/* Organizational Chart */}
        <div className="bg-white">
          <div className="flex flex-col items-center">
            {/* GLM Logo and Title */}
            <div className="mb-8 text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 relative">
                <Image
                  src={glmLogo}
                  alt="Gospel Labour Ministry"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="bg-[#6B46C1] text-white px-8 py-3 rounded-full inline-block">
                <span className="font-bold text-sm md:text-base">GOSPEL LABOUR MINISTRY</span>
              </div>
            </div>

            {/* Church Branch */}
            <div className="mb-8">
              <div className="bg-[#5EABA7] text-white px-6 py-3 rounded-full inline-flex items-center gap-2">
                <span className="font-bold text-sm md:text-base">CHURCH</span>
                <span className="text-xl">🏛️</span>
              </div>
            </div>

            {/* Departments Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8 w-full max-w-6xl">
              {/* Music */}
              <div className="flex justify-center">
                <div className="bg-[#E07B39] text-white px-4 py-2 rounded-full inline-flex items-center gap-2 text-sm">
                  <span className="font-semibold">MUSIC</span>
                  <span>🎵</span>
                </div>
              </div>

              {/* Movie */}
              <div className="flex justify-center">
                <div className="bg-[#2B9EB3] text-white px-4 py-2 rounded-full inline-flex items-center gap-2 text-sm">
                  <span className="font-semibold">MOVIE</span>
                  <span>🎬</span>
                </div>
              </div>

              {/* Agric */}
              <div className="flex justify-center">
                <div className="bg-[#4CAF50] text-white px-4 py-2 rounded-full inline-flex items-center gap-2 text-sm">
                  <span className="font-semibold">AGRIC</span>
                  <span>🌾</span>
                </div>
              </div>

              {/* Hospital */}
              <div className="flex justify-center">
                <div className="bg-[#E57373] text-white px-4 py-2 rounded-full inline-flex items-center gap-2 text-sm">
                  <span className="font-semibold">HOSPITAL</span>
                  <span>💊</span>
                </div>
              </div>

              {/* Education */}
              <div className="flex justify-center">
                <div className="bg-[#4FC3F7] text-white px-4 py-2 rounded-full inline-flex items-center gap-2 text-sm">
                  <span className="font-semibold">EDUCATION</span>
                  <span>📚</span>
                </div>
              </div>

              {/* Healing Inn */}
              <div className="flex justify-center">
                <div className="bg-[#FF9E80] text-white px-4 py-2 rounded-full inline-flex items-center gap-2 text-sm">
                  <span className="font-semibold">HEALING INN</span>
                  <span>🏥</span>
                </div>
              </div>

              {/* Tech */}
              <div className="flex justify-center">
                <div className="bg-[#5C6BC0] text-white px-4 py-2 rounded-full inline-flex items-center gap-2 text-sm">
                  <span className="font-semibold">TECH</span>
                  <span>💻</span>
                </div>
              </div>
            </div>

            {/* Bottom Row - Security, Dawrash City, Works */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl">
              {/* Security */}
              <div className="bg-[#6D4C41] text-white px-6 py-2 rounded-full inline-flex items-center gap-2">
                <span className="font-semibold text-sm">SECURITY</span>
                <span>🛡️</span>
              </div>

              {/* Dawrash City - Center */}
              <div className="bg-white border-2 border-black px-8 py-3 rounded-full">
                <span className="font-bold text-black text-base md:text-lg">DAWRASH<br />CITY</span>
              </div>

              {/* Works */}
              <div className="bg-[#EC407A] text-white px-6 py-2 rounded-full inline-flex items-center gap-2">
                <span className="font-semibold text-sm">WORKS</span>
                <span>🔧</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
