import logo from "./image/profile-image.jpg";
import slack from "./svgs/slack.svg";
import Github from "./svgs/github.svg";
import LinkTree from "./components/LinkTree";
import Footer from "./components/Footer";
import ShareAvatar from "./svgs/share-avatar.svg";
import MobileAvatar from "./svgs/mobile-share-button.svg";

function App() {
  return (
    <div className="p-16">
      <div className="md:flex hidden justify-end">
        <img src={ShareAvatar} alt="" />
      </div>
      <div className="flex md:hidden justify-end">
        <img src={MobileAvatar} alt="" />
      </div>
      <div className="flex justify-center">
        <img
          src={logo}
          alt="profile__img"
          id="profile__img"
          className="rounded-[50%] w-[88px] h-[88px] align-middle"
        />
      </div>
      <p
        className=" text-#101828 text-center font-bold text-xl pt-6 pb-[56px]"
        id="twitter">
        boluwaduroh
      </p>
      <p
        className="hidden text-#101828 text-center font-bold text-xl pt-6 pb-[56px]"
        id="slack">
        Moboluwaduro
      </p>
      <div className="pb-8">
        <LinkTree />
      </div>
      <div className="flex justify-center gap-8 pt-6 pb-16">
        <img src={slack} alt="" />
        <img src={Github} alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
