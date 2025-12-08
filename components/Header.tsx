import Image from "next/image";

const Header = () => {
  return (
    <nav className="w-full fixed top-0 z-100 bg-background flex justify-between items-center px-6 sm:px-10 md:px-16 lg:px-24 py-4 sm:py-5 md:py-6 shadow-xs">
      <h1 className="text-brown font-bold text-xl sm:text-2xl">FarFromHome</h1>

      <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
        <p className="hidden sm:block font-normal text-sm sm:text-base">Admin Panel</p>

        <Image
          src="/icons/profile.svg"
          width={38}
          height={38}
          alt="profile"
          className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10"
        />

        <Image
          src="/icons/logout.svg"
          width={38}
          height={38}
          alt="logout"
          className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10"
        />
      </div>
    </nav>
  );
};

export default Header;
