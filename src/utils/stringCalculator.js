export function add(numbers) {
  if (!numbers) return 0;

  const parts = numbers.split(",");
  const num1 = parseInt(parts[0], 10);
  const num2 = parseInt(parts[1], 10);

  return num1 + num2;
}