import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function PrimaryButton({ children, ...rest }: ButtonProps) {
  return <button {...rest}>{children}</button>;
}
