export function formatSecondsToMinutes(seconds: number): string {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsMods = String(Math.floor(seconds % 60)).padStart(2, "0");
  return `${minutes}: ${secondsMods}`;
}
