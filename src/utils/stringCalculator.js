export function add(numbers) {
  if (!numbers) return 0;

  const parts = numbers.split(",");
  const parsedNumbers = parts.map((num) => parseInt(num, 10));
  return parsedNumbers.reduce((sum, num) => sum + num, 0);
}