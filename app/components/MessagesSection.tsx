import Image from "next/image";
import Link from "next/link";
import powerWealthImg from '../assets/images/power-wealth.svg'; 

export default function MessagesSection() {
  return (
    <section className="flex flex-col md:flex-row min-h-[60vh] bg-black text-white py-6 sm:py-8 items-center justify-center px-3 sm:px-4 md:px-0">
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center items-center sm:items-start md:pl-[8vw] font-s w-full md:w-auto h-full mb-6 sm:mb-8 md:mb-0 px-2 sm:px-0">
        <span className="text-xs sm:text-[13px] md:text-[14px]">Listen to life-transforming</span>
        <h2 className="text-[1.8rem] min-[375px]:text-[2.2rem] sm:text-[2.8rem] md:text-[64px] font-extrabold m-0 tracking-wide leading-tight md:leading-none text-center sm:text-left">MESSAGES</h2>
        <span className="text-xs sm:text-[15px] md:text-[16px] mb-4 sm:mb-6 md:mb-8 text-center sm:text-left">From the altar of grace..</span>
        <Link href="/messages" className="bg-[#E50914] border-[#FF5A5C] border-[1px] text-white rounded-full px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 font-semibold text-xs sm:text-[15px] md:text-[16px] cursor-pointer shadow-md inline-block hover:bg-[#d00813] transition">
          OPEN MESSAGEs
        </Link>
      </div>
      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center w-full md:w-auto h-full">
        <div className="rounded-[20px] sm:rounded-[24px] md:rounded-[32px] shadow-2xl p-3 sm:p-4 md:p-6 flex items-center font-[satoshi] justify-center w-full max-w-[240px] sm:max-w-xs md:max-w-none">
          <Image 
            src={powerWealthImg} 
            alt="messages" 
            width={260} 
            height={260}   
            className="rounded-[16px] sm:rounded-[20px] md:rounded-[28px] object-cover w-full h-auto max-w-[240px] sm:max-w-[260px] md:max-w-[360px]"
          />
        </div>
      </div>
    </section>
  );
} 