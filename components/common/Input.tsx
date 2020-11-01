import { ChangeEvent, memo } from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface InputProps {
  name: string,
  icon?: IconProp,
  placeholder: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  value: string,
}

interface IconProps {
  icon: IconProp,
}

const IconMemo = memo(({ icon }: IconProps) => <FontAwesomeIcon icon={icon} />)

export const Input = ({ name, icon, placeholder, onChange, value }: InputProps) => {
  return (
    <div className="form-group">
      {icon && (
        <label htmlFor={name} className="control-icon">
          <IconMemo icon={icon} />
        </label>
      )}
      <input 
        onChange={onChange}
        autoComplete="off"
        type="text" 
        name={name}
        placeholder={placeholder} 
        className="form-control form-line-control" 
        id={name} 
        value={value}
      />
    </div>
  )
};
