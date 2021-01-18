import React from "react";
import ErrorBoundary from "../../HOC/error-boundary";
import ErrorIndicator from "../error-indicator";

const ErrorBoundaryIndicator: React.FC = ({ children }) => {
  return (
    <ErrorBoundary>
      {(error) => (error ? <ErrorIndicator /> : children)}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryIndicator;
