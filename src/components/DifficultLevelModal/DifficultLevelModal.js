import './DifficultLevelModal.scss';

import CustomSelect from './CustomSelect';

const levels = [
  {
    id: 0,
    level: 'Easy',
    color: 'teal',
  },
  {
    id: 1,
    level: 'Normal',
    color: 'green',
  },
  {
    id: 2,
    level: 'Hard',
    color: 'red',
  },
];

export default function DifficultLevelModal() {
  return (
    <div>
      <CustomSelect options={levels} />
    </div>
  );
}
