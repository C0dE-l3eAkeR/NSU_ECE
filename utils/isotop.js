import { useEffect, useRef } from 'react';

function MyComponent() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = new Isotope(gridRef.current, {
      // Options here
    });

    return () => {
      grid.destroy(); // Cleanup when component unmounts
    };
  }, []);

  return (
    <div ref={gridRef}>
      {/* Grid items here */}
    </div>
  );
}

export default MyComponent;
