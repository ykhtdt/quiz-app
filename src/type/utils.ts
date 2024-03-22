export type StringifyProperties<T> = {
  [K in keyof T]: string;
};

export type NumberToString<T extends number> = `${T}`;
