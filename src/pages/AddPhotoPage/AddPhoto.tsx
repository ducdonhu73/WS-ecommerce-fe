import { AddVehiclePhotosRequest, CarImageArea, CarImageRequest } from "apis/carOffer/carOffer.model";
import { MediaProps } from "apis/configs/types/common";
import { ScanQrImage } from "assets/images";
import { DriverSideCornerImage } from "assets/images";
import { PrimaryButton } from "components";
import { useGetCarOfferDetail } from "queries/carOfferQueries";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useParams } from "react-router";
import { uploadListCarImage } from "utils/s3Upload";

import UploadCar from "./components/UploadCar";
import { InputCarImage, baseCarPhotoRequest, listCarInput, listTyre } from "./data";
import { CarPhotoRequest } from "./data";

interface AddPhotoProps {
  setCompletedStep: (value: boolean) => void;
  setVehiclePhotoPayload: (value: AddVehiclePhotosRequest) => void;
}

function AddPhoto({ setCompletedStep, setVehiclePhotoPayload }: AddPhotoProps) {
  const [carPhotoPayload, setCarPhotoPayload] = useState<CarPhotoRequest>(baseCarPhotoRequest);
  const { id } = useParams();
  const { data: offer } = useGetCarOfferDetail(id ?? "", { enabled: !!id });

  const handleChangeCarUpload = (value: string, key: keyof CarPhotoRequest, name: string) => {
    console.log(key);
    setCarPhotoPayload({ ...carPhotoPayload, [key]: { path: value, name } });
  };

  const handleDeleteCarPhoto = (key: keyof CarPhotoRequest) => {
    setCarPhotoPayload({ ...carPhotoPayload, [key]: { path: "", name: "" } });
  };

  useEffect(() => {
    const isCompleted = Object.values(carPhotoPayload).every(value => value.path && value.name);
    setCompletedStep(isCompleted);
  }, [carPhotoPayload]);

  useEffect(() => {
    const carImages: CarImageRequest[] = [];
    let damages: MediaProps[] = [];

    for (const [key, value] of Object.entries(carPhotoPayload)) {
      if (!value.path || !value.name) continue;
      if (key === "damages") {
        damages = [{ path: value.path, name: value.name }];
      } else {
        carImages.push({ area: key as CarImageArea, path: value.path, name: value.name });
      }
    }
    setVehiclePhotoPayload({
      carImages,
      damages,
    });
    // const listCarImageUpload = Object.entries(carPhotoPayload).map(([key, value]) => {
    //   return { area: key, path: value.path, name: value.name } as CarImageRequest;
    // });
    // setVehiclePhotoPayload({
    //   carImages: structuredClone(listCarImageUpload).splice(0, 9),
    //   damages: structuredClone(listCarImageUpload).splice(9, 1),
    // });
  }, [carPhotoPayload]);

  return (
    <div>
      <div className="mb-6 mt-44 text-lg font-bold">Exterior & Interior</div>
      <div className="flex justify-between">
        <div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-9 tablet:grid-cols-3">
            <UploadCar
              keyCar="front_left"
              carImage={DriverSideCornerImage}
              description="Driver side corner"
              className="tablet:col-span-2 tablet:row-span-2 tablet:min-h-[469px] tablet:max-w-[469px] tablet:gap-y-16"
              headText="Click here to add photo"
              onChange={handleChangeCarUpload}
              onDelete={handleDeleteCarPhoto}
            />
            {listCarInput.map((carInput, index) => {
              return (
                <UploadCar
                  key={carInput.keyCar}
                  {...carInput}
                  onChange={handleChangeCarUpload}
                  onDelete={handleDeleteCarPhoto}
                />
              );
            })}
          </div>
          <div className="mb-6 mt-12 text-lg font-bold">
            Tyres <span className="font-normal text-text-8">( Optional )</span>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-9 tablet:grid-cols-3">
            {listTyre.map((tyre, index) => {
              return <UploadCar key={tyre.keyCar} {...tyre} onChange={handleChangeCarUpload} />;
            })}
          </div>
          <div className="mb-6 mt-12 text-lg font-bold">
            Damage <span className="font-normal text-text-8">( Optinal )</span>
          </div>
          <UploadCar
            keyCar="damage"
            className="mb-32"
            description="Add photo"
            carImage=""
            onChange={handleChangeCarUpload}
            onDelete={handleDeleteCarPhoto}
          />
          {/* <div className="mb-6 text-text-8">
            {"By selecting 'See my valuation', you are agreeing to the "}
            <span className="font-bold text-primary">Gear terms of use.</span>
          </div> */}
          {/* <div className="mb-32 flex gap-x-5">
            <PrimaryButton className="max-w-[106px]" type="outline" text="Go back" />
            <PrimaryButton
              className="max-w-[205px]"
              type="primary"
              text="Continue"
              onClick={handleUploadListCarImage}
            />
          </div> */}
        </div>
        <div className="hidden laptop:block">
          <QRCode
            className="rounded-lg border border-dashed border-text-3 p-7"
            style={{ height: "317px", maxWidth: "317px", width: "100%" }}
            value={window.location.href}
          />
          <img className="mx-auto my-7" src={ScanQrImage} alt="" />
          <div className="text-lg text-text-9">Scan here if you want add photo by phone</div>
        </div>
      </div>
    </div>
  );
}

export default AddPhoto;
