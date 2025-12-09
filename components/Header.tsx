import Image from "next/image";

const Header = () => {
  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-12 py-3 shadow-xs">
      <h1 className="text-brown font-bold text-xl sm:text-2xl">FarFromHome</h1>

      <div className="flex items-center gap-4 sm:gap-6">
        <p className="hidden sm:block text-sm sm:text-base">Admin Panel</p>

        <Image
          src="/icons/profile.svg"
          alt="profile"
          width={40}
          height={40}
          className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10"
        />

        <Image
          src="/icons/logout.svg"
          alt="logout"
          width={40}
          height={40}
          className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10"
        />
      </div>
    </nav>
  );
};

export default Header;
