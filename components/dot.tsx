export function Dot({ color, size = 12 }: { color?: string; size?: number }) {
  return (
    <span
      className="shadow-[0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color,
      }}
    ></span>
  );
}
