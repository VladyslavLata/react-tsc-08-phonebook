import * as SC from './Filter.styled';

interface IProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Filter: React.FC<IProps> = ({ value, onChange }) => {
  return (
    <SC.InputWrap>
      <label htmlFor="filter">
        <SC.Input
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          placeholder="Find contacts by name"
        />
      </label>
    </SC.InputWrap>
  );
};
