import { useState, type HTMLAttributes, type ReactNode } from 'react';
import { RadioGroupContext } from './RadioGroupContext';

export interface RadioGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Controlled selected value */
  value?: string;
  /** Default selected value (uncontrolled) */
  defaultValue?: string;
  /** Called when selection changes */
  onChange?: (value: string) => void;
  /** Shared name attribute for all child radios */
  name?: string;
  children: ReactNode;
}

export function RadioGroup({
  value: controlledValue,
  defaultValue,
  onChange,
  name,
  children,
  ...rest
}: RadioGroupProps) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const handleChange = (v: string) => {
    if (!isControlled) setInternalValue(v);
    onChange?.(v);
  };

  return (
    <RadioGroupContext.Provider value={{ value, onChange: handleChange, name }}>
      <div role="radiogroup" {...rest}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}

RadioGroup.displayName = 'RadioGroup';
