"use client";

import { InputHTMLAttributes, forwardRef, useState } from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", icon, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
      <div className="relative">
        <i
          className={cn(
            "fi text-lg absolute left-4 top-1/2 -translate-y-1/2 text-gray-400",
            icon
          )}
        ></i>
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          className={cn(
            "py-3 pl-12 pr-4 rounded-lg outline-none w-full",
            className
          )}
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            <i
              className={cn(
                "fi text-lg absolute right-4 top-1/2 -translate-y-1/2 text-gray-400",
                showPassword ? "fi-rr-unlock" : "fi-rr-lock"
              )}
            ></i>
          </button>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
