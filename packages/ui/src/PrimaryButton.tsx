import { ButtonHTMLAttributes, ReactNode } from 'react';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function PrimaryButton({ children, ...rest }: PrimaryButtonProps) {
  return (
    <button className="text-pink-500" {...rest}>
      {children}
    </button>
  );
}
