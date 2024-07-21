import acmeLogo from "@/assets/logo-acme.png";
import quantamLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div
          className="flex overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black, transparent)" }}
        >
          <div className="flex gap-14 flex-none">
            <Image src={acmeLogo} alt="Acme logo" className="logo-ticker-image" />
            <Image src={quantamLogo} alt="quantam logo" className="logo-ticker-image" />
            <Image src={echoLogo} alt="Echo logo" className="logo-ticker-image" />
            <Image src={celestialLogo} alt="celestial logo" className="logo-ticker-image" />
            <Image src={pulseLogo} alt="Pulse logo" className="logo-ticker-image" />
            <Image src={apexLogo} alt="Apex logo" className="logo-ticker-image" />
          </div>
        </div>
      </div>
    </div>
  );
};
