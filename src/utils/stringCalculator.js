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

 const characters =  parts.filter((charString) => {
    return isNaN(parseInt(charString));
  })
  if (characters.length > 0) {
    throw new Error(`Invalid character found`);
  }
  
  const parsedNumbers = parts
    .map((n) => parseInt(n, 10))
    .filter((n) => !isNaN(n));
 
  const negatives = parsedNumbers.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

  return parsedNumbers.reduce((sum, n) => sum + n, 0);
}