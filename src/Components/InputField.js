import React from 'react';

const InputField = ({ label, id, name, type, placeholder, onChange, value, options }) => {

    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <>
            <label htmlFor={id} className="block text-2xl md:text-2xl text-extrabold mb-2">
                {label}
            </label>
            {options ? (
                <select
                    id={id}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-xl rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
                >
                    {options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    id={id}
                    required
                    name={name}
                    placeholder={placeholder}
                    onChange={handleChange}
                    value={value}
                    className="w-full px-4 py-2 text-2xl rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
                />
            )}
        </>
    );
};

export default InputField;
