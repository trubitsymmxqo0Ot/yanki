declare module '*.module.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg' {
  import React from 'react';
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module "*.css";
declare module "*.scss";

declare module "*.json" {
  //eslint-disable-next-line
  const value: any;
  export default value;
}