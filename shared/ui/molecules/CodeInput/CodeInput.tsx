import React, {useState} from 'react';
import styled from 'styled-components';

import {Input} from '../../atoms';
import {ICodeInputComponent} from './types';

const CodeInputComponent: React.FC<ICodeInputComponent> = ({className}) => {
  const [codes, setCodes] = useState<{ [key: string]: string }>({
    1: '',
    2: '',
    3: '',
    4: '',
  });

  const codeInputs = [
    {
      id: 1,
      value: codes[1],
      Input,
      disabled: false,
    },
    {
      id: 2,
      value: codes[2],
      Input,
      disabled: codes[1].length === 0 && codes[2].length === 0,
    },
    {
      id: 3,
      value: codes[3],
      Input,
      disabled: codes[2].length === 0 && codes[3].length === 0,
    },
    {
      id: 4,
      value: codes[4],
      Input,
      disabled: codes[3].length === 0 && codes[4].length === 0,
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
    setCodes((prev) => ({...prev, [id]: e.target.value}));
    focusNextElement(e);
  };

  return (
    <div className={`code-input ${className}`}>
      {codeInputs.map(({id, value, Input, disabled}) => (
          <Input
            key={id}
            className={`input input-code-${id}`}
            kind="code"
            maxLength={1}
            placeholder="X"
            value={value}
            disabled={disabled}
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