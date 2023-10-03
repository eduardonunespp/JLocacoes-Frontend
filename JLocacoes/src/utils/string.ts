export const toTitleCase = (value: string) => {
  return value
    .toLowerCase()
    .replace(/(^|\s)\S/g, (firstLetter) => firstLetter.toUpperCase()); // https://medium.com/free-code-camp/title-case-a-sentence-in-javascript-929012c88574
};

export const formatProfileName = (name: string) => {
  const splitOnSpace = name.split(" ");

  const firstName = splitOnSpace[0];
  const lastName = splitOnSpace[splitOnSpace.length - 1];

  return toTitleCase(`${firstName} ${lastName}`);
};

export const removerNaoNumericos = (str: string) => str.replace(/\D/g, "");

const escapeRegExp = (str: string) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
};

export const replaceAll = (str: string, find: string, replace: string) => {
  return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
};

export const encodeBase64 = (data: string) => {
  return window.btoa(data);
};

export function getFirstCharacter(data: string) {
  return data.charAt(0);
}
