import { createBoard } from '@wixc3/react-board';
import { ArrayRepeater } from '../../../components/repeaters/array-repeater';

export default createBoard({
    name: 'ArrayRepeater',
    Board: () => <ArrayRepeater items={['Sagiv', 'Shaked', 'Matan', 'Noam', 'Daniel', 'Ari']} />,
});
