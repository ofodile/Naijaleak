'use client'

import Script from 'next/script'

export default function Adcash1() {
  return (
    <div>
      {/* Step 2: Call runBanner inside a <div> */}
      <Script
        id="aclib-banner-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            aclib.runBanner({
              zoneId: '9879734',
            });
          `
        }}
      />
    </div>
  )
}
