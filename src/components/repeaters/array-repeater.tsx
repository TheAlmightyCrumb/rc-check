export interface ArrayRepeaterProps {
  items: string[];
}

export const ArrayRepeater = ({ items }: ArrayRepeaterProps) => {
  return (
    <ol>
      {items.map((item, index) => (
        <li key={index}>
          <div />
          {item}
        </li>
      ))}
    </ol>
  );
};
