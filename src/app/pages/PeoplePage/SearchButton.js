import React from 'react';

const SearchButton = props => {
    return (
        <>
            <input
                type="text"
                value={props.value}
                placeholder="Search"
                className="input"
                onChange={props.changesOnInput}
            />
        </>
    );
};

export default SearchButton;
