// Simple logger utility for debugging

const isDevelopment = import.meta.env.DEV

export const logger = {
  // Log general info
  info: (message: string, data?: any) => {
    if (isDevelopment) {
      console.log(`[INFO] ${new Date().toISOString()} - ${message}`, data || '')
    }
  },

  // Log warnings
  warn: (message: string, data?: any) => {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`, data || '')
  },

  // Log errors
  error: (message: string, error?: any) => {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error || '')
    
    // In production, you could send errors to a service like Sentry
    // if (window.Sentry) {
    //   window.Sentry.captureException(error || new Error(message))
    // }
  },

  // Log navigation events
  navigation: (from: string, to: string) => {
    if (isDevelopment) {
      console.log(`[NAV] ${new Date().toISOString()} - Navigating from ${from} to ${to}`)
    }
  },

  // Log API calls
  api: (method: string, url: string, data?: any) => {
    if (isDevelopment) {
      console.log(`[API] ${new Date().toISOString()} - ${method} ${url}`, data || '')
    }
  },

  // Log user actions
  action: (action: string, details?: any) => {
    if (isDevelopment) {
      console.log(`[ACTION] ${new Date().toISOString()} - ${action}`, details || '')
    }
  }
}

// Global error handler
window.addEventListener('error', (event) => {
  logger.error('Global error caught', {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    error: event.error
  })
})

// Promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
  logger.error('Unhandled promise rejection', {
    reason: event.reason,
    promise: event.promise
  })
})