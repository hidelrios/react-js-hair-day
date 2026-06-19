import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import Icon from "./icon";
import Calendar from "../assets/icons/calendar-blank.svg?react";
import CaretDown from "../assets/icons/caret-down.svg?react";

const dateInputWrapperVariants = cva(`
  rounded-lg border border-solid border-gray-600 bg-gray-800 inline-flex items-center w-full h-14 px-4 gap-3`
)

const dateInputVariants = cva(`
    [&::-webkit-calendar-picker-indicator]:hidden
  `
)

interface DateInputProps extends VariantProps<typeof dateInputVariants>,
  Omit<React.ComponentProps<"input">, "size" | "disabled"> {

}
export default function DateInput({ className, ...props }: DateInputProps) {
  return (
    <div className={dateInputWrapperVariants({ className })}>
      <Icon svg={Calendar} className="fill-yellow" />
      <input type="date" className={dateInputVariants({ className })} {...props} />
      <Icon svg={CaretDown} className="fill-gray-400" />
    </div>
  )
}