export const blobToFile = (blob: Blob, fileName: string): File => {
  return new File([blob], fileName, {
    lastModified: new Date().getTime(),
    type: blob.type,
  });
};

export const fileToBlob = (file: File): Blob => {
  return new Blob([file], { type: file.type });
};

export const blobToBase64 = (blob: Blob): Promise<string | undefined> => {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => resolve(reader.result?.toString());
  });
};

export const fileToBase64 = async (file: File): Promise<string> => {
  return await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result) {
        resolve(reader.result as string);
      }
    };
    reader.onerror = (error) => reject(error);
  });
};

export const downloadBlob = (input: Blob, fileName: string) => {
  const source = URL.createObjectURL(input);
  const link = document.createElement("a");
  link.href = source;
  link.download = `${fileName}.pdf`;
  document.body.appendChild(link);
  link.click();
};
