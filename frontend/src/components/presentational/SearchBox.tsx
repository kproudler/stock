import React, { FunctionComponent } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import { useFormInput } from '../../hooks/input';

interface WidthProp {
  width: number;
}

export const SearchBox: FunctionComponent<WidthProp> = ({ width }) => {
  const search = useFormInput('');

  return (
    <div style={{ width }}>
      <FormControl
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon1"
        { ...search }
      />
    </div>
  );
}
