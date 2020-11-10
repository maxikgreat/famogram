import { ChangeEvent, memo } from 'react';
import { ValidationRules, ValidationValueMessage, FieldError } from 'react-hook-form';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type RegisterProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  register?: (obj: any) => RefReturn;
};

interface InputProps extends RegisterProps {
  list?: string,
  name: string,
  icon?: IconProp,
  placeholder: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  value?: string,
  className?: string,
  right?: boolean,
  type?: string,
  error?: FieldError | string | null,
}

interface IconProps {
  icon: IconProp,
}

const IconMemo = memo(({ icon }: IconProps) => <FontAwesomeIcon icon={icon} />);

export const Input = ({ 
  list,
  register,
  right = false,
  name, 
  icon, 
  placeholder, 
  onChange, 
  value, 
  className = 'form-control form-line-control',
  type = 'text',
  error,
}: InputProps) => {
  return (
    <div className="form-group">
      {icon && !right && (
        <label htmlFor={name} className="control-icon">
          <IconMemo icon={icon} />
        </label>
      )}
      <input
        list={list}
        ref={register ? register : null}
        onChange={onChange}
        autoComplete="off"
        type={type}
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
      {error && (
        <div className="invalid-feedback">
          <svg xmlns="http://www.w3.org/2000/svg" width="16.001" height="16" viewBox="0 0 16.001 16">
            <g transform="translate(0.001)">
              <path data-name="Icon Color" d="M14.91,14.666H1.092a1.073,1.073,0,0,1-.982-.448,1.118,1.118,0,0,1,.1-1.118L7.13.649A1.061,1.061,0,0,1,8,0a1.062,1.062,0,0,1,.871.649L15.8,13.1a1.117,1.117,0,0,1,.094,1.117A1.071,1.071,0,0,1,14.91,14.666Zm-6.91-4A1.333,1.333,0,1,0,9.334,12,1.335,1.335,0,0,0,8,10.667ZM8,4a1.209,1.209,0,0,0-.871.422,1.211,1.211,0,0,0-.343.906L7.1,8.817A1.3,1.3,0,0,0,8.167,9.98.722.722,0,0,1,8,10h.4a1.317,1.317,0,0,1-.229-.02.937.937,0,0,0,.7-.77l.349-3.882a1.209,1.209,0,0,0-.342-.905A1.21,1.21,0,0,0,8,4Z" transform="translate(-0.001 0.667)" fill="#f46363"></path>
            </g>
          </svg>
          <span>{typeof error === 'string' ? error : error.message}</span>
        </div>
      )}
    </div>
  )
};
