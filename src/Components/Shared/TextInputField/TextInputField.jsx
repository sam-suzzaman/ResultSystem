import React from "react";

const TextInputField = ({
    fieldTitle,
    value,
    errors,
    fieldName,
    filedType,
}) => {
    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text text-xs font-medium uppercase">
                    {fieldTitle}
                </span>
            </label>
            <input
                type={filedType}
                placeholder={fieldName}
                className="input input-bordered rounded-sm w-full p-4"
                {...value}
            />
            <label className="label">
                <span className="label-text-alt text-xs font-medium text-red-600">
                    {errors[`${fieldName}`]?.message}
                </span>
            </label>
        </div>
    );
};

export default TextInputField;
