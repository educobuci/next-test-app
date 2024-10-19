import * as React from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className="border border-slate-300 rounded-sm"
        type="checkbox"
        onChange={() => {}}
        ref={ref}
        {...props}
      />
    )
  }
)
Checkbox.displayName = 'Checkbox'

export { Checkbox }
