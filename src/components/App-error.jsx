import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log the error or send it to an error tracking service
    console.error('Error captured:', error);
    console.error('Error info:', info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong! Please try refreshing the page.</div>;
    }
    return this.props.children || null; // Ensure children is either provided or null
  }
}

// Modify propTypes to not require children
ErrorBoundary.propTypes = {
  children: PropTypes.node, // No longer required
};

// Default props to avoid issues if children are not provided
ErrorBoundary.defaultProps = {
  children: null, // Default value if no children are passed
};

function AppError() {
  return (
    <ErrorBoundary>
      {/* Your app's content */}
    </ErrorBoundary>
  );
}

export default AppError;


