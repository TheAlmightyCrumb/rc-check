import { st, classes } from './new-component.st.css';

interface NewComponentProps {
    className?: string;
}

export const NewComponent: React.FC<NewComponentProps> = ({ className }) => {
    return <div className={st(classes.root, className)}>NewComponent</div>;
};
