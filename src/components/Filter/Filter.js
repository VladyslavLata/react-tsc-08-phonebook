import PropTypes from 'prop-types';
import * as SC from './Filter.styled';

export const Filter = ({ value, onChange }) => {
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

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
