export function isValidTitle(input: string, pattern: string): boolean {
  const regexPat = new RegExp(pattern)
  return input.search(regexPat) !== -1
}
