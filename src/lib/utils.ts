import { env } from "@/env";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`;
};

export function capitalize(str: string) {
  if(typeof str !== 'string') return str
  return str.replace(/\b\w/g, c => c.toUpperCase())
}