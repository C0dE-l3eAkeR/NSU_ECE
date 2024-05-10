import React, { useEffect } from 'react';
import $ from 'jquery';

function CounterUp() {
  useEffect(() => {
    // Define CounterUp options
    const options = {
      time: 400,
      delay: 10,
      offset: 100,
      beginAt: 0,
      formatter: false,
      context: "window",
      callback: function() {}
    };

    // Initialize CounterUp plugin
    $('.counter').counterUp(options);
  }, []);

  return (
    <div className="counter">0</div>
  );
}

export default CounterUp;
