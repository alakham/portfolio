import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-[3rem] rounded-md border border-white/10 focus:border-accent-500 font-light bg-primary-950 text-primary-100 px-4 py-5 text-base placeholder:text-primary-100 outline-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
