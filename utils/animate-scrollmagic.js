// components/ScrollMagicComponent.js
import { useEffect } from 'react';
import ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';

export default function ScrollMagicComponent() {
  useEffect(() => {
    // Initialize ScrollMagic controller
    const controller = new ScrollMagic.Controller();

    // Create ScrollMagic scene
    const scene = new ScrollMagic.Scene({
      triggerElement: '#trigger', // Change to your trigger element selector
      duration: 200, // Change to your desired duration
      offset: 50 // Change to your desired offset
    })
    .setTween(TweenMax.to('#target', 1, { opacity: 0, scale: 0.5 })) // Change to your tween animation
    .addTo(controller);

    // Clean up on unmount
    return () => {
      scene.destroy(true);
      controller.destroy(true);
    };
  }, []);

  return null; // ScrollMagic component does not render anything
}
/*
import ScrollMagicComponent from '../components/ScrollMagicComponent';

export default function Home() {
  return (
    <div>
      { Your other page content }
      <div id="trigger" style={{ height: '100vh' }}>
        {/* Element that triggers the animation }
      </div>
      <div id="target" style={{ width: '100px', height: '100px', background: 'red' }}>
        {/* Element that will be animated }
      </div>
      <ScrollMagicComponent />
    </div>
  );
}


*/