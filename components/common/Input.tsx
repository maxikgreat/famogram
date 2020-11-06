import { ChangeEvent, memo } from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface InputProps {
  name: string,
  icon?: IconProp,
  placeholder: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  value: string,
  className?: string,
  right?: boolean,
}

interface IconProps {
  icon: IconProp,
}

const IconMemo = memo(({ icon }: IconProps) => <FontAwesomeIcon icon={icon} />);

export const Input = ({ 
  right = false,
  name, 
  icon, 
  placeholder, 
  onChange, 
  value, 
  className = 'form-control form-line-control',
}: InputProps) => {
  return (
    <div className="form-group">
      {icon && !right && (
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
        className={className} 
        id={name} 
        value={value}
      />
      {icon && right && (
        <label htmlFor={name} className="control-icon">
          <IconMemo icon={icon} />
        </label>
      )}
    </div>
  )
};
