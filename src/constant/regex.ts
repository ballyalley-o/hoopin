export const REGEX = {
  EMAIL   : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
  PHONE   : /^[0-9]{10,11}$/,
  URL     : /^(http|https):\/\/[^ "]+$/,
  DATE : /\d{4}-\d{2}-\d{2}/
} as const

export type RegexKey = keyof typeof REGEX
