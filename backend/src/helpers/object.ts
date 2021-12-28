export function omit <T extends object, K extends keyof T> (obj: T, parameters: K[]) {
  const result: { [key: string]: any } = {}

  for (const [key, value] of Object.entries(obj)) {
    if (parameters.includes(key as K)) {
      continue
    }

    result[key] = value
  }

  return result as Omit<T, K>
}

export function pick <T extends object, K extends keyof T> (obj: T, parameters: K[]) {
  const result: { [key: string]: any } = {}

  for (const [key, value] of Object.entries(obj)) {
    if (parameters.includes(key as K)) {
      result[key] = value
    }
  }

  return result as Pick<T, K>
}
