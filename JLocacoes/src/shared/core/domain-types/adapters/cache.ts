type GetStorageInput = {
  key: string;
};

type SetStorageInput<T> = {
  key: string;
  value: T;
};

type RemoveStorageInput = {
  key: string;
};

export type GetStorage = <T>(input: GetStorageInput) => T;
export type SetStorage = <T>(input: SetStorageInput<T>) => void;
export type RemoveStorage = (input: RemoveStorageInput) => void;
