const Step3 = ({ formData }) => {
  return (
    <div className="flex flex-col gap-4 p-4 text-left">

      <p>
        <span className="font-semibold">Name:</span> {formData.name}
      </p>

      <p>
        <span className="font-semibold">Email:</span> {formData.email}
      </p>

      <p>
        <span className="font-semibold">Password:</span> {"*".repeat(formData.password.length)}
      </p>

      <p className="text-green-600 font-medium mt-2">
        Review your details and click Finish.
      </p>
    </div>
  );
};

export default Step3;
