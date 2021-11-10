import React from 'react';
import styled from 'styled-components';

import {Input} from '../../../../shared/ui';
import {ICodeInputComponent} from './types';

const CodeInputComponent: React.FC<ICodeInputComponent> = ({
  codes,
  setCodes,
  disabled,
  className,
}) => {
  const codeInputsConfig = [
    {
      id: 1,
      value: codes[1],
      inputDisabled: false,
    },
    {
      id: 2,
      value: codes[2],
      inputDisabled: codes[1]?.length === 0 && codes[2]?.length === 0,
    },
    {
      id: 3,
      value: codes[3],
      inputDisabled: codes[2]?.length === 0 && codes[3]?.length === 0,
    },
    {
      id: 4,
      value: codes[4],
      inputDisabled: codes[3]?.length === 0 && codes[4]?.length === 0,
    },
  ];

  const focusNextElement = (e: React.ChangeEvent<HTMLInputElement>) => {
    const timeOutId = setTimeout(() => {
      if (e.target.nextSibling) {
        (e.target.nextSibling as HTMLInputElement).focus();
      }
      clearTimeout(timeOutId);
    }, 0);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
  ) => {
    setCodes({...codes, [id]: e.target.value});
    focusNextElement(e);
  };

  return (
    <div className={`code-input ${className}`}>
      {codeInputsConfig.map(({id, value, inputDisabled}) => (
          <Input
            key={id}
            className={`input input-code-${id}`}
            kind="code"
            maxLength={1}
            placeholder="X"
            value={value}
            disabled={disabled || inputDisabled}
            onChange={(e) => handleChange(e, id)}
          />
        ),
      )}
    </div>
  );
};

export const CodeInput = styled(CodeInputComponent)`
  .input + .input {
    margin-left: 16px;
  }
`;