import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const containerVariants = cva("mx-auto", {
  variants: {
    size: {
      none: "",
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
    }
  }
})
interface ContainerProps extends VariantProps<typeof containerVariants>, React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
}

export function Container({ as = "div", children, className, ...props }: ContainerProps) {
  return React.createElement(
    as,
    {
      className: containerVariants({ size: "md", className }),
      ...props
    },
    children
  );
}