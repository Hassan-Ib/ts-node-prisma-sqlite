export const Log = <T>(value: T) => {
  console.log(value);
  console.log(process.env.DATABASE_URL);
};
