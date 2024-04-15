import { st, classes } from './some-comp.st.css';

interface SomeCompProps {
    className?: string;
    content: string;
}

export const SomeComp: React.FC<SomeCompProps> = ({ className, content }) => {
    return <div className={st(className, classes.root)}>{content}</div>;
};
