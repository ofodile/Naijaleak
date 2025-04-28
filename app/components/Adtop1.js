'use client'

import { useEffect } from 'react' 

export default function Adtop1() {
  useEffect(() => {
    const s = document.createElement('script');
    s.src = "//trainedbus.com/bxXVVMsUd.G/lw0zYkWtcS/ueHmG9AuZZ/URlWkLPtTMY/zaMjD/Q/0/OODxgdt/N/j_MCwSNRDwQc4kO/Qc";
    s.async = true;
    s.referrerPolicy = 'no-referrer-when-downgrade';
    document.body.appendChild(s);
  }, []);

  return (
    <div>
      {/* Optional: div where ad might inject */}
      <div id="ad-container"></div>
    </div>
  )
}
