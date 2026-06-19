import Illustration from "../../assets/images/Group 136.png";

const FeatureSection = () => {
  return (
    <section className="w-full bg-white py-[100px] overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6 lg:px-[60px]">

        {/*
          Grid: left 500px / right 520px, gap 40px, vertically centred.
          500px left column gives the heading exactly enough room to wrap:
            Line 1: "The First Fully Global Job"
            Line 2: "Board, Anywhere, Ever"
          at Poppins Medium 40px.
        */}
        <div className="flex items-center justify-center gap-[140px]">

          {/* ── LEFT ──────────────────────────────────────────────── */}
          <div className="w-[500px] flex-shrink-0">

            {/* Badge */}
            <span
              className="inline-flex items-center
                         py-[6px] px-[18px] rounded-full
                         bg-[#C4EDFF] text-[#2F4668]
                         text-[13px] font-semibold
                         mb-[20px]"
            >
              Global Reach
            </span>

            {/*
              Pixso specs (confirmed from panel):
              Font:   Poppins
              Weight: Medium (500)
              Size:   40px
              Color:  #11142D
              Line-height: ~1.2
              Width:  500px (full left column)
            */}
            <h2
              className="text-[#11152D] font-medium
                         text-[40px] leading-[1.2]
                         w-full
                         mb-0"
            >
              The First Fully Global Job Board, Anywhere, Ever
            </h2>

            {/*
              Paragraph
              Poppins Regular 16px, lh 1.8, color #73758B
            */}
            <p
              className="text-[#73758B] font-normal
                         text-[16px] leading-[1.8]
                         max-w-[420px] mt-[24px]"
            >
              RemoteRecruit connects candidates with opportunities around the
              world. With today&rsquo;s remote-first workforce, you need to be
              able to find the best jobs and the best people for them,
              wherever they may be.
            </p>

          </div>

          {/* ── RIGHT — illustration ───────────────────────────────── */}
          <div className="w-[600px] h-[387px] relative flex-shrink-0">
            <img
              src={Illustration}
              alt="RemoteRecruit dashboard illustration with candidate profiles"
              className="w-full max-w-[520px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
