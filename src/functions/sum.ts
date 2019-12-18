export const sum = (a: number | undefined, b: number): number | string => {
  if (!a) return "user did not send correct input";
  return a + b;
};
