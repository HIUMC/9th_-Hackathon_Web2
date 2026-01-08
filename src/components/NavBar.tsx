import wallet from "../assets/material-symbols_wallet.svg";

const NavBar = () => {
  return (
    <div className="px-[48px] py-[20px] w-[1440px] border-b border-[#F4F6F8] bg-[#FFF]">
      <div className="flex items-center gap-[12px]">
        {/* 지갑 아이콘 */}
        <img src={wallet} alt="wallet" className="w-[32px] h-[32px] shrink-0 aspect-square" />

        {/* 로고 텍스트 */}
        <span className="text-main font-sans text-[28px] font-semibold leading-[150%] tracking-[-0.56px]">
          Pocket safe
        </span>
      </div>
    </div>
  );
};

export default NavBar;
