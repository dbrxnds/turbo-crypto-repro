"use client";

import { ReactNode } from "react";
import {randomUUID} from 'node:crypto'

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {randomUUID()}
      {children}
    </button>
  );
};
