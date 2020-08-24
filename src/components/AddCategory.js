import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ categories, setCategories }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmmit = (e) => {
        e.preventDefault();
        setCategories([inputValue, ...categories]);
    };

    return (
        <form onSubmit={handleSubmmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}