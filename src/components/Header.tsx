import logo from "../assets/logo.png";
import search from "../assets/search.png";
import globe from "../assets/global.png";
import down from "../assets/down.png";
import location from "../assets/location.png";
import coloredDown from "../assets/colored-down.png";
import arrowDown from "../assets/arrow-down.png";
import bag from "../assets/bag.png";
import user from "../assets/user.png";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-black font-bold text-lg leading-6">
            <img src={logo} alt="logo icon" />
            Destinize
          </div>
          <div className="h-12 w-[530px] bg-[#F0F1F2] rounded-full flex items-center gap-2.5 px-[22px]">
            <img src={search} alt="search icon" width={16} height={16} />
            <input
              type="text"
              placeholder="Cari apapun disini..."
              className="w-full bg-transparent text-xs leading-none h-full text-[#9A9EA6] outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <img src={globe} alt="globe icon" width={20} height={20} />
            <div className="text-sm leading-none text-[#9A9EA6] flex items-center gap-1.5">
              Bahasa Indonesia{" "}
              <img src={down} alt="dropdown icon" width={16} height={16} />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#E3EBFD] rounded-full flex justify-center items-center">
              <img src={location} alt="location icon" width={20} height={20} />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xs leading-none text-[#9A9EA6]">Lokasi</div>
              <div className="text-base leading-none text-[#4475F2] font-bold flex items-center gap-1.5">
                Indonesia, Yogyakarta
                <img
                  src={coloredDown}
                  alt="colored dropdown icon"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-[#DFDFE0]" />
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-2.5">
          <nav>
            <ul className="flex items-center gap-10">
              <li className="text-[#9A9EA6] text-sm leading-none flex items-center gap-2">
                Gunung
                <img
                  src={arrowDown}
                  alt="dropdown arrow"
                  width={14}
                  height={14}
                />
              </li>
              <li className="text-[#9A9EA6] text-sm leading-none flex items-center gap-2">
                Pantai
                <img
                  src={arrowDown}
                  alt="dropdown arrow"
                  width={14}
                  height={14}
                />
              </li>
              <li className="text-[#9A9EA6] text-sm leading-none flex items-center gap-2">
                Kuliner
                <img
                  src={arrowDown}
                  alt="dropdown arrow"
                  width={14}
                  height={14}
                />
              </li>
              <li className="text-[#9A9EA6] text-sm leading-none flex items-center gap-2">
                Outbond
                <img
                  src={arrowDown}
                  alt="dropdown arrow"
                  width={14}
                  height={14}
                />
              </li>
              <li className="text-[#9A9EA6] text-sm leading-none flex items-center gap-2">
                Sejarah
                <img
                  src={arrowDown}
                  alt="dropdown arrow"
                  width={14}
                  height={14}
                />
              </li>
              <li className="text-[#9A9EA6] text-sm leading-none flex items-center gap-2">
                Edukasi
                <img
                  src={arrowDown}
                  alt="dropdown arrow"
                  width={14}
                  height={14}
                />
              </li>
              <li className="text-[#9A9EA6] text-sm leading-none flex items-center gap-2">
                Romantis
                <img
                  src={arrowDown}
                  alt="dropdown arrow"
                  width={14}
                  height={14}
                />
              </li>
              <li className="text-[#9A9EA6] text-sm leading-none flex items-center gap-2">
                Alam
                <img
                  src={arrowDown}
                  alt="dropdown arrow"
                  width={14}
                  height={14}
                />
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center w-12 h-12 bg-[#4475F2] rounded-full">
              <img src={bag} alt="bag icon" height={20} width={20} />
            </div>
            <div className="flex justify-center items-center w-12 h-12 bg-[#E3EBFD] rounded-full">
              <img src={user} alt="user icon" height={20} width={20} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
