import Image from "next/image";
import auxanoCentersHeader from "../assets/images/auxano_centers_header.png";
import eksuImage from "../assets/images/eksu.png";
import fpadoImage from "../assets/images/fpado.png";
import corpersImage from "../assets/images/corpers.png";

export default function AuxanoCentersPage() {
    const centers = [
        {
            name: "EKITI STATE UNIVERSITY (EKSU)",
            location: "lle-Eye Lecture Theatre, Ekiti State University, Ado-Ekiti, Nigeria",
            schedule: "Mondays & Thursdays",
            time: "5PM",
            image: eksuImage
        },
        {
            name: "FEDERAL POLYTECHNIC ADO-EKITI (MAIN CAMPUS)",
            location: "A2-005, Old SBS Building, Federal Polytechnic Main Campus, Ado-Ekiti, Nigeria",
            schedule: "Sundays, 4PM || Thursdays: 5PM",
            time: "5PM",
            image: fpadoImage
        },
        {
            name: "CORPER'S MISSION",
            location: "Ekiti Parapo Pavilion, New Iyin Road (Bank Road), Ado-Ekiti, Nigeria",
            schedule: "Tuesdays, Wednesdays, Thursdays",
            time: "8:45AM",
            image: corpersImage
        },
        {
            name: "COLLEGE OF NURSING (CONAD)",
            location: "The-Rock Tutorial Center, Beside SLOT, Adebayo, Ado-Ekiti, Nigeria.",
            schedule: "Thursdays",
            time: "5PM",
            image: eksuImage
        },
        {
            name: "FEDERAL UNIVERSITY OYE (IDO CAMPUS)",
            location: "Newly opened Lecture Hall 2, FUOYE, Ido Campus, Ido-Ekiti, Nigeria",
            schedule: "Mondays & Thursdays",
            time: "4:30PM",
            image: eksuImage
        },
        {
            name: "ADO-EKITI TOWNSHIP",
            location: "Upper Room (GLM Auditorium), Off Housing Road, Olora Layout, Adebayo, Ado Ekiti.",
            schedule: "Sundays",
            time: "8:00AM",
            image: eksuImage
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-[400px] md:h-[500px] pt-[72px]">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src={auxanoCentersHeader}
                        alt="Auxano Centers Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
                    <h1 className="font-anton text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-4">
                        TOWARDS SPIRITUAL
                    </h1>
                    <h2 className="font-anton text-4xl md:text-6xl lg:text-7xl text-[#00FF00] leading-tight mb-6">
                        GROWTH AND MATURITY
                    </h2>
                    <p className="font-inter text-sm md:text-base text-white uppercase tracking-wider max-w-2xl">
                        AUXANO IS AN ARM OF THE CHURCH DEDICATED TO MENTORING AND NURTURING
                    </p>
                </div>
            </section>

            {/* Centers Grid Section */}
            <section className="w-full px-4 py-12 md:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {centers.map((center, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Center Image */}
                                <div className="relative w-full h-48 bg-gray-200">
                                    <Image
                                        src={center.image}
                                        alt={center.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Card Content */}
                                <div className="p-6">
                                    {/* Center Name */}
                                    <h3 className="font-bold text-base md:text-lg text-black uppercase mb-4 leading-tight">
                                        {center.name}
                                    </h3>

                                    {/* Location */}
                                    <div className="flex items-start gap-2 mb-3">
                                        <svg
                                            className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-sm text-gray-700 leading-snug">
                                            {center.location}
                                        </p>
                                    </div>

                                    {/* Schedule */}
                                    <div className="flex items-start gap-2 mb-4">
                                        <svg
                                            className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-sm text-gray-700 leading-snug">
                                            <span className="font-semibold">{center.schedule}</span>
                                            {center.time && <span className="ml-1">{center.time}</span>}
                                        </p>
                                    </div>

                                    {/* Ask for Directions Button */}
                                    <button className="w-3/5 md:w-auto flex items-center justify-center gap-2 bg-white border-2 border-black text-black font-semibold py-2.5 px-4 rounded-full hover:bg-black hover:text-white transition-colors duration-200 whitespace-nowrap">
                                        <svg
                                            className="w-4 h-4 flex-shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                        <span className="text-sm">Ask for directions</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
