// components/Widont.tsx
export function Widont({ text }: { text: string }) {
  return <>{text.replace(/\s+([^\s]+)\s*$/, '\u00A0$1')}</>;
}
