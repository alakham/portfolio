import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-semibold ring ring-offset-accent-400 transition-colors ",
  {
    variants: {
      variant: {
        default: "bg-accent-400 text-primary-950 hover:bg-accent-500 ",
        primary: "bg-accent-500 text-primary-900",
        outline:
          "border border-accent-500 bg-transparent text-primary-900 hover:bg-accent-500 hover:text-primary-100",
      },
      size: {
        default: "h-[2rem] px-3",
        md: "h-[2.5rem] px-1",
        lg: "h-[4rem] px-8 text-sm uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
