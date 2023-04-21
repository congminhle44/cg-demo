import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { config } from '../config'

const Dashboard = () => {
  const [isLoginValid, setIsLoginValid] = useState(false)
  const location = useLocation()
  useEffect(() => {
    if (location?.state) {
      if (location.state.password === config.adminPassword)
        setIsLoginValid(true)
    } else {
      return
    }
  }, [location?.state])
  return <div>{isLoginValid ? 'Dashboard' : 'Not found'}</div>
}

export default Dashboard
