import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const cardVariants = cva(
  `rounded-lg border border-solid border-gray-600 bg-gray-800`,
  {
    variants: {
      size: {
        none: "",
        md: "w-full h-48 p-5",
      }
    },
    defaultVariants: {
      size: "md",
    },
  }

)

interface CardProps extends VariantProps<typeof cardVariants>, React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}


export default function Card(
  { as = "div", size, children, className, ...props }: CardProps
) {
  return React.createElement(
    as,
    {
      className: cardVariants({ size, className }),
      ...props
    }, children);
}