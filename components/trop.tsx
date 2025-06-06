import { FaPhoneAlt, FaTrophy, FaRegCalendarAlt } from "react-icons/fa";

export default function Trop() {
  return (
    <section className="pt-0 pb-16  text-[#E1C5A0]">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Why book with <br className="md:hidden" />
        luxury adventure tour?
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
        {/* Feature 1 */}
        <div className="flex-1 flex flex-col items-center text-center max-w-xs">
          <FaPhoneAlt className="text-3xl mb-4" />
          <span className="font-bold text-lg mb-2">24/7 customer support</span>
          <span className="text-base text-[#E1C5A0] opacity-80">
            No matter the time zone, we're here to help.
          </span>
        </div>
        {/* Feature 2 */}
        <div className="flex-1 flex flex-col items-center text-center max-w-xs">
          <FaTrophy className="text-3xl mb-4" />
          <span className="font-bold text-lg mb-2">Earn rewards</span>
          <span className="text-base text-[#E1C5A0] opacity-80">
            Explore, earn, redeem, and repeat with our loyalty program.
          </span>
        </div>
        {/* Feature 3 */}
        <div className="flex-1 flex flex-col items-center text-center max-w-xs">
          <FaRegCalendarAlt className="text-3xl mb-4" />
          <span className="font-bold text-lg mb-2">Plan your way</span>
          <span className="text-base text-[#E1C5A0] opacity-80">
            Stay flexible with free cancellation and the option to reserve now and pay later at no additional cost.
          </span>
        </div>
      </div>
      {/* Login Card */}
      <div className="bg-[#E1C5A0] rounded-2xl max-w-2xl mx-auto py-12 px-6 flex flex-col items-center">
        <h3 className="text-3xl md:text-4xl font-bold text-[#003A56] mb-2 text-center">
          Ready to start your next adventure?
        </h3>
        <p className="text-[#003A56] mb-6 text-center">
          Explore our destinations and start your journey today!
        </p>
        <button className="bg-[#003A56] text-[#E1C5A0] rounded-md px-16 py-2 text-lg font-semibold transition hover:bg-[#01293c]">
          Book Now
        </button>
      </div>
    </section>
  );
}

