import type { ComponentProps } from "react";

interface IconProps extends ComponentProps<"svg"> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({svg: SvgComponent, ...props}: IconProps) {
  return <SvgComponent {...props} />;
}