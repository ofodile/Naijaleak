'use client'

import { useEffect, useState } from 'react'

export default function Adcomponent1() {
  const [showAd, setShowAd] = useState(false)

  useEffect(() => {
    setShowAd(true)

    const existingScript = document.querySelector('script[src="https://js.wpadmngr.com/static/adManager.js"]')

    if (!existingScript) {
      const script = document.createElement('script')
      script.src = 'https://js.wpadmngr.com/static/adManager.js'
      script.async = true
      script.setAttribute('data-admpid', '334501')
      document.body.appendChild(script)
    }
  }, [])

  return showAd ? (
    <div
      data-banner-id="1451751"
      style={{ minHeight: '100px', width: '100%', display: 'block' }}
    />
  ) : null
}
