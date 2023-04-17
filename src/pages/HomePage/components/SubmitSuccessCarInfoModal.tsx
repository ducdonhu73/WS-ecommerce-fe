import { EmailConfirm, IconClose } from "assets/images";
import { Modal, TextTitle } from "components";

interface Props {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const SubmitSuccessCarInfoModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Modal className="max-w-[841px]" isOpen={isOpen} setOpen={setIsOpen}>
      <div className="relative">
        <div className="absolute right-0 w-3" onClick={() => setIsOpen(false)}>
          <IconClose />
        </div>
        <div className="m-auto max-w-[440px]">
          <img src={EmailConfirm} alt="img will send email" />
        </div>
        <div className="m-auto mb-[70px] mt-20 text-center">
          <TextTitle
            variant="subtitle2"
            text="We have received your car information. You will get our offer via email as soon as we finish valuating it."
          />
        </div>
      </div>
    </Modal>
  );
};
