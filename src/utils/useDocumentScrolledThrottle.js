import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

/**
 * @link https://github.com/Uniswap/uniswap-org/blob/92ad01201f531d939bcc23a28034dc28c41e58bc/src/utils/useDocumentScrollThrottled.js#L6
 */
function useDocumentScrollThrottled(callback) {
  const [, setScrollPosition] = useState(0);
  let previousScrollTop = 0;

  function handleDocumentScroll() {
    const { scrollTop: currentScrollTop } =
      document.documentElement || document.body;

    setScrollPosition((previousPosition) => {
      previousScrollTop = previousPosition;
      return currentScrollTop;
    });

    callback({ previousScrollTop, currentScrollTop });
  }

  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250);

  useEffect(() => {
    window.addEventListener('scroll', handleDocumentScrollThrottled);

    return () =>
      window.removeEventListener('scroll', handleDocumentScrollThrottled);
  });
}

export default useDocumentScrollThrottled;
