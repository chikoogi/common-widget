interface DividerProps {
  className?: string;
  length?: string;
  color?: string;
  direction?: "h" | "v";
}

const Divider = ({
  className,
  length = "100%",
  color = "#42424A",
  direction = "h",
}: DividerProps) => {
  return (
    <>
      {direction === "h" && (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          width={length}
          height="2"
          fill="none"
        >
          <line x1="0" x2={length} y1="0" y2="0" stroke={color} />
        </svg>
      )}
      {direction === "v" && (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height={length}
          fill="none"
        >
          <line x1="0" x2="0" y1="0" y2={length} stroke={color} />
        </svg>
      )}
    </>
  );
};

export default Divider;
