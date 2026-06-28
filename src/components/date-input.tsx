import { cva, type VariantProps } from "class-variance-authority";
import React, { useRef } from "react";
import Icon from "./icon";
import Calendar from "../assets/icons/calendar-blank.svg?react";
import CaretDown from "../assets/icons/caret-down.svg?react";

const dateInputWrapperVariants = cva(`
  cursor-pointer rounded-lg border border-solid border-gray-500 bg-gray-700 flex items-center justify-center w-full h-14 px-4 gap-3`
)

const dateInputVariants = cva(`
  cursor-pointer outline-none bg-transparent text-gray-200 text-sm w-full
  [&::-webkit-calendar-picker-indicator]:hidden
  `
)

interface DateInputProps extends VariantProps<typeof dateInputVariants>,
  Omit<React.ComponentProps<"input">, "size" | "disabled"> {

}
export default function DateInput({ className, ...props }: DateInputProps) {

  return (
    <div className={dateInputWrapperVariants({ className })}>
      <div className="flex items-center w-full gap-3">
        <Icon svg={Calendar} className="fill-yellow size-5" />
        <input type="date" className={dateInputVariants({ className })} {...props} />
        <Icon svg={CaretDown} className="fill-gray-400 size-5 ml-auto" />
      </div>

    </div>
  )
}