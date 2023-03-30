// Images module declaration

declare module "*.svg" {
  const value: any;
  export default value;
}
declare module "*.jpeg" {
  const value: any;
  export default value;
}
declare module "*.jpg" {
  const value: any;
  export default value;
}

declare module "*.png" {
  const value: any;
  export default value;
}
declare module "*.ico" {
  const value: any;
  export default value;
}
declare module "*.webp" {
  const value: any;
  export default value;
}
// CSS module declaration
// declare module "*.module.css";
declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module "*.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
