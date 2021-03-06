import React, { Component } from 'react';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import isEqual from 'lodash/isEqual';

const getSelectValue = (stateValue, simpleValue, isMulti, allOptions) => simpleValue
  ? allOptions.filter(({ value }) => isMulti
    ? stateValue.includes(value)
    : isEqual(value, stateValue))
  : stateValue;

const handleSelectChange = (option, simpleValue, isMulti, onChange) => {
  const sanitizedOption =  !option && isMulti ? [] : option;
  return simpleValue
    ? onChange(isMulti
      ? sanitizedOption.map(item => item.value)
      : sanitizedOption ? sanitizedOption.value : undefined)
    : onChange(sanitizedOption);
};

class Select extends Component {
  render() {
    const { input, invalid, classNamePrefix, simpleValue, isMulti, pluckSingleValue, options, ...props } = this.props;
    const { value, onChange, ...inputProps } = input;

    const selectValue = pluckSingleValue ? isMulti ? value : Array.isArray(value) && value[0] ? value[0] : value : value;

    return (
      <ReactSelect
        className={ clsx(classNamePrefix, {
          'has-error': invalid,
        }) }
        { ...props }
        { ...inputProps }
        options={ options }
        classNamePrefix={ classNamePrefix }
        isMulti={ isMulti }
        value={ getSelectValue(selectValue, simpleValue, isMulti, options) }
        onChange={ option => handleSelectChange(option, simpleValue, isMulti, onChange) }
      />
    );
  }
}

Select.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  classNamePrefix: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  simpleValue: PropTypes.bool,
  isMulti: PropTypes.bool,
  pluckSingleValue: PropTypes.bool,
};

Select.defaultProps = {
  options: [],
  invalid: false,
  simpleValue: true,
  pluckSingleValue: true,
};

const DataDrivenSelect = ({ multi, ...props }) => {
  const isMulti = props.isMulti || multi;
  const closeMenuOnSelect = !isMulti;
  return (
    <Select
      hideSelectedOptions={ false }
      isMulti={ isMulti }
      { ...props }
      closeMenuOnSelect={ closeMenuOnSelect }
    />
  );
};

DataDrivenSelect.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  multi: PropTypes.bool,
  placeholder: PropTypes.string,
  isMulti: PropTypes.bool,
  classNamePrefix: PropTypes.string.isRequired,
};

DataDrivenSelect.defaultProps = {
  placeholder: 'Choose...',
  isSearchable: false,
  isClearable: false,
};

export default DataDrivenSelect;
