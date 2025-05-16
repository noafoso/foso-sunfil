"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";

interface ActionTooltipProps {
  label: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  className?: string;
  classNameArrow?: string;
}

export const TooltipHeader = ({
  label,
  children,
  side,
  align,
  className,
  classNameArrow,
}: ActionTooltipProps) => {
  const StyledArrow = TooltipPrimitive.Arrow;
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          sideOffset={2}
          className={cn(
            "w-fit py-4 px-4 data-[state=closed]:fade-out-0 rounded-2xl bg-white shadow-lg",
            className
          )}
        >
          {label}
          <TooltipPrimitive.Arrow
            width={20}
            height={12}
            className={cn(
              "fill-[#ffffff] drop-shadow-2xl shadow-2xl ",
              classNameArrow
            )}
          />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
