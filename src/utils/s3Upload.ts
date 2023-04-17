import { DeleteObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { CarImageRequest } from "apis/carOffer/carOffer.model";
import { MediaProps } from "apis/configs/types/common";
import { CarPhotoRequest, InputCarImage } from "pages/AddPhotoPage/data";
import { baseCarPhotoRequest } from "pages/AddPhotoPage/data";
const { VITE_S3URL, VITE_ACCESS_KEY_ID, VITE_SECERT_ACCESS_KEY } = import.meta.env;
const client = new S3Client({
  region: "ap-southeast-2",
  credentials: {
    accessKeyId: VITE_ACCESS_KEY_ID,
    secretAccessKey: VITE_SECERT_ACCESS_KEY,
  },
});

const Bucket = "gear-nz";

const S3Url = VITE_S3URL;

const uploadAvatar = async (userId?: string, imageUris?: string[]) => {
  try {
    await Promise.all([
      imageUris?.map(async (imageUri, index) => {
        const res = await fetch(imageUri);
        const blob = await res.blob();
        return client.send(
          new PutObjectCommand({
            Body: blob,
            Bucket: Bucket,
            Key: `profile-pic/${userId ?? ""}-avatar-${index}`,
            ContentType: blob.type,
            ACL: "public-read",
          }),
        );
      }),
    ]);
    return imageUris?.map((_, index) => {
      return {
        name: `${userId ?? ""}-avatar-${index}`,
        path: `${S3Url}profile-pic/${userId ?? ""}-avatar-${index}`,
        position: index,
      };
    });
  } catch (error) {
    console.log(error);
  }
};
const uploadFile = async (imageUrl: string, userId?: string) => {
  try {
    const res = await fetch(imageUrl);
    const blob = await res.blob();
    return client.send(
      new PutObjectCommand({
        Body: blob,
        Bucket: Bucket,
        Key: `profile-pic/${userId ?? ""}-avatar`,
        ContentType: blob.type,
        ACL: "public-read",
      }),
    );
  } catch (error) {
    console.log(error);
  }
};
const uploadListCarImage = async (userId?: string, offerCarId?: string, listCar?: CarImageRequest[] | MediaProps[]) => {
  try {
    await Promise.all([
      listCar?.map(async car => {
        if (car.path) {
          const res = await fetch(car.path);
          const blob = await res.blob();
          return client.send(
            new PutObjectCommand({
              Body: blob,
              Bucket: Bucket,
              Key: `seller/${userId}/car-${offerCarId}/${car.name}`,
              ContentType: blob.type,
              ACL: "public-read",
            }),
          );
        }
      }),
    ]);

    return listCar?.map(car => {
      // baseCarPhotoRequest[car.keyCar as keyof CarPhotoRequest] = car.path
      //   ? `${S3Url}seller/${userId}/car-${offerCarId}/${car.name}`
      //   : "";
      return{
        ...car, path: car.path? `${S3Url}seller/${userId}/car-${offerCarId}/${car.name}`:""
      }
    });
  } catch (error) {
    console.log(error);
  }
};
const uploadConditionCarImage = async (userId?: string, carOfferId?: string, listImage?: MediaProps[]) => {
  try {
    await Promise.all([
      listImage?.map(async image => {
        const res = await fetch(image.path);
        const blob = await res.blob();
        return client.send(
          new PutObjectCommand({
            Body: blob,
            Bucket: Bucket,
            Key: `seller/${userId}/car-${carOfferId}/condition/${image.name}`,
            ContentType: blob.type,
            ACL: "public-read",
          }),
        );
      }),
    ]);

    return listImage?.map(image => {
      return { ...image, path: `${S3Url}seller/${userId}/car-${carOfferId}/condition/${image.name}` };
    });
  } catch (error) {
    console.log(error);
  }
};
// const uploadStory = async (userId?: string, videoUri?: string) => {
//   try {
//     if (!videoUri) return;
//     const res = await fetch(videoUri);
//     const body = await res.blob();

//     const uniqueString = Date.now();
//     await client.send(
//       new PutObjectCommand({
//         Body: body,
//         Bucket: Bucket,
//         Key: `stories/${userId ?? ""}-${uniqueString}`,
//         ContentType: body.type,
//         ACL: "public-read",
//       }),
//     );
//     return {
//       name: `stories/${userId ?? ""}-${uniqueString}`,
//       path: `${S3Url}stories/${userId ?? ""}-${uniqueString}`,
//     };
//   } catch (error) {
//     console.log("upload error", error);
//   }
// };

// export const deleteStory = (name: string) => {
//   try {
//     (async () =>
//       await client.send(
//         new DeleteObjectCommand({
//           Bucket: Bucket,
//           Key: name,
//         }),
//       ))();
//   } catch (error) {
//     // Do something if failed to prevent unused s3 image
//     console.log(error);
//   }
// };

// const uploadChatImages = async (chatId: string, imageUris?: string[]) => {
//   try {
//     const imageName = uuid.v4() as string;
//     // TODO: Find out why images are increased in size
//     await Promise.all([
//       imageUris?.map(async imageUri => {
//         const res = await fetch(imageUri);
//         const blob = await res.blob();
//         return client.send(
//           new PutObjectCommand({
//             Body: blob,
//             Bucket: Bucket,
//             Key: `chats/${chatId}/${imageName}`,
//             ContentType: blob.type,
//             ACL: "public-read",
//           }),
//         );
//       }),
//     ]);
//     return imageUris?.map((_uri, _index) => {
//       return {
//         name: imageName,
//         path: `${S3Url}chats/${chatId}/${imageName}`,
//       };
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const uploadGroupChatAvatar = async (imageUri: string) => {
//   const imageName = uuid.v4() as string;
//   try {
//     const res = await fetch(imageUri);
//     const blob = await res.blob();
//     await client.send(
//       new PutObjectCommand({
//         Body: blob,
//         Bucket: Bucket,
//         Key: `chat-avatar/${imageName}`,
//         ContentType: blob.type,
//         ACL: "public-read",
//       }),
//     );

//     return {
//       name: `${imageName}`,
//       path: `${S3Url}chat-avatar/${imageName}`,
//     };
//   } catch (error) {
//     console.log(error);
//   }
// };

// const uploadShort = async (userId?: string, videoUri?: string) => {
//   try {
//     if (!videoUri) return;
//     const res = await fetch(videoUri);
//     const body = await res.blob();

//     const uniqueString = Date.now();
//     await client.send(
//       new PutObjectCommand({
//         Body: body,
//         Bucket: Bucket,
//         Key: `shorts/${userId ?? ""}-${uniqueString}`,
//         ContentType: body.type,
//         ACL: "public-read",
//       }),
//     );
//     return {
//       name: `shorts/${userId ?? ""}-${uniqueString}`,
//       path: `${S3Url}shorts/${userId ?? ""}-${uniqueString}`,
//     };
//   } catch (error) {
//     console.log("upload error", error);
//   }
// };

// const uploadShortCover = async (userId?: string, coverUri?: string) => {
//   try {
//     if (!coverUri) return;
//     const res = await fetch(coverUri);
//     const body = await res.blob();

//     const uniqueString = Date.now();
//     await client.send(
//       new PutObjectCommand({
//         Body: body,
//         Bucket: Bucket,
//         Key: `short-covers/${userId ?? ""}-${uniqueString}`,
//         ContentType: body.type,
//         ACL: "public-read",
//       }),
//     );
//     return {
//       name: `short-covers/${userId ?? ""}-${uniqueString}`,
//       path: `${S3Url}short-covers/${userId ?? ""}-${uniqueString}`,
//     };
//   } catch (error) {
//     console.log("upload error", error);
//   }
// };

// const uploadShortNew = async (userId?: string) => {
//   try {
//     const files = [] as string[];
//     const result = await RNFS.readDir(RNFS.TemporaryDirectoryPath);
//     result.forEach(file => {
//       if (file.name.includes("short-upload")) {
//         files.push(file.path);
//       }
//     });

//     if (!files || files.length === 0) return;
//     const uniqueString = Date.now();

//     await Promise.all(
//       files.sort().map(async (file, index) => {
//         const res = await fetch(file);
//         const body = await res.blob();
//         const fileIndex = index === 0 ? ".m3u8" : `${index - 1}.ts`;
//         return client.send(
//           new PutObjectCommand({
//             Body: body,
//             Bucket: Bucket,
//             Key: `shorts/${userId ?? ""}-${uniqueString}/short-upload${fileIndex}`,
//             ContentType: body.type,
//             ACL: "public-read",
//           }),
//         );
//       }),
//     );

//     await Promise.all(files.map(file => RNFS.unlink(file)));

//     return {
//       name: `shorts/${userId ?? ""}-${uniqueString}`,
//       path: `${S3Url}shorts/${userId ?? ""}-${uniqueString}/short-upload.m3u8`,
//     };

//     // const uniqueString = Date.now();
//     // await client.send(
//     //   new PutObjectCommand({
//     //     Body: body,
//     //     Bucket: Bucket,
//     //     Key: `shorts/${userId ?? ''}-${uniqueString}`,
//     //     ContentType: body.type,
//     //     ACL: 'public-read',
//     //   }),
//     // );
//     // return {
//     //   name: `shorts/${userId ?? ''}-${uniqueString}`,
//     //   path: `${S3Url}shorts/${userId ?? ''}-${uniqueString}`,
//     // };
//   } catch (error) {
//     console.log("upload error", error);
//   }
// };

export {
  uploadAvatar,
  uploadFile,
  uploadListCarImage,
  uploadConditionCarImage,
  // uploadGroupChatAvatar,
  // uploadChatImages,
  // uploadStory,
  // uploadShort,
  // uploadShortNew,
  // uploadShortCover,
};
