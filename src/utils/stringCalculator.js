export function add(numbers) {
  if (!numbers) return 0;

  const parts = numbers.split(/,|\n/);
  const parsedNumbers = parts
  .map((num) => parseInt(num, 10))
  .filter((num) => !isNaN(num));

return parsedNumbers.reduce((sum, num) => sum + num, 0);
}