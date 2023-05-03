import { useField } from "formik";
import React from "react";

const TextInput = (props) => {
  //   const { label, type, name, id, placeholder } = props;
  //   const [field, meta] = useField(props);
//   console.log(props);
  const { label, type, name, id, placeholder } = props;
  const [field, meta] = useField(props);
//   console.log(field);
//   console.log(meta);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={id || name} className="font-semibold text-2xl">{label}</label>
      <input
        type={type}
        name={name}
        className="p-5 rounded-md border border-gray-500 w-[600px]"
        placeholder={placeholder}
        id={id}
        {...field}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
      <div className="text-sm text-red-500"></div>
    </div>
  );
};

export default TextInput;
