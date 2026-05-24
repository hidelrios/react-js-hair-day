import { createElement, type JSX } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const textVariants = cva("font-sans text-gray-100", {
  variants: {
    variant: {
      "title-lg": "text-[32px]/[24px] font-bold",
      "title-md": "text-[16px]/[24px] font-bold",
      "title-sm": "text-[14px]/[20px] font-bold",
      "text-md": "text-[16px]/[24px] font-regular",
      "text-sm": "text-[14px]/[20px] font-regular",
    },
    defaultVariants: {
      variant: "text-md",
    }
  },

});

interface TextProps extends VariantProps<typeof textVariants> {
    as?: keyof JSX.IntrinsicElements;
    children?: React.ReactNode;
    className?: string;
}

export default function Text({ as = "span", variant, children, className, ...props }: TextProps) {
  return createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props
    },
    children);
}