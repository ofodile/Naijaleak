'use client'

import { useEffect, useState } from 'react'

export default function Adcomponent3() {
  const [showAd, setShowAd] = useState(false)

  useEffect(() => {
    setShowAd(true) // only show ad div on client

    // Inject the ad script once on mount
    const script = document.createElement('script')
    script.src = 'https://js.wpadmngr.com/static/adManager.js'
    script.async = true
    script.setAttribute('data-admpid', '334501')
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return showAd ? <div data-banner-id="1451221"></div> : null
}
