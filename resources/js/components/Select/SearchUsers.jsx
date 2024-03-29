import React  from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  .shop-option-description {
    display: block;
    font-size: 0.8rem;
    color: #6f6f6f;

    &.selected {
      color: #fff !important;
    }
  }
`;

export default function SearchUsers(props) {
  const { user, users, setUser } = props;

  return (
        <SelectWrapper className="font-light text-gray-600 lg:text-justify">
            <label htmlFor="user" className="sm:text-center lg:text-justify text-sm hover:border-grey-900 italic sm:block">Solucionado por:</label>
            <Select
                options={users}
                inputId="user"
                name="user"
                className="w-full"
                classNamePrefix="users-selector"
                placeholder="Elige estatus"
                onChange={(selected) => {
                  if (selected === null) {
                    setUser(null);
                  } else {
                    setUser(selected.value);
                  }
                }}
                value={[{ label: user.label }]}
                isClearable
            />
        </SelectWrapper>
  );
}
