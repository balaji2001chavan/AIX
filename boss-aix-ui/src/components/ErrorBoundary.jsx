import React from "react";

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(err, info) { console.error("ErrorBoundary:", err, info); }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: "white", padding: 20 }}>
          ⚠️ Something failed in a sub-component.
        </div>
      );
    }
    return this.props.children;
  }
}