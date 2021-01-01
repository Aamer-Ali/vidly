import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label input-label">
        {label}
      </label>

      {/* In the follwoing input method we have value which are reduntdent lieke
        value={value}
        onChange={onChange}
        type={type}
        
        
        we can remove this redundancy for that we have to user the ...rest implementation

        1. remove value, onChange and type parameter from argument
        2. then add ...rest parameter over there
        3. then remove folloeing from input markup
        value={value}
        onChange={onChange}
        type={type}
        4. add {...rest over there }

        */}

      <input
        {...rest}
        name={name}
        id={name}
        className="form-control "
        aria-describedby="emailHelp"
      />
      {error && <div className="form-error-message">{error}</div>}
    </div>
  );
};

export default Input;
