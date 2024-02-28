declare module "*.png" {
  const value: string;
  export default value as ImageSourcePropType;
}

declare module "*.jpg" {
  const value: string;
  export default value as ImageSourcePropType;
}
