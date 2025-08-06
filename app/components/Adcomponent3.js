'use client';

import { useEffect } from 'react';

const Adcomponent3 = () => {
  useEffect(() => {
    // Ensure global atAsyncOptions array exists
    if (typeof window.atAsyncOptions !== 'object') {
      window.atAsyncOptions = [];
    }

    // Push ad configuration
    window.atAsyncOptions.push({
      key: 'd133bb74300857cd99679135032291c7',
      format: 'js',
      async: true,
      container: 'atContainer-d133bb74300857cd99679135032291c7',
      params: {},
    });

    // Create and append the script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src =
      (location.protocol === 'https:' ? 'https' : 'http') +
      '://www.highperformanceformat.com/d133bb74300857cd99679135032291c7/invoke.js';

    document.head.appendChild(script);

    // Optional cleanup
    return () => {
      const adDiv = document.getElementById(
        'atContainer-d133bb74300857cd99679135032291c7'
      );
      if (adDiv) adDiv.innerHTML = '';
    };
  }, []);

  return (
    <div
      id="atContainer-d133bb74300857cd99679135032291c7"
      style={{ textAlign: 'center' }}
    />
  );
};

export default Adcomponent3;