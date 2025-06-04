import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  }

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error, errorInfo: null }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    
    // Update state with error details
    this.setState({
      error,
      errorInfo
    })
    
    // You could also log to an external service here
    // Example: logErrorToService(error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      // Error fallback UI
      return (
        <div className="min-h-screen bg-pilates-cream flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl w-full">
            <h2 className="text-2xl font-display text-pilates-dark mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-pilates-brown mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            
            {/* Show error details in development */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6">
                <summary className="cursor-pointer text-pilates-rose hover:text-pilates-brown">
                  Error details (development only)
                </summary>
                <pre className="mt-4 p-4 bg-gray-100 rounded overflow-auto text-xs">
                  {this.state.error.toString()}
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
            
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-pilates-rose text-white rounded-full hover:bg-pilates-brown transition-all"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary