type InputType = {
  type: "text" | "number" | "password";
  name: string;
  label?: string;
  register: any;
  errors?: any;
  required?: boolean;
  validationSchema?: any;
};

const Input = ({
  name,
  label,
  register,
  errors,
  type,
  validationSchema,
}: InputType) => (
  <label htmlFor={name} className="form-control w-full max-w-xs space-x-3">
    <input
      placeholder="Type country name here"
      className={`input input-bordered w-full max-w-xs ${
        errors.country ? "border-error " : ""
      }`}
      id={name}
      name={name}
      type={type}
      {...register(name, validationSchema)}
    />

    <div className="label h-10">
      <span className="label-text-alt text-error">{errors[name]?.message}</span>
    </div>
  </label>
);
export default Input;
