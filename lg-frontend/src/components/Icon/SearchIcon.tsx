type Props = {
  width?: string | number;
  height?: string | number;
  fill?: string;
};

export function SearchIcon({
  width = 25,
  height = 25,
  fill = '#B3D3DB',
}: Props) {
  return (
    <div style={{ width, height }}>
      <svg
        style={{ width: 'inherit', height: 'inherit' }}
        viewBox="0 0 25 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="search-path" fill="none" stroke={fill}>
        <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/>
        <circle cx="8" cy="8" r="7" /></g>
      </svg>
    </div>
  );
}
