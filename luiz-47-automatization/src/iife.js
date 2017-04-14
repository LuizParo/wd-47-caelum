var app = (function() {
  'use strict';

  console.log('init ...');

  var tracking = {};
  tracking.count = 0;
  tracking.trackEvent = function() {
    return tracking.count++;
  };
  tracking.resetCount = function() {
    return tracking.count = 0;
  };

  return {
    track : tracking.trackEvent
  };
}());
