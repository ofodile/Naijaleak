// components/AdBanner.js
import Script from 'next/script';

export default function Adhiltop() {
  return (
    <Script id="ad-banner-script" strategy="afterInteractive">
      {`
        (function(mjnpie){
          var d = document,
              s = d.createElement('script'),
              l = d.scripts[d.scripts.length - 1];
          s.settings = mjnpie || {};
          s.src = "//trainedbus.com/b.XcVusBdhGPly0/Y_Wbcg/ueLmp9DuDZMUEl_khPZTmYazBMFTMQIwxOATmk/trN/jsM/xDNZDHEYwXMcAC";
          s.async = true;
          s.referrerPolicy = 'no-referrer-when-downgrade';
          l.parentNode.insertBefore(s, l);
        })({})
      `}
    </Script>
  );
}
