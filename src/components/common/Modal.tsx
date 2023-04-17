import { useState, useEffect } from "react";
import ReactModal from "react-modal";
import { twMerge } from "tailwind-merge";

interface Props {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  shouldCloseOnOverlayClick?: boolean;
  className?: string;
  children?: JSX.Element[] | JSX.Element;
}

ReactModal.setAppElement("#root");

const Modal = ({ isOpen, setOpen, shouldCloseOnOverlayClick, children, className }: Props) => {
  if (!isOpen) {
    return null;
  }

  const [animation, setAnimation] = useState<boolean>(false);

  useEffect(() => {
    setAnimation(isOpen);
  }, [isOpen]);
  // console.log(animation);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setOpen(false)}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      overlayClassName="fixed top-0 z-50 flex items-end h-full w-full tablet:items-center justify-center bg-[#0000004D]"
      className={twMerge(
        className,
        `relative z-50 flex flex-col justify-center rounded-t-md border-0 border-none bg-white p-8 text-text-8 opacity-100 transition-all duration-500 ease-linear tablet:mx-8 tablet:rounded-md tablet:transition-none ${
          animation ? "translate-y-0" : ""
        }`,
      )}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
