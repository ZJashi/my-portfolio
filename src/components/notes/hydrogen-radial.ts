function factorial(n: number) {
  let value = 1;
  for (let i = 2; i <= n; i++) value *= i;
  return value;
}
function laguerre(degree: number, alpha: number, x: number) {
  if (degree === 0) return 1;
  let previous = 1,
    current = 1 + alpha - x;
  for (let j = 1; j < degree; j++) {
    const next =
      ((2 * j + 1 + alpha - x) * current - (j + alpha) * previous) / (j + 1);
    previous = current;
    current = next;
  }
  return current;
}
/** x = r/aZ; returns aZ^(3/2) R and the normalized density in x. */
export function hydrogenRadial(n: number, ell: number, x: number) {
  const rho = (2 * x) / n;
  const normalization =
    (2 / n) ** 1.5 *
    Math.sqrt(factorial(n - ell - 1) / (2 * n * factorial(n + ell)));
  const amplitude =
    normalization *
    Math.exp(-rho / 2) *
    rho ** ell *
    laguerre(n - ell - 1, 2 * ell + 1, rho);
  return { amplitude, density: x * x * amplitude * amplitude };
}
export function hydrogenRadialProbability(
  n: number,
  ell: number,
  radius: number,
) {
  const steps = 800,
    h = radius / steps;
  let sum =
    hydrogenRadial(n, ell, 0).density + hydrogenRadial(n, ell, radius).density;
  for (let i = 1; i < steps; i++)
    sum += (i % 2 ? 4 : 2) * hydrogenRadial(n, ell, i * h).density;
  return (sum * h) / 3;
}
