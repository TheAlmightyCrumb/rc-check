export interface Person {
  name: string;
  section: string;
}

export interface ObjectRepeaterProps {
  people: Record<string, Person>;
}

export const ObjectRepeater = ({ people }: ObjectRepeaterProps) => {
  return (
    <ul>
      {Object.entries(people).map(([key, person], index) => (
        <li key={index}>
          {key}.{person.name} works at {person.section}
        </li>
      ))}
    </ul>
  );
};
