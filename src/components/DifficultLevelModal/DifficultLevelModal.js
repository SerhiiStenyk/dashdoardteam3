import './DifficultLevelModal.css';

import CustomSelect from './CustomSelect';

const levels = [
  {
    id: 0,
    label: 'Easy',
    color: 'teal',
  },
  {
    id: 1,
    label: 'Normal',
    color: 'green',
  },
  {
    id: 2,
    label: 'Hard',
    color: 'red',
  },
];

export default function DifficultLevelModal() {
  return (
    <div>
      <CustomSelect value={levels} />
    </div>
  );
}
