import { MdClose } from "react-icons/md";

import Link from "next/link";

// 1. Configuration for directions
const slideConfig = {
  left: {
    container: "top-0 left-0 h-full w-[80%] max-w-[300px] md:max-w-[400px]",
    transformOpen: "translate-x-0",
    transformClose: "-translate-x-full",
  },
  right: {
    container: "top-0 right-0 h-full w-[100%] max-w-[700px]",
    transformOpen: "translate-x-0",
    transformClose: "translate-x-full",
  },
  top: {
    container: "top-0 left-0 w-full h-[40%] ",
    transformOpen: "translate-y-0",
    transformClose: "-translate-y-full",
  },
  bottom: {
    container: "bottom-0 left-0 w-full h-[80%] ",
    transformOpen: "translate-y-0",
    transformClose: "translate-y-full",
  },
};

function SlideBar({
  isOpen,
  onClose,
  direction = "left",
  children,
  title = "Menu",
  className = "",
}) {
  // Get the config for the requested direction
  const config = slideConfig[direction] || slideConfig.left;

  return (
    <>
      {/* 1. Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-60 bg-[#00000076] transition-opacity duration-300 ${
          isOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        onClick={onClose}
      />
      {/* 2. The Sliding Drawer */}
      <div
        className={`fixed z-70 bg-white transition-transform duration-300 ease-in-out ${slideConfig.left || (slideConfig.right && "shadow-[0_25px_50px_-12px_black]")} ${config.container} ${isOpen ? config.transformOpen : config.transformClose} ${className} `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 text-[.8rem] font-semibold md:text-[1.4rem] lg:text-lg">
          <Link className="logo bg-gold/25 p-2" href={"/"}>
            {title}
          </Link>
          <button
            onClick={onClose}
            className="rounded-full bg-gray-200 p-1 text-lg hover:bg-gray-100 md:p-3 md:text-2xl"
          >
            <MdClose />
          </button>
        </div>

        {/* Content Body */}
        <nav className="h-[calc(100%-64px)] overflow-y-auto">{children}</nav>
      </div>
    </>
  );
}

export default SlideBar;
