import { PureComponent } from 'react'
import ErrorScreen from './ErrorScreen'

const DEFAULT_MESSAGES = { 0: 'サーバエラーです' }

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
  }

  static getDerivedStateFromError = (error) => ({
    hasError: true,
    error,
  })

  componentDidCatch = (error, info) => {
    console.error(error, info)
  }

  render = () => {
    const { children, statusMessage = {} } = this.props
    const { hasError, error } = this.state
    const messages = { ...DEFAULT_MESSAGES, ...statusMessage }
    if (hasError) {
      const statusCode = error.response.status
      if (
        statusCode &&
        Object.keys(messages[statusCode]).includes(String(statusCode))
      ) {
        return (
          <ErrorScreen
            errorMessage={messages[statusCode]}
            redirectTo={redirectTo}
          />
        )
      }
      return <ErrorScreen errorMessage={messages[0]} redirectTo={redirectTo} />
    }
    return children
  }
}

export default ErrorBoundary
