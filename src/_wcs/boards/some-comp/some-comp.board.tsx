import { createBoard } from '@wixc3/react-board';
import { SomeComp } from '../../../components/some-comp/some-comp';

export default createBoard({
    name: 'SomeComp',
    Board: () => <SomeComp content="Hello Mates :D" />,
});
