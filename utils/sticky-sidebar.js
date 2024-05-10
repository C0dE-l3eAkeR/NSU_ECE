import { useEffect } from 'react';

const useTheiaStickySidebar = (options) => {
  useEffect(() => {
    const namespace = options.namespace || 'TSS';

    function e(t, e) {
      var a = o(t, e);
      a || (
        console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),
        document.addEventListener("scroll." + t.namespace, function (t, e) {
          return function (a) {
            var n = o(t, e);
            n && document.removeEventListener(a.type, arguments.callee);
          };
        }(t, e)),
        window.addEventListener("resize." + t.namespace, function (t, e) {
          return function (a) {
            var n = o(t, e);
            n && window.removeEventListener(a.type, arguments.callee);
          };
        }(t, e))
      );
    }

    function o(t, e) {
      return t.initialized === !0 || !(document.body.offsetWidth < t.minWidth) && (a(t, e), !0);
    }

    function a(t, e) {
      t.initialized = !0;
      var o = document.getElementById("theia-sticky-sidebar-stylesheet-" + t.namespace);
      0 === o.length && document.head.appendChild('<style id="theia-sticky-sidebar-stylesheet-' + t.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>');

      e.forEach(function () {
        // Implementation of your logic inside the loop
      });
    }

    e(options, this);

    return () => {
      // Cleanup logic if needed
    };
  }, [options]);
};

export default useTheiaStickySidebar;
