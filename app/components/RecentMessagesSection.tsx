import Image from "next/image";
import { Search, Download, Play } from "lucide-react";
import healingMeetingImg from '../assets/images/Rectangle 722.png';

export default function RecentMessagesSection() {
  const messages = [
    {
      id: 1,
      title: "Overcoming Discouragement (Part 2)",
      preacher: "Apostle Joseph Ibrahim",
      date: "Aug 31st, '25"
    },
    {
      id: 2,
      title: "Overcoming Discouragement (Part 2)",
      preacher: "Apostle Joseph Ibrahim",
      date: "Aug 24th, '25"
    },
    {
      id: 3,
      title: "Overcoming Discouragement (Part 2)",
      preacher: "Apostle Joseph Ibrahim",
      date: "Aug 17th, '25"
    },
    {
      id: 4,
      title: "Overcoming Discouragement (Part 2)",
      preacher: "Apostle Joseph Ibrahim",
      date: "Aug 31st, '25"
    },
    {
      id: 5,
      title: "Overcoming Discouragement (Part 2)",
      preacher: "Apostle Joseph Ibrahim",
      date: "Aug 24th, '25"
    },
    {
      id: 6,
      title: "Overcoming Discouragement (Part 2)",
      preacher: "Apostle Joseph Ibrahim",
      date: "Aug 17th, '25"
    },
    {
      id: 7,
      title: "Overcoming Discouragement (Part 2)",
      preacher: "Apostle Joseph Ibrahim",
      date: "Aug 31st, '25"
    },
    {
      id: 8,
      title: "Overcoming Discouragement (Part 2)",
      preacher: "Apostle Joseph Ibrahim",
      date: "Aug 24th, '25"
    },
    {
      id: 9,
      title: "Overcoming Discouragement (Part 2)",
      preacher: "Apostle Joseph Ibrahim",
      date: "Aug 17th, '25"
    },
    {
      id: 10,
      title: "Overcoming Discouragement (Part 2)",
      preacher: "Apostle Joseph Ibrahim",
      date: "Aug 31st, '25"
    },
    {
      id: 11,
      title: "Overcoming Discouragement (Part 2)",
      preacher: "Apostle Joseph Ibrahim",
      date: "Aug 24th, '25"
    },
    {
      id: 12,
      title: "Overcoming Discouragement (Part 2)",
      preacher: "Apostle Joseph Ibrahim",
      date: "Aug 17th, '25"
    },
    {
      id: 13,
      title: "Overcoming Discouragement (Part 2)",
      preacher: "Apostle Joseph Ibrahim",
      date: "Aug 31st, '25"
    },
    {
      id: 14,
      title: "Overcoming Discouragement (Part 2)",
      preacher: "Apostle Joseph Ibrahim",
      date: "Aug 24th, '25"
    },
    {
      id: 15,
      title: "Overcoming Discouragement (Part 2)",
      preacher: "Apostle Joseph Ibrahim",
      date: "Aug 17th, '25"
    },
    {
      id: 16,
      title: "Overcoming Discouragement (Part 2)",
      preacher: "Apostle Joseph Ibrahim",
      date: "Aug 31st, '25"
    },
    {
      id: 17,
      title: "Overcoming Discouragement (Part 2)",
      preacher: "Apostle Joseph Ibrahim",
      date: "Aug 24th, '25"
    },
    {
      id: 18,
      title: "Overcoming Discouragement (Part 2)",
      preacher: "Apostle Joseph Ibrahim",
      date: "Aug 17th, '25"
    }
  ];

  return (
    <section className="w-full bg-white py-4 sm:py-6 md:py-8 lg:py-12 px-3 sm:px-4 md:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 sm:mb-6 md:mb-8 lg:mb-8 gap-3 sm:gap-4 lg:gap-4">
          <h2 className="font-anton font-normal text-xl sm:text-2xl md:text-3xl lg:text-[40px] text-black leading-[112%] tracking-normal capitalize">Recent Messages</h2>
          
          {/* Search Bar */}
          <div className="relative w-full sm:w-full md:w-[400px] lg:w-[590px] h-[48px] sm:h-[56px] md:h-[64px] lg:h-[72px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5" />
            <input
              type="text"
              placeholder="Search by message title, program, or preacher"
              className="w-full h-full pl-10 sm:pl-12 lg:pl-10 pr-4 bg-[#F8F8F8] border border-[#C5C5C5] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base lg:text-sm"
            />
          </div>
        </div>

        {/* Messages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-3">
          {messages.map((message) => (
            <div key={message.id} className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm mx-auto sm:max-w-none sm:mx-0 lg:w-[380px] lg:mx-0 h-auto sm:h-[450px] lg:h-[500px]">
              {/* Banner Section - Using the healing meeting image */}
              <div className="relative h-[250px] sm:h-[300px] lg:h-[350px] overflow-hidden">
                {/* Background Image */}
                <Image 
                  src={healingMeetingImg} 
                  alt="Healing Meeting" 
                  fill
                  className="object-cover sm:object-cover lg:object-contain"
                />
              </div>

              {/* Message Details */}
              <div className="p-3 sm:p-4 lg:p-4 h-auto sm:h-[150px] lg:h-[150px] flex flex-col justify-between">
                <div className="mb-3 sm:mb-0 lg:mb-0">
                  <h4 className="font-anton font-normal text-sm sm:text-base lg:text-[16px] text-black mb-2 sm:mb-1 lg:mb-1 leading-[112%] tracking-normal">{message.title}</h4>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center lg:flex-row lg:justify-between lg:items-center gap-1 sm:gap-0 lg:gap-0 mb-3 sm:mb-3 lg:mb-3 w-full sm:w-auto lg:w-[350px] h-auto sm:h-4 lg:h-4">
                    <span className="font-satoshi font-medium text-xs sm:text-sm lg:text-[14px] text-gray-600 leading-[112%] tracking-normal">{message.preacher}</span>
                    <span className="font-satoshi font-medium text-xs sm:text-sm lg:text-[14px] text-gray-500 leading-[112%] tracking-normal text-right">{message.date}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-lg px-2 sm:px-3 lg:px-3 py-2 sm:py-2 lg:py-2 flex items-center justify-center gap-1 font-semibold transition-colors text-xs sm:text-sm lg:text-sm">
                    <Download className="w-3 h-3 sm:w-3 sm:h-3 lg:w-3 lg:h-3" />
                    <span className=" sm:inline lg:inline">DOWNLOAD</span>
                    {/* <span className="sm:hidden lg:hidden">DL</span> */}
                  </button>
                  <button className="flex-1 border border-black text-black hover:bg-black hover:text-white rounded-lg px-2 sm:px-3 lg:px-3 py-2 sm:py-2 lg:py-2 flex items-center justify-center gap-1 font-semibold transition-colors text-xs sm:text-sm lg:text-sm">
                    <Play className="w-3 h-3 sm:w-3 sm:h-3 lg:w-3 lg:h-3" />
                    <span className=" sm:inline lg:inline">PLAY</span>
                    {/* <span className="sm:hidden lg:hidden">▶</span> */}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
