import { ButtonHTMLAttributes, ReactNode } from 'react';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function PrimaryButton({ children, ...rest }: PrimaryButtonProps) {
  return (
    <button
      className="px-200
    py-20 bg-blue"
      {...rest}
    >
      {children}
    </button>
  );
}
