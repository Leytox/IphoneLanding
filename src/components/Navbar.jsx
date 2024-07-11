import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width items-center justify-between">
        <img src={appleImg} width={20} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav, id) => {
            return (
              <div
                key={id}
                className="px-5 text-xl cursor-pointer text-gray hover:text-white transition-all"
              >
                {nav}
              </div>
            );
          })}
        </div>
        <div className="flex items-baseline gap-12">
          <img src={searchImg} alt="Search" width={20} />
          <img src={bagImg} alt="Bag" width={20} />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
