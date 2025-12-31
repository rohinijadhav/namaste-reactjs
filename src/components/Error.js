import { useRouteError } from "react-router";

const Error = () => {
  // React hook to get routing error. This function return Error Object.
  const err = useRouteError();

  return (
    <div className="error-container">
      <h1>{err.status}</h1>
      <h2>{err.statusText}</h2>
    </div>
  );
};

export default Error;
