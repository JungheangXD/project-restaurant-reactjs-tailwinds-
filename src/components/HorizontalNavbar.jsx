import React, { useRef, useEffect } from 'react';

const HorizontalMenu = ({ items }) => {
  const scrollableRef = useRef(null);
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollableRef.current) {
        setIsScrollVisible(
          scrollableRef.current.scrollWidth > scrollableRef.current.clientWidth
        );
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);

    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const onScroll = (offset) => {
    scrollableRef.current.scrollLeft += offset;
  };

  return (
    <div className="relative overflow-x-auto scrollbar-hide">
      <div
        ref={scrollableRef}
        className="flex items-center justify-center w-full"
      >
        {items.map((item, index) => (
          <button
            key={index}
            className="px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 mr-4"
          >
            {item}
          </button>
        ))}
      </div>
      {isScrollVisible && (
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
          <button
            className="px-4 py-2 font-medium text-blue-500 hover:text-blue-700 border border-blue-500 rounded-md"
            onClick={() => onScroll(-100)}
          >
            &lt;
          </button>
          <button
            className="px-4 py-2 font-medium text-blue-500 hover:text-blue-700 border border-blue-500 rounded-md"
            onClick={() => onScroll(100)}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default HorizontalMenu;
