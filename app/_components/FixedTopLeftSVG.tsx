
export default function FixedTopLeftSVG() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        zIndex: 9999,
      }}
    >
      <img
        src="/esqtopo.svg"
        alt="SVG no canto superior esquerdo"
        style={{
          display: 'block', // remove espaçamento de linha
        }}
      />
    </div>
  );
}
