import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { logger } from '../utils/logger'

const RouteLogger = () => {
  const location = useLocation()

  useEffect(() => {
    logger.info(`Route changed to: ${location.pathname}`, {
      pathname: location.pathname,
      search: location.search,
      hash: location.hash,
      state: location.state
    })
  }, [location])

  return null
}

export default RouteLogger