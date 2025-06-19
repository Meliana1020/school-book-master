import * as React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ label, error, className, ...props }, ref) => (
    <div className="mb-2">
      {label && (
        <label className="block mb-1 text-sm font-medium">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? "border-red-500" : "border-gray-300"} ${className ?? ""}`}
        {...props}
      />
      {error && (
        <div className="text-xs text-red-500 mt-1">{error}</div>
      )}
    </div>
  )
);
Input.displayName = "Input";