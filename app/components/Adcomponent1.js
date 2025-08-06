'use client';

import { useEffect } from 'react';

const Adcomponent1 = () => {
  useEffect(() => {
    // Ensure global variable is available
    if (typeof window.atAsyncOptions !== 'object') {
      window.atAsyncOptions = [];
    }

    // Push ad config
    window.atAsyncOptions.push({
      key: '6475b18b41d754a9490657a09837505a',
      format: 'js',
      async: true,
      container: 'atContainer-6475b18b41d754a9490657a09837505a',
      params: {},
    });

    // Append the script to <head>
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src =
      (location.protocol === 'https:' ? 'https' : 'http') +
      '://www.highperformanceformat.com/6475b18b41d754a9490657a09837505a/invoke.js';

    document.head.appendChild(script);

    // Optional cleanup (if needed)
    return () => {
      const adDiv = document.getElementById(
        'atContainer-6475b18b41d754a9490657a09837505a'
      );
      if (adDiv) adDiv.innerHTML = '';
    };
  }, []);

  return (
    <div id="atContainer-6475b18b41d754a9490657a09837505a" style={{ textAlign: 'center' }} />
  );
};

export default Adcomponent1;
