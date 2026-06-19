import { cva, cx, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const timeSelectVariants = cva(
  "w-auto py-2 px-5 rounded-lg border border-gray-600",
  {
    variants: {
      disabled: {
        true: "opacity-50 pointer-events-none",
        false: "cursor-pointer bg-gray-400 opacity-50 hover:bg-gray-500 border-gray-500 transition-colors",
      },
      selected: {
        true: "border-yellow ",
        false: "",
      },
    },
    defaultVariants: {
      disabled: true,
    },
  }
)

interface TimeSelectProps extends Omit<ComponentProps<"input">, "size">, VariantProps<typeof timeSelectVariants> {
  children?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
}

export function TimeSelect({ disabled, selected, children, ...props }: TimeSelectProps) {
  return (
    <label className={cx(timeSelectVariants({ disabled, selected }))}>
      <span className={selected ? "text-yellow" : "text-gray-300"}>
        {children}
      </span>
      <input value={props.value} {...props} type="radio" name="time" className="sr-only" />
    </label>
  );
}