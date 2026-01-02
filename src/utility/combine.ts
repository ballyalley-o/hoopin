const ROOT = '/'

const _trim = (s: string) => s.replace(/^\/+|\/+$/g, '')
export const combine: IConnect = (...parts: string[]): string => {
  return parts.map(_trim).join(ROOT)
}

export const combineURL = (baseUrl: string, ...parts: string[]): string => {
  return [_trim(baseUrl), ...parts.map(_trim)].join(ROOT)
}