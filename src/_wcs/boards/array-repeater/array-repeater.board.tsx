import { createBoard } from '@wixc3/react-board';
import { ArrayRepeater } from '../../../components/repeaters/array-repeater';

export default createBoard({
    name: 'ArrayRepeater',
    Board: () => <ArrayRepeater items={['Idan', 'Sagiv', 'Matan', 'Shaked', 'Avi', 'Tom', 'Lior', 'Itay']} />
});
