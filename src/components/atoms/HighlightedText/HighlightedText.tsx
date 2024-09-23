interface HighlightedTextProps {
  text: string | null;
  query: string;
  enabled?: boolean;
  matchCase?: boolean;
}

const HighlightedText = ({
  text,
  query,
  matchCase = false,
  enabled = false,
}: HighlightedTextProps) => {
  if (!enabled) return <>{text}</>;

  if (text === null) return "";
  if (query !== "" && text.toLowerCase().includes(query.toLowerCase())) {
    const regex = new RegExp(`(${query})`, matchCase ? "g" : "gi");
    const parts = text.split(regex);

    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? <mark key={index}>{part}</mark> : part
        )}
      </>
    );
  }
  return <>{text}</>;
};

export default HighlightedText;
