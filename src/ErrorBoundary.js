/* import { useState } from "react";
export default function ErrorBoundary({logErrorToMyService}) {
    const [hasError, setHasError] = useState(false)

    function getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    function componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        logErrorToMyService(error, errorInfo);
    }

    if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
} */