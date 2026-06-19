import Illustration from "../../assets/images/Group 136.png";

const FeatureSection = () => (
  <section className="w-full bg-white pt-[100px] pb-[100px] overflow-hidden">
    <div className="max-w-[1200px] mx-auto px-[16px]">

      <div className="grid lg:grid-cols-[500px_620px] items-center gap-x-[100px]">

        {/* LEFT */}
        <div>

          <span
            className="
              inline-flex items-center
              px-5 py-2.5
              rounded-full
              bg-[#CFEFFF]
              text-[#1B3B66]
              text-[14px]
              font-bold
              mb-7
            "
          >
            Global Reach
          </span>

          <h2
            className="
              w-[480px]
              text-[#11142D]
              text-[52px]
              font-normal
              leading-[1.15]
              tracking-[-0.01em]
              font-rounded
              whitespace-nowrap
            "
          >
            <span className="block">The First Fully Global Job</span>
            <span className="block">Board, Anywhere, Ever</span>
          </h2>

          <p
            className="
              mt-7
              max-w-[480px]
              text-[#6B7088]
              text-[17px]
              leading-[1.85]
              font-normal
            "
          >
            RemoteRecruit connects candidates with opportunities around the
            world. With today&rsquo;s remote-first workforce, you need to be
            able to find the best jobs and the best people for them,
            wherever they may be.
          </p>

        </div>

        {/* RIGHT */}
        <div className="flex justify-end">

          <img
            src={Illustration}
            alt="RemoteRecruit platform"
            className="
              w-[620px]
              h-auto
              object-contain
              select-none
            "
            draggable={false}
          />

        </div>

      </div>

    </div>
  </section>
);

export default FeatureSection;