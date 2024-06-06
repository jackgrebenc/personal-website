function formatSeconds(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // Pad the seconds with a leading zero if less than 10
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  return `${minutes}:${formattedSeconds}`;
}

export function formatSecondsToJSX(seconds: number): JSX.Element {
  const color = seconds < 5 ? "red" : "black";
  return <span style={{ color: color }}>{formatSeconds(seconds)}</span>;
}
