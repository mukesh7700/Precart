// declarations.d.ts
declare module "*.svg" {
    import { ReactComponent } from "svgr";
    const content: ReactComponent;
    export default content;
  }
  