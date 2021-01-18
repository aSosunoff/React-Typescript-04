import React, { ErrorInfo } from "react";

interface IErrorBoundaryTypeProps {
  children: (error: boolean) => React.ReactNode;
}

interface IErrorBoundaryTypeState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  IErrorBoundaryTypeProps,
  IErrorBoundaryTypeState
> {
  constructor(props: IErrorBoundaryTypeProps) {
    super(props);
    this.state = { hasError: false };
  }

  /* static getDerivedStateFromError() {
    return { hasError: true };
  } */

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    return this.props.children(this.state.hasError);
  }
}

export default ErrorBoundary;
