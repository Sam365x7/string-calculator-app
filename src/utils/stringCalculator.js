export function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  let numberString = numbers;

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const rawDelimiter = numbers.substring(2, delimiterEndIndex);

    const escapedDelimiter = rawDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    delimiter = new RegExp(escapedDelimiter);
    numberString = numbers.substring(delimiterEndIndex + 1);
  }

  const parts = numberString.split(delimiter);

  const parsedNumbers = parts
    .map((n) => parseInt(n, 10))
    .filter((n) => !isNaN(n));
 
  return parsedNumbers.reduce((sum, n) => sum + n, 0);
}