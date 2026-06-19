import FeeImg from "../../assets/images/Group 136@2x.png";

const FeatureFee = () => (
  <section className="w-full bg-white overflow-hidden">
    <div className="max-w-[1200px] mx-auto px-[16px]">
      <div className="grid grid-cols-1 lg:grid-cols-[620px_500px] items-center gap-x-[100px] gap-y-[60px]">

        {/* LEFT — illustration */}
        <div className="flex justify-center lg:justify-start order-2 lg:order-1">
          <img
            src={FeeImg}
            alt="Fee-Free Premium membership illustration"
            className="w-[620px] max-w-full h-auto object-contain select-none shrink-0"
            draggable={false}
          />
        </div>

        {/* RIGHT — text */}
        <div className="flex flex-col items-start order-1 lg:order-2">

          <span
            className="inline-flex items-center px-5 py-2.5 rounded-full
                       bg-[#CFEFFF] text-[#1B3B66] text-[14px] font-bold mb-7"
          >
            Actually Fee Free
          </span>

          <h2
            className="text-[#11142D] font-normal
                       text-[36px] md:text-[44px] lg:text-[52px]
                       leading-[1.15] tracking-[-0.01em]"
          >
            Fee-Free Forever
          </h2>

          <p
            className="mt-7 max-w-[480px] text-[#6B7088] text-[17px]
                       leading-[1.85] font-normal"
          >
            We don&apos;t charge you fees and we don&apos;t put up paywalls.
            We&apos;re the bridge that connects job opportunities with the best
            candidates, with no middleman involved.
          </p>

        </div>
      </div>
    </div>
  </section>
);

export default FeatureFee;
