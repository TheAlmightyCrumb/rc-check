import { st, classes } from './some-comp.st.css';

interface SomeCompProps {
    className?: string;
}

export const SomeComp: React.FC<SomeCompProps> = ({ className }) => {
    return <div className={st(classes.root, className)}>SomeComp</div>;
};
