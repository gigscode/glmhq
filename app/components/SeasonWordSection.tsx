import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import devotionalImg from '../assets/images/daily-devotional.svg';
import testimonyImg from '../assets/images/testimonies.svg';
import AltarCall from '../assets/images/altar-call.svg';
import AuxanoImg from '../assets/images/auxano.svg';
import sharpThreshingImg from '../assets/images/sharp-threshing.png';

export default function SeasonWordSection() {
  return (
    <section className="w-full flex flex-col items-center py-6 sm:py-8 md:py-12 px-3 sm:px-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2B1818] mb-4 sm:mb-6 md:mb-10 font-satoshi text-center px-2">A word for the season</h2>
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 w-full max-w-5xl justify-center px-2 sm:px-0">
        {/* Daily Devotional Card */}
        <div className="bg-[#F3F3F3] rounded-2xl shadow-md flex-1 flex flex-col overflow-hidden min-w-0 max-w-full md:min-w-[320px] md:max-w-[500px]">
          <div className="h-40 sm:h-48 w-full relative">
            <Image
              src={devotionalImg}
              alt="Daily Devotional"
              fill
              className="object-cover rounded-t-2xl"
              priority
            />
          </div>
          <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2B1818] font-satoshi mb-2">Daily Devotional</h3>
            <p className="text-xs sm:text-sm md:text-base text-[#2B1818] mb-3 sm:mb-4 md:mb-6">Start your day in a lovely way, fellowship with God through our 3-minutes inspiring devotionals.</p>
            <a
              href="https://t.me/aletheiadailydevotional"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black rounded-full px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 font-medium text-black hover:bg-black hover:text-white transition self-start text-xs sm:text-sm md:text-base inline-block text-center"
            >
              FOLLOW DAILY DEVOTIONAL
            </a>
          </div>
        </div>
        {/* Testimonies Card */}
        <div className="bg-[#F3F3F3] rounded-2xl shadow-md flex-1 flex flex-col overflow-hidden min-w-0 max-w-full md:min-w-[320px] md:max-w-[500px]">
          <div className="h-40 sm:h-48 w-full relative">
            <Image
              src={testimonyImg}
              alt="Testimonies"
              fill
              className="object-cover rounded-t-2xl"
              priority
            />
          </div>
          <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2B1818] font-satoshi mb-2">Testimonies</h3>
            <p className="text-xs sm:text-sm md:text-base text-[#2B1818] mb-3 sm:mb-4 md:mb-6">God is doing wondrous things among us through his word from the mouth of his servant.</p>
            <button className="border border-black rounded-full px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 font-medium text-black hover:bg-black hover:text-white transition self-start text-xs sm:text-sm md:text-base">OPEN TESTIMONIES</button>
          </div>
        </div>
      </div>
      {/* New Section: Call to Decision */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-10 md:mt-16 w-full max-w-5xl px-2 sm:px-0">
        {/* Image - appears first on mobile, second on desktop */}
        <div className="flex-1 flex items-center justify-center w-full order-1 md:order-2">
          <div className="overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[32px] w-full sm:max-w-xs md:max-w-md">
            <Image
              src={AltarCall}
              alt="Altar Call"
              width={351}
              height={280}
              className="object-cover w-full h-auto grayscale"
            />
          </div>
        </div>
        {/* Text - appears second on mobile, first on desktop */}
        <div className="flex-1 flex flex-col w-full order-2 md:order-1 px-2 sm:px-0">
          <h3 className="font-anton font-normal text-[28px] sm:text-[32px] leading-[120%] text-[#1E1E1E] mb-3 sm:mb-4 md:text-3xl lg:text-4xl md:font-satoshi md:font-extrabold md:leading-tight text-left">
            HAVE YOU GIVEN YOUR LIFE TO JESUS?
          </h3>
          <p className="font-satoshi font-normal text-sm leading-[140%] text-black mb-4 sm:mb-5 md:mb-6 max-w-md md:text-base">
            Do you know the trumpet can sound anytime from now? God loves you so much and his arms are wide open to you..
          </p>
          <Button variant="destructive" className="rounded-full px-6 py-3 font-semibold text-sm md:text-base shadow-md w-fit">
            <Link href="/make-decision">
              MAKE A DECISION FOR GOD
            </Link>
          </Button>
        </div>
      </div>
      {/* AUXANO Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-10 md:mt-16 w-full max-w-5xl bg-[#F3F3F3] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 mx-2 sm:mx-0">
        {/* Left Side: Image */}
        <div className="flex-1 w-full sm:max-w-xs md:max-w-md mb-4 md:mb-0">
          <Image
            src={AuxanoImg}
            alt="Auxano"
            width={320}
            height={320}
            className="rounded-xl sm:rounded-2xl w-full h-auto"
          />
        </div>
        {/* Right Side: Text and Button */}
        <div className="flex-1 flex flex-col max-w-lg w-full px-2 sm:px-0">
          <p className="text-lg font-big-shoulders font-bold text-[#170000] mb-4 sm:mb-5 md:mb-6 md:text-xl md:font-satoshi leading-[140%]">
            Do you desire spiritual growth? Intimacy with God? Spiritual fervency? AUXANO is the avenue God has designed for your growth..
          </p>
          <Button variant="destructive" asChild className="rounded-full px-6 py-3 font-semibold text-sm md:text-base shadow-md w-fit">
            <Link href="/auxano-centers" rel="noopener noreferrer">
              REGISTER FOR AUXANO
            </Link>
          </Button>
        </div>
      </div>
      {/* Vision Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-10 md:mt-16 w-full max-w-5xl px-2 sm:px-0">
        {/* Left Side: Image */}
        <div className="flex-1 flex items-center justify-center w-full sm:max-w-xs md:max-w-md mb-4 md:mb-0">
          <div className="relative w-full aspect-square sm:aspect-auto sm:h-48 md:h-96 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden">
            <Image
              src={sharpThreshingImg}
              alt="Sharp Threshing Instrument"
              fill
              className="object-cover rounded-xl sm:rounded-2xl md:rounded-3xl"
            />
          </div>
        </div>
        {/* Right Side: Text and Button */}
        <div className="flex-1 flex flex-col items-center sm:items-start justify-center w-full px-2 sm:px-0">
          <h3 className="font-anton font-normal text-[28px] sm:text-[32px] leading-[130%] tracking-normal text-[#1E1E1E] mb-3 sm:mb-4 md:text-[40px] lg:text-[48px] md:leading-[120%] text-center sm:text-left">
            Behold, I will make thee a new sharp threshing instrument having teeth: thou shalt thresh the mountains, and..
          </h3>
          <p className="text-sm md:text-base text-black mb-4 sm:mb-5 md:mb-6 text-center sm:text-left">God has given us a vision..</p>
          <button className="border border-black rounded-full px-6 py-3 font-semibold text-black hover:bg-black hover:text-white transition text-sm md:text-base w-fit">

            <Link href="/about" rel="noopener noreferrer">
              READ THE VISION
            </Link>


          </button>
        </div>
      </div>
    </section>
  );
}