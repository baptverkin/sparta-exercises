export function humanPercentage(percentages: number[]): string[] {
  return percentages.map(e => `${Math.round(e*100)}%`)
}
