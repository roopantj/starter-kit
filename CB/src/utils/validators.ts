const inRange = (input: string, min: number, max: number) => {
  // TODO Q1
  if (input.length >= min && input.length <= max) return true;
  return false;
};

export { inRange };
