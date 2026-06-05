import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "../lib/utils";
import Icon from "./icon";
import UserSquare from "../assets/icons/user-person.svg?react";

const textInputVariants = cva(
  "flex items-center gap-3 rounded-xl border transition-colors",
  {
    variants: {
      variant: {
        primary: `
          border-yellow-700
          bg-[#1E1F24]
          focus-within:border-yellow-500
        `,
      },
      size: {
        md: "w-full h-14 px-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface TextInputProps
  extends Omit<ComponentProps<"input">, "size">,
  VariantProps<typeof textInputVariants> { }

export default function TextInput({
  variant,
  size,
  className,
  ...props
}: TextInputProps) {
  return (
    <div className={cn(textInputVariants({ variant, size }), className)}>
      <Icon svg={UserSquare} className="fill-yellow" />
      <input
        className="
          flex-1
          bg-transparent
          outline-none
          text-gray-300
          placeholder:text-gray-500
        "
        {...props}
      />
    </div>
  );
}