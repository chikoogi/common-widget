declare module "*.svg?react" {
  const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default value;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}

declare module "*.otf";

declare module "*.style.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
import { Theme as MuiTheme } from "@mui/material/styles";

declare module "*.module.css";

declare module "@emotion/react" {
  export interface Theme extends MuiTheme {}
}
