import { BoxSizeTarget, BoxSizeUnit } from '@/types/css.type'

export function generateBoxSize (size: number, boxSizeUnit: BoxSizeUnit, boxSizeTarget: BoxSizeTarget) {
  return `${boxSizeTarget}: ${size}${boxSizeUnit};`
}
