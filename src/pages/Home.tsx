import hero from "../assets/hero.png";
import airplane from "../assets/airplane.svg";
import play from "../assets/play.png";
import axon from "../assets/axon.png";
import jetstar from "../assets/jetstar.png";
import expedia from "../assets/expedia.png";
import qantas from "../assets/qantas.png";
import alitalia from "../assets/alitalia.png";

const Home = () => {
  return (
    <>
      <section className="pt-16">
        <div className="container mx-auto">
          <div className="flex justify-between w-full">
            <div className="max-w-[658px]">
              <div className="text-[#4F7DF3] font-bold text-sm leading-none inline-flex gap-2 items-center bg-[#E5EDFF] py-2 px-5 rounded-full">
                <img
                  src={airplane}
                  alt="aeroplane emoji"
                  width={18}
                  height={18}
                />
                <div className="bg-[#4F7DF3] w-1.5 h-1.5 rounded-full" />
                Explore the wonderful indonesia!
              </div>
              <h2 className="mt-3 text-[#181E4B] text-[76px] leading-[89px] font-extrabold tracking--4">
                Liburan & nikmati
                <span className="text-[#4475F2]">tempat baru</span> di indonesia
              </h2>
              <p className="mt-[30px] text-[#5E6282] text-base leading-6 font-medium max-w-[477px]">
                Destinize membuat kamu selalu update terkait tempat liburan baru
                di Indonesia dengan mengikuti perkembangan para influencer di
                sosial media ✨
              </p>
              <div className="mt-[34px] flex items-center gap-10">
                <button className="text-white text-base leading-none font-bold bg-[#4475F2] px-6 py-5 rounded-xl shadow-lg shadow-[#4475F2]/25 max-w-[198px] w-full">
                  Mulai sekarang →
                </button>
                <div className="flex gap-4 items-center">
                  <div className="w-[50px] h-[50px] rounded-full border border-[#4475F2] flex justify-center items-center shadow-lg shadow-[#4475F2]/25">
                    <img
                      src={play}
                      alt="play icon"
                      width={14.42}
                      height={14.42}
                    />
                  </div>
                  <div className="text-[#686D77] font-bold text-[17px] leading-none">
                    Putar Demo
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src={hero} alt="hero image" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-24">
            <img src={axon} alt="platform 1" className="grayscale" />
            <img src={jetstar} alt="platform 1" className="grayscale" />
            <img src={expedia} alt="platform 1" className="grayscale" />
            <img src={qantas} alt="platform 1" className="grayscale" />
            <img src={alitalia} alt="platform 1" className="grayscale" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
