import { CarjamVehicleResponse, CreateCarOfferRequest } from "apis/carOffer/carOffer.model";
import { IconClose } from "assets/images";
import { InputType, Modal, PrimaryButton, Radio } from "components";
import { useAuth } from "hooks/useAuth";
import { useCreateCarOffer } from "queries/carOfferQueries";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { Subset } from "types/utils";

interface Props {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  setSuccess: (open: boolean) => void;
  carInfo: CarjamVehicleResponse;
  // onSubmit: (request: Subset<CreateCarOfferRequest>) => void;
  // onCarOfferCreated: () => void
}

const CarInformationModal = ({ isOpen, setIsOpen, carInfo, setSuccess }: Props) => {
  // const [showSelectCarModal, setShowSelectCarModal] = useState(false);
  const { mutate: createCarOffer } = useCreateCarOffer();
  const { user } = useAuth();

  const [carOfferRequest, setCarOfferRequest] = useState<Subset<CreateCarOfferRequest>>();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setCarOfferRequest({
        ...carOfferRequest,
        seller: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
      });
    }
  }, [user]);

  const disabledState = useMemo(() => {
    switch (step) {
      case 1:
        return carOfferRequest?.carjamVariantIndex == null;
      case 2:
        return carOfferRequest?.mileage == null;
      case 3:
        return (
          carOfferRequest?.seller?.firstName == null ||
          carOfferRequest?.seller?.lastName == null ||
          carOfferRequest?.seller?.email == null
        );
    }
  }, [step, carOfferRequest]);

  const renderTitle = () => {
    switch (step) {
      case 1:
        return "Select your vehicle";
      case 2:
      case 3:
        return "Enter your information";
      default:
        return "";
    }
  };

  const renderDescription = () => {
    switch (step) {
      case 1:
        return "Please select the vehicle information that best matches your car.";
      case 2:
        return "Please enter your information.";
      case 3:
        return "We will send you an offer by email";
      default:
        return "";
    }
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="mb-6">
            {carInfo?.valuation.variants.map((item, index) => (
              <Radio
                key={index}
                className="border-b-[0.5px] border-text-3 py-6 last:border-b-0"
                label={`${item.year} ${item.make} ${item.family} ${item.model}`}
                id={index.toString()}
                isChecked={carOfferRequest?.carjamVariantIndex === index}
                onChange={() => setCarOfferRequest({ ...carOfferRequest, carjamVariantIndex: index })}
              />
            ))}
          </div>
        );
      case 2:
        return (
          <div className="mb-6">
            <InputType
              className="mt-6 h-16"
              data={{
                type: "inputText",
                label: "What's the current mileage?",
                placeholder: "E.g: 10000",
                id: "mileage",
                typeInput: "text",
              }}
              onChange={(id, value) => {
                setCarOfferRequest({
                  ...carOfferRequest,
                  mileage: typeof value === "string" ? parseInt(value) : value,
                });
              }}
            />
          </div>
        );
      case 3:
        return (
          <div className="mb-6">
            <div className="flex gap-3">
              <InputType
                className="h-16"
                containerClassName="flex-1"
                data={{
                  type: "inputText",
                  label: "First name",
                  id: "firstName",
                  typeInput: "text",
                }}
                value={carOfferRequest?.seller?.firstName}
                onChange={(id, value) => {
                  setCarOfferRequest({
                    ...carOfferRequest,
                    seller: {
                      ...carOfferRequest?.seller,
                      firstName: typeof value === "string" ? value : value?.toString(),
                    },
                  });
                }}
              />
              <InputType
                className="h-16"
                containerClassName="flex-1"
                data={{
                  type: "inputText",
                  label: "Last name",
                  id: "lastName",
                  typeInput: "text",
                }}
                value={carOfferRequest?.seller?.lastName}
                onChange={(id, value) => {
                  setCarOfferRequest({
                    ...carOfferRequest,
                    seller: {
                      ...carOfferRequest?.seller,
                      lastName: typeof value === "string" ? value : value?.toString(),
                    },
                  });
                }}
              />
            </div>
            <InputType
              className="mt-6 h-16"
              data={{
                type: "inputText",
                label: "Email",
                id: "email",
                typeInput: "text",
              }}
              value={carOfferRequest?.seller?.email}
              onChange={(id, value) => {
                setCarOfferRequest({
                  ...carOfferRequest,
                  seller: { ...carOfferRequest?.seller, email: typeof value === "string" ? value : value?.toString() },
                });
              }}
            />
          </div>
        );
    }
  };

  const onPressBack = () => {
    if (step !== 1) {
      setStep(step - 1);
    } else {
      setIsOpen(false);
    }
  };

  const onPressContinue = () => {
    if (step !== 3) {
      setStep(step + 1);
    } else {
      if (!carOfferRequest) return;
      setIsLoading(true);
      onSubmitInfo(carOfferRequest);
    }
  };

  const onSubmitInfo = (request: Subset<CreateCarOfferRequest>) => {
    if (
      request.carjamVariantIndex == null ||
      request.mileage == null ||
      request.seller?.email == null ||
      request.seller?.firstName == null ||
      request.seller?.lastName == null
    ) {
      return;
    }

    createCarOffer(
      {
        vinId: carInfo.vin,
        carjamVariantIndex: request.carjamVariantIndex,
        mileage: request.mileage,
        seller: {
          email: request.seller.email,
          firstName: request.seller.firstName,
          lastName: request.seller.lastName,
        },
      },
      {
        onSuccess: data => {
          // console.log(data);
          setIsOpen(false);
          // toast.success("Offer created");
          setSuccess(true);
        },
        onError: () => {
          toast.error("Create car offer failed");
        },
      },
    );
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      // translate-y-[600px] tablet:translate-y-0
      className={`w-[700px] translate-y-[600px] tablet:translate-y-0`}
      isOpen={isOpen}
      setOpen={setIsOpen}
      shouldCloseOnOverlayClick={false}
    >
      <div className="relative">
        <div className="absolute right-0 cursor-pointer rounded-[50%] p-1 hover:bg-text-2 " onClick={handleCloseModal}>
          <IconClose />
        </div>
        <p className="mb-6 text-lg font-bold">{renderTitle()}</p>
        <p className="mb-8 text-text-8">{renderDescription()}</p>
        {renderContent()}
        <div className="flex flex-row gap-3">
          <PrimaryButton type="outline" text={"Back"} className="w-auto flex-1 border-0 px-6" onClick={onPressBack} />
          <PrimaryButton
            type="primary"
            text="Continue"
            className="w-auto flex-1 px-10"
            disabled={disabledState}
            loading={isLoading}
            onClick={onPressContinue}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CarInformationModal;
