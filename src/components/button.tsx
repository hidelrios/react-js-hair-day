import { cva, type VariantProps } from "class-variance-authority";
import Text from "./text";
import type { ComponentProps } from "react";

export const buttonVariants = cva(
  `flex items-center justify-center`,
  {
    variants: {
      variant: {
        primary: "bg-yellow border-2 border-transparent rounded-lg transition-colors hover:border-yellow-light",
      },
      size: {
        md: "w-full h-14",
      },
      disabled: {
        true: "bg-yellow-dark opacity-50 hover:pointer-events-none",
      },
      handling: {
        true: "cursor-pointer",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
      handling: false,
    }
  }

)
interface ButtonProps
  extends Omit<ComponentProps<"button">, "size" | "disabled">,
  VariantProps<typeof buttonVariants> {
  handling?: boolean;
}
export default function Button({
  variant,
  size,
  className,
  disabled,
  handling,
  children,
  ...props }: ButtonProps) {
  return (
    <button className={buttonVariants({ className, size, variant, disabled, handling })}
      {...props}>
      <Text variant="title-sm" className="text-gray-900">
        {children}
      </Text>
    </button>
  )
}