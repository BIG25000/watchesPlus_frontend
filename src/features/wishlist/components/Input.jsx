import React from 'react';

export default function CustomInput({ brand }) {
    return (
        <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>{brand.name}</option>
        </select>
    )
}