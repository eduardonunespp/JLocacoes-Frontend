import { FileUtils } from "../utils";

export const createImage = async (url: string) => {
  return await new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", () => resolve(image));
    image.setAttribute("crossOrigin", "anonymous");
    image.src = url;
  });
};

export const cropImage: any = async ({ url, croppedArea }: any) => {
  const image = await createImage(url);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = croppedArea.width;
  canvas.height = croppedArea.height;

  if (ctx) {
    ctx.drawImage(
      image as CanvasImageSource,
      croppedArea.x,
      croppedArea.y,
      croppedArea.width,
      croppedArea.height,
      0,
      0,
      canvas.width,
      canvas.height
    );
  }

  return await new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve({
          file: FileUtils.blobToFile(blob, "any_filename.jpg"),
          url: URL.createObjectURL(blob),
        });
      }
    }, "image/jpeg");
  });
};
