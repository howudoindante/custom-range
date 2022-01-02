(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2VydFRoaXNJbml0aWFsaXplZC5qcyJdLCJuYW1lcyI6WyJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwic2VsZiIsIlJlZmVyZW5jZUVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLHNCQUFULENBQWdDQyxJQUFoQyxFQUFzQztBQUNwQyxNQUFJQSxJQUFJLEtBQUssS0FBSyxDQUFsQixFQUFxQjtBQUNuQixVQUFNLElBQUlDLGNBQUosQ0FBbUIsMkRBQW5CLENBQU47QUFDRDs7QUFFRCxTQUFPRCxJQUFQO0FBQ0Q7O0FBRURFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkosc0JBQWpCLEVBQXlDRyxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsVUFBZixHQUE0QixJQUFyRSxFQUEyRUYsTUFBTSxDQUFDQyxPQUFQLENBQWUsU0FBZixJQUE0QkQsTUFBTSxDQUFDQyxPQUE5RyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyJdfQ==
},{}],2:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzQ2FsbENoZWNrLmpzIl0sIm5hbWVzIjpbIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiX19lc01vZHVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsZUFBVCxDQUF5QkMsUUFBekIsRUFBbUNDLFdBQW5DLEVBQWdEO0FBQzlDLE1BQUksRUFBRUQsUUFBUSxZQUFZQyxXQUF0QixDQUFKLEVBQXdDO0FBQ3RDLFVBQU0sSUFBSUMsU0FBSixDQUFjLG1DQUFkLENBQU47QUFDRDtBQUNGOztBQUVEQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJMLGVBQWpCLEVBQWtDSSxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsVUFBZixHQUE0QixJQUE5RCxFQUFvRUYsTUFBTSxDQUFDQyxPQUFQLENBQWUsU0FBZixJQUE0QkQsTUFBTSxDQUFDQyxPQUF2RyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7Il19
},{}],3:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZUNsYXNzLmpzIl0sIm5hbWVzIjpbIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX19lc01vZHVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsaUJBQVQsQ0FBMkJDLE1BQTNCLEVBQW1DQyxLQUFuQyxFQUEwQztBQUN4QyxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELEtBQUssQ0FBQ0UsTUFBMUIsRUFBa0NELENBQUMsRUFBbkMsRUFBdUM7QUFDckMsUUFBSUUsVUFBVSxHQUFHSCxLQUFLLENBQUNDLENBQUQsQ0FBdEI7QUFDQUUsSUFBQUEsVUFBVSxDQUFDQyxVQUFYLEdBQXdCRCxVQUFVLENBQUNDLFVBQVgsSUFBeUIsS0FBakQ7QUFDQUQsSUFBQUEsVUFBVSxDQUFDRSxZQUFYLEdBQTBCLElBQTFCO0FBQ0EsUUFBSSxXQUFXRixVQUFmLEVBQTJCQSxVQUFVLENBQUNHLFFBQVgsR0FBc0IsSUFBdEI7QUFDM0JDLElBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQlQsTUFBdEIsRUFBOEJJLFVBQVUsQ0FBQ00sR0FBekMsRUFBOENOLFVBQTlDO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTTyxZQUFULENBQXNCQyxXQUF0QixFQUFtQ0MsVUFBbkMsRUFBK0NDLFdBQS9DLEVBQTREO0FBQzFELE1BQUlELFVBQUosRUFBZ0JkLGlCQUFpQixDQUFDYSxXQUFXLENBQUNHLFNBQWIsRUFBd0JGLFVBQXhCLENBQWpCO0FBQ2hCLE1BQUlDLFdBQUosRUFBaUJmLGlCQUFpQixDQUFDYSxXQUFELEVBQWNFLFdBQWQsQ0FBakI7QUFDakJOLEVBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkcsV0FBdEIsRUFBbUMsV0FBbkMsRUFBZ0Q7QUFDOUNMLElBQUFBLFFBQVEsRUFBRTtBQURvQyxHQUFoRDtBQUdBLFNBQU9LLFdBQVA7QUFDRDs7QUFFREksTUFBTSxDQUFDQyxPQUFQLEdBQWlCTixZQUFqQixFQUErQkssTUFBTSxDQUFDQyxPQUFQLENBQWVDLFVBQWYsR0FBNEIsSUFBM0QsRUFBaUVGLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLFNBQWYsSUFBNEJELE1BQU0sQ0FBQ0MsT0FBcEciLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiXX0=
},{}],4:[function(require,module,exports){
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluZVByb3BlcnR5LmpzIl0sIm5hbWVzIjpbIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsInZhbHVlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX19lc01vZHVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsZUFBVCxDQUF5QkMsR0FBekIsRUFBOEJDLEdBQTlCLEVBQW1DQyxLQUFuQyxFQUEwQztBQUN4QyxNQUFJRCxHQUFHLElBQUlELEdBQVgsRUFBZ0I7QUFDZEcsSUFBQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCSixHQUF0QixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFDOUJDLE1BQUFBLEtBQUssRUFBRUEsS0FEdUI7QUFFOUJHLE1BQUFBLFVBQVUsRUFBRSxJQUZrQjtBQUc5QkMsTUFBQUEsWUFBWSxFQUFFLElBSGdCO0FBSTlCQyxNQUFBQSxRQUFRLEVBQUU7QUFKb0IsS0FBaEM7QUFNRCxHQVBELE1BT087QUFDTFAsSUFBQUEsR0FBRyxDQUFDQyxHQUFELENBQUgsR0FBV0MsS0FBWDtBQUNEOztBQUVELFNBQU9GLEdBQVA7QUFDRDs7QUFFRFEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVixlQUFqQixFQUFrQ1MsTUFBTSxDQUFDQyxPQUFQLENBQWVDLFVBQWYsR0FBNEIsSUFBOUQsRUFBb0VGLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLFNBQWYsSUFBNEJELE1BQU0sQ0FBQ0MsT0FBdkciLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiXX0=
},{}],5:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldFByb3RvdHlwZU9mLmpzIl0sIm5hbWVzIjpbIl9nZXRQcm90b3R5cGVPZiIsIm8iLCJtb2R1bGUiLCJleHBvcnRzIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJnZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIl9fZXNNb2R1bGUiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLGVBQVQsQ0FBeUJDLENBQXpCLEVBQTRCO0FBQzFCQyxFQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUJILGVBQWUsR0FBR0ksTUFBTSxDQUFDQyxjQUFQLEdBQXdCRCxNQUFNLENBQUNFLGNBQS9CLEdBQWdELFNBQVNOLGVBQVQsQ0FBeUJDLENBQXpCLEVBQTRCO0FBQzdHLFdBQU9BLENBQUMsQ0FBQ00sU0FBRixJQUFlSCxNQUFNLENBQUNFLGNBQVAsQ0FBc0JMLENBQXRCLENBQXRCO0FBQ0QsR0FGRCxFQUVHQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUssVUFBZixHQUE0QixJQUYvQixFQUVxQ04sTUFBTSxDQUFDQyxPQUFQLENBQWUsU0FBZixJQUE0QkQsTUFBTSxDQUFDQyxPQUZ4RTtBQUdBLFNBQU9ILGVBQWUsQ0FBQ0MsQ0FBRCxDQUF0QjtBQUNEOztBQUVEQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJILGVBQWpCLEVBQWtDRSxNQUFNLENBQUNDLE9BQVAsQ0FBZUssVUFBZixHQUE0QixJQUE5RCxFQUFvRU4sTUFBTSxDQUFDQyxPQUFQLENBQWUsU0FBZixJQUE0QkQsTUFBTSxDQUFDQyxPQUF2RyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7Il19
},{}],6:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  Object.defineProperty(subClass, "prototype", {
    value: Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    }),
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaGVyaXRzLmpzIl0sIm5hbWVzIjpbInNldFByb3RvdHlwZU9mIiwicmVxdWlyZSIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsIlR5cGVFcnJvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJjcmVhdGUiLCJwcm90b3R5cGUiLCJjb25zdHJ1Y3RvciIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLGNBQWMsR0FBR0MsT0FBTyxDQUFDLHFCQUFELENBQTVCOztBQUVBLFNBQVNDLFNBQVQsQ0FBbUJDLFFBQW5CLEVBQTZCQyxVQUE3QixFQUF5QztBQUN2QyxNQUFJLE9BQU9BLFVBQVAsS0FBc0IsVUFBdEIsSUFBb0NBLFVBQVUsS0FBSyxJQUF2RCxFQUE2RDtBQUMzRCxVQUFNLElBQUlDLFNBQUosQ0FBYyxvREFBZCxDQUFOO0FBQ0Q7O0FBRURDLEVBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkosUUFBdEIsRUFBZ0MsV0FBaEMsRUFBNkM7QUFDM0NLLElBQUFBLEtBQUssRUFBRUYsTUFBTSxDQUFDRyxNQUFQLENBQWNMLFVBQVUsSUFBSUEsVUFBVSxDQUFDTSxTQUF2QyxFQUFrRDtBQUN2REMsTUFBQUEsV0FBVyxFQUFFO0FBQ1hILFFBQUFBLEtBQUssRUFBRUwsUUFESTtBQUVYUyxRQUFBQSxRQUFRLEVBQUUsSUFGQztBQUdYQyxRQUFBQSxZQUFZLEVBQUU7QUFISDtBQUQwQyxLQUFsRCxDQURvQztBQVEzQ0QsSUFBQUEsUUFBUSxFQUFFO0FBUmlDLEdBQTdDO0FBVUEsTUFBSVIsVUFBSixFQUFnQkosY0FBYyxDQUFDRyxRQUFELEVBQVdDLFVBQVgsQ0FBZDtBQUNqQjs7QUFFRFUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCYixTQUFqQixFQUE0QlksTUFBTSxDQUFDQyxPQUFQLENBQWVDLFVBQWYsR0FBNEIsSUFBeEQsRUFBOERGLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLFNBQWYsSUFBNEJELE1BQU0sQ0FBQ0MsT0FBakciLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB2YWx1ZTogT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KSxcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7Il19
},{"./setPrototypeOf.js":9}],7:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyJdLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0Iiwib2JqIiwiX19lc01vZHVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLHNCQUFULENBQWdDQyxHQUFoQyxFQUFxQztBQUNuQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7QUFDbkMsZUFBV0E7QUFEd0IsR0FBckM7QUFHRDs7QUFFREUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSixzQkFBakIsRUFBeUNHLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlRixVQUFmLEdBQTRCLElBQXJFLEVBQTJFQyxNQUFNLENBQUNDLE9BQVAsQ0FBZSxTQUFmLElBQTRCRCxNQUFNLENBQUNDLE9BQTlHIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyJdfQ==
},{}],8:[function(require,module,exports){
var _typeof = require("@babel/runtime/helpers/typeof")["default"];

var assertThisInitialized = require("./assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiXSwibmFtZXMiOlsiX3R5cGVvZiIsInJlcXVpcmUiLCJhc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsInNlbGYiLCJjYWxsIiwiVHlwZUVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLE9BQU8sR0FBR0MsT0FBTyxDQUFDLCtCQUFELENBQVAsQ0FBeUMsU0FBekMsQ0FBZDs7QUFFQSxJQUFJQyxxQkFBcUIsR0FBR0QsT0FBTyxDQUFDLDRCQUFELENBQW5DOztBQUVBLFNBQVNFLDBCQUFULENBQW9DQyxJQUFwQyxFQUEwQ0MsSUFBMUMsRUFBZ0Q7QUFDOUMsTUFBSUEsSUFBSSxLQUFLTCxPQUFPLENBQUNLLElBQUQsQ0FBUCxLQUFrQixRQUFsQixJQUE4QixPQUFPQSxJQUFQLEtBQWdCLFVBQW5ELENBQVIsRUFBd0U7QUFDdEUsV0FBT0EsSUFBUDtBQUNELEdBRkQsTUFFTyxJQUFJQSxJQUFJLEtBQUssS0FBSyxDQUFsQixFQUFxQjtBQUMxQixVQUFNLElBQUlDLFNBQUosQ0FBYywwREFBZCxDQUFOO0FBQ0Q7O0FBRUQsU0FBT0oscUJBQXFCLENBQUNFLElBQUQsQ0FBNUI7QUFDRDs7QUFFREcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTCwwQkFBakIsRUFBNkNJLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyxVQUFmLEdBQTRCLElBQXpFLEVBQStFRixNQUFNLENBQUNDLE9BQVAsQ0FBZSxTQUFmLElBQTRCRCxNQUFNLENBQUNDLE9BQWxIIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyJdfQ==
},{"./assertThisInitialized.js":1,"@babel/runtime/helpers/typeof":10}],9:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldFByb3RvdHlwZU9mLmpzIl0sIm5hbWVzIjpbIl9zZXRQcm90b3R5cGVPZiIsIm8iLCJwIiwibW9kdWxlIiwiZXhwb3J0cyIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiX19lc01vZHVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsZUFBVCxDQUF5QkMsQ0FBekIsRUFBNEJDLENBQTVCLEVBQStCO0FBQzdCQyxFQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLGVBQWUsR0FBR0ssTUFBTSxDQUFDQyxjQUFQLElBQXlCLFNBQVNOLGVBQVQsQ0FBeUJDLENBQXpCLEVBQTRCQyxDQUE1QixFQUErQjtBQUN6RkQsSUFBQUEsQ0FBQyxDQUFDTSxTQUFGLEdBQWNMLENBQWQ7QUFDQSxXQUFPRCxDQUFQO0FBQ0QsR0FIRCxFQUdHRSxNQUFNLENBQUNDLE9BQVAsQ0FBZUksVUFBZixHQUE0QixJQUgvQixFQUdxQ0wsTUFBTSxDQUFDQyxPQUFQLENBQWUsU0FBZixJQUE0QkQsTUFBTSxDQUFDQyxPQUh4RTtBQUlBLFNBQU9KLGVBQWUsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLENBQXRCO0FBQ0Q7O0FBRURDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkosZUFBakIsRUFBa0NHLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlSSxVQUFmLEdBQTRCLElBQTlELEVBQW9FTCxNQUFNLENBQUNDLE9BQVAsQ0FBZSxTQUFmLElBQTRCRCxNQUFNLENBQUNDLE9BQXZHIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiXX0=
},{}],10:[function(require,module,exports){
function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGVvZi5qcyJdLCJuYW1lcyI6WyJfdHlwZW9mIiwib2JqIiwibW9kdWxlIiwiZXhwb3J0cyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfX2VzTW9kdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQjtBQUNwQjs7QUFFQSxTQUFPLENBQUNDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkgsT0FBTyxHQUFHLGNBQWMsT0FBT0ksTUFBckIsSUFBK0IsWUFBWSxPQUFPQSxNQUFNLENBQUNDLFFBQXpELEdBQW9FLFVBQVVKLEdBQVYsRUFBZTtBQUNwSCxXQUFPLE9BQU9BLEdBQWQ7QUFDRCxHQUZrQyxHQUUvQixVQUFVQSxHQUFWLEVBQWU7QUFDakIsV0FBT0EsR0FBRyxJQUFJLGNBQWMsT0FBT0csTUFBNUIsSUFBc0NILEdBQUcsQ0FBQ0ssV0FBSixLQUFvQkYsTUFBMUQsSUFBb0VILEdBQUcsS0FBS0csTUFBTSxDQUFDRyxTQUFuRixHQUErRixRQUEvRixHQUEwRyxPQUFPTixHQUF4SDtBQUNELEdBSk8sRUFJTEMsTUFBTSxDQUFDQyxPQUFQLENBQWVLLFVBQWYsR0FBNEIsSUFKdkIsRUFJNkJOLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLFNBQWYsSUFBNEJELE1BQU0sQ0FBQ0MsT0FKakUsR0FJMkVILE9BQU8sQ0FBQ0MsR0FBRCxDQUp6RjtBQUtEOztBQUVEQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJILE9BQWpCLEVBQTBCRSxNQUFNLENBQUNDLE9BQVAsQ0FBZUssVUFBZixHQUE0QixJQUF0RCxFQUE0RE4sTUFBTSxDQUFDQyxPQUFQLENBQWUsU0FBZixJQUE0QkQsTUFBTSxDQUFDQyxPQUEvRiIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyJdfQ==
},{}],11:[function(require,module,exports){
"use strict";

var _require = require("./range"),
    SingleRange = _require.SingleRange,
    MultiRange = _require.MultiRange;

var range = new SingleRange(document.querySelector(".js-range"));
var range1 = new MultiRange(document.querySelector(".js-multi-range-left"), document.querySelector(".js-multi-range-right"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8uanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlNpbmdsZVJhbmdlIiwiTXVsdGlSYW5nZSIsInJhbmdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicmFuZ2UxIl0sIm1hcHBpbmdzIjoiOztBQUFBLGVBQW9DQSxPQUFPLENBQUMsU0FBRCxDQUEzQztBQUFBLElBQVFDLFdBQVIsWUFBUUEsV0FBUjtBQUFBLElBQXFCQyxVQUFyQixZQUFxQkEsVUFBckI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLElBQUlGLFdBQUosQ0FBZ0JHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFoQixDQUFkO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLElBQUlKLFVBQUosQ0FDWEUsUUFBUSxDQUFDQyxhQUFULENBQXVCLHNCQUF2QixDQURXLEVBRVhELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FGVyxDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBTaW5nbGVSYW5nZSwgTXVsdGlSYW5nZSB9ID0gcmVxdWlyZShcIi4vcmFuZ2VcIik7XHJcblxyXG5jb25zdCByYW5nZSA9IG5ldyBTaW5nbGVSYW5nZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXJhbmdlXCIpKTtcclxuY29uc3QgcmFuZ2UxID0gbmV3IE11bHRpUmFuZ2UoXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW11bHRpLXJhbmdlLWxlZnRcIiksXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW11bHRpLXJhbmdlLXJpZ2h0XCIpXHJcbik7Il19
},{"./range":12}],12:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleRange = exports.MultiRange = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Parent Class.
 *
 */
var Range = /*#__PURE__*/function () {
  /**
   * Main range constructor
   * @constructor
   * @param {HTMLElement} $input - Base input of the custom range
   */
  function Range($input) {
    (0, _classCallCheck2.default)(this, Range);
    (0, _defineProperty2.default)(this, "$inputRef", void 0);
    (0, _defineProperty2.default)(this, "$wrapper", void 0);
    this.$inputRef = $input;

    this._updateBarStateOnResize("resize", "optimizedResize");
  }
  /**
   * Abstract method
   * @description Initialization service
   */


  (0, _createClass2.default)(Range, [{
    key: "_init",
    value: function _init() {}
    /**
     * Protected method
     * @param {string} type - Js event
     * @param {string} name - Custom event name
     * @param {object} obj - Element which call the event. Default: ***window***
     * @description Used for update range controls position on resize
     */

  }, {
    key: "_updateBarStateOnResize",
    value: function _updateBarStateOnResize(type, name, obj) {
      obj = obj || window;
      var running = false;

      var func = function func() {
        if (running) {
          return;
        }

        running = true;
        requestAnimationFrame(function () {
          obj.dispatchEvent(new CustomEvent(name));
          running = false;
        });
      };

      obj.addEventListener(type, func);
    }
  }]);
  return Range;
}();
/**
 * Class representing a single range.
 * @extends Range
 */


var SingleRange = /*#__PURE__*/function (_Range) {
  (0, _inherits2.default)(SingleRange, _Range);

  var _super = _createSuper(SingleRange);

  /**
   * Single range constructor
   * @constructor
   * @param {HTMLElement} $input - Base input of the custom range
   */
  function SingleRange($input) {
    var _this;

    (0, _classCallCheck2.default)(this, SingleRange);
    _this = _super.call(this, $input);

    _this._init();

    return _this;
  }
  /**
   * Initialization method of the single range
   */


  (0, _createClass2.default)(SingleRange, [{
    key: "_init",
    value: function _init() {
      var _this2 = this;

      this._createWrapper();

      this._calcActiveBarSize(this.$inputRef.value);

      this.$inputRef.addEventListener("input", function (e) {
        _this2._calcActiveBarSize(e.target.value);
      });
      window.addEventListener("optimizedResize", function () {
        _this2._calcActiveBarSize.bind(_this2, _this2.$inputRef.value)();
      });
    }
    /**
     * Used for the move input into wrapper
     */

  }, {
    key: "_createWrapper",
    value: function _createWrapper() {
      this.$wrapper = document.createElement("div");
      this.$wrapper.classList.add("custom-range");
      var $parentNode = this.$inputRef.parentNode;
      this.$inputRef.classList.add("custom-range__input");
      var $clonedNode = this.$inputRef.cloneNode();
      var $slider = document.createElement("div");
      $slider.classList.add("custom-range__slider");
      $slider.innerHTML = " <span class=\"custom-range__bar\"><span class=\"custom-range__active-bar\"></span></span>";
      $slider.appendChild($clonedNode);
      this.$wrapper.appendChild($slider);
      $parentNode.replaceChild(this.$wrapper, this.$inputRef);
      this.$inputRef = $clonedNode;
    }
    /**
     * Used for get actual active bar size.
     *
     * Native active bar is hidden by ShadowDOM
     * @param { number | string } value - Input current value
     */

  }, {
    key: "_calcActiveBarSize",
    value: function _calcActiveBarSize(value) {
      var thumbWidth = this.$inputRef.dataset.thumbWidth;
      var $bar = this.$wrapper.querySelector(".custom-range__active-bar");
      $bar.style.width = (value - this.$inputRef.min) / (this.$inputRef.max - this.$inputRef.min) * (this.$inputRef.offsetWidth - thumbWidth) + thumbWidth / 2 + "px";
    }
  }]);
  return SingleRange;
}(Range);
/**
 * Class representing a multi-range.
 * @extends Range
 */


exports.SingleRange = SingleRange;

var MultiRange = /*#__PURE__*/function (_Range2) {
  (0, _inherits2.default)(MultiRange, _Range2);

  var _super2 = _createSuper(MultiRange);

  /**
   * Single range constructor
   * @constructor
   * @param {HTMLElement} $firstInput - First input
   * @param {HTMLElement} $secondInput - Second input
   */
  function MultiRange($firstInput, $secondInput) {
    var _this3;

    (0, _classCallCheck2.default)(this, MultiRange);
    _this3 = _super2.call(this, $firstInput);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this3), "$secondInputRef", void 0);
    _this3.$secondInputRef = $secondInput;

    _this3._init();

    return _this3;
  }
  /**
   * Initialization method of the multi-range
   */


  (0, _createClass2.default)(MultiRange, [{
    key: "_init",
    value: function _init() {
      this._createWrapper();

      this._calcLeftHandlersPosition.bind(this)();

      this._calcRightHandlersPosition.bind(this)();

      this.$inputRef.addEventListener("input", this._calcLeftHandlersPosition.bind(this));
      this.$secondInputRef.addEventListener("input", this._calcRightHandlersPosition.bind(this));
      window.addEventListener("optimizedResize", this._calcLeftHandlersPosition.bind(this));
      window.addEventListener("optimizedResize", this._calcRightHandlersPosition.bind(this));
    }
    /**
     * Used for the move input's into wrapper
     */

  }, {
    key: "_createWrapper",
    value: function _createWrapper() {
      this.$wrapper = document.createElement("div");
      this.$rangeWrapper = document.createElement("div");
      this.$wrapper.classList.add("custom-multi-range");
      this.$rangeWrapper.classList.add("custom-multi-range__wrapper");
      this.$slider = document.createElement("div");
      this.$track = document.createElement("div");
      this.$thumbLeft = document.createElement("div");
      this.$bar = document.createElement("div");
      this.$thumbRight = document.createElement("div");
      this.$slider.classList.add("custom-multi-range__slider");
      this.$track.classList.add("custom-multi-range__track");
      this.$bar.classList.add("custom-multi-range__range");
      this.$thumbLeft.classList.add("custom-multi-range__thumb", "custom-multi-range__thumb-left");
      this.$thumbRight.classList.add("custom-multi-range__thumb", "custom-multi-range__thumb-right");
      var $firstInputClone = this.$inputRef.cloneNode();
      var $secondInputClone = this.$secondInputRef.cloneNode();
      this.$wrapper.appendChild(this.$rangeWrapper);
      this.$rangeWrapper.appendChild($firstInputClone);
      this.$rangeWrapper.appendChild($secondInputClone);
      this.$rangeWrapper.appendChild(this.$slider);
      this.$slider.appendChild(this.$track);
      this.$slider.appendChild(this.$bar);
      this.$slider.appendChild(this.$thumbLeft);
      this.$slider.appendChild(this.$thumbRight);
      this.$inputRef.parentNode.replaceChild(this.$wrapper, this.$inputRef);
      this.$secondInputRef.parentNode.removeChild(this.$secondInputRef);
      this.$inputRef = $firstInputClone;
      this.$secondInputRef = $secondInputClone;
    }
    /**
     * Used for get actual left thumb position and active bar start.
     *
     */

  }, {
    key: "_calcLeftHandlersPosition",
    value: function _calcLeftHandlersPosition() {
      var $el = this.$inputRef;
      $el.value = Math.min(parseInt($el.value), parseInt(this.$secondInputRef.value) - 1);
      var left = ($el.value - $el.min) / ($el.max - $el.min) * ($el.offsetWidth - $el.dataset.thumbWidth);
      this.$thumbLeft.style.left = left + "px";
      this.$bar.style.left = left + $el.dataset.thumbWidth / 2 + "px";
    }
    /**
     * Used for get actual right thumb position and active bar end.
     *
     */

  }, {
    key: "_calcRightHandlersPosition",
    value: function _calcRightHandlersPosition() {
      var $el = this.$secondInputRef;
      $el.value = Math.max(parseInt($el.value), parseInt(this.$inputRef.value) + 1);
      var left = ($el.value - $el.min) / ($el.max - $el.min) * ($el.offsetWidth - $el.dataset.thumbWidth);
      this.$thumbRight.style.left = left + "px";
      this.$bar.style.right = $el.offsetWidth - left - $el.dataset.thumbWidth / 2 + "px";
    }
  }]);
  return MultiRange;
}(Range);

exports.MultiRange = MultiRange;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhbmdlLmpzIl0sIm5hbWVzIjpbIlJhbmdlIiwiJGlucHV0IiwiJGlucHV0UmVmIiwiX3VwZGF0ZUJhclN0YXRlT25SZXNpemUiLCJ0eXBlIiwibmFtZSIsIm9iaiIsIndpbmRvdyIsInJ1bm5pbmciLCJmdW5jIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIlNpbmdsZVJhbmdlIiwiX2luaXQiLCJfY3JlYXRlV3JhcHBlciIsIl9jYWxjQWN0aXZlQmFyU2l6ZSIsInZhbHVlIiwiZSIsInRhcmdldCIsImJpbmQiLCIkd3JhcHBlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIiRwYXJlbnROb2RlIiwicGFyZW50Tm9kZSIsIiRjbG9uZWROb2RlIiwiY2xvbmVOb2RlIiwiJHNsaWRlciIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwicmVwbGFjZUNoaWxkIiwidGh1bWJXaWR0aCIsImRhdGFzZXQiLCIkYmFyIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwid2lkdGgiLCJtaW4iLCJtYXgiLCJvZmZzZXRXaWR0aCIsIk11bHRpUmFuZ2UiLCIkZmlyc3RJbnB1dCIsIiRzZWNvbmRJbnB1dCIsIiRzZWNvbmRJbnB1dFJlZiIsIl9jYWxjTGVmdEhhbmRsZXJzUG9zaXRpb24iLCJfY2FsY1JpZ2h0SGFuZGxlcnNQb3NpdGlvbiIsIiRyYW5nZVdyYXBwZXIiLCIkdHJhY2siLCIkdGh1bWJMZWZ0IiwiJHRodW1iUmlnaHQiLCIkZmlyc3RJbnB1dENsb25lIiwiJHNlY29uZElucHV0Q2xvbmUiLCJyZW1vdmVDaGlsZCIsIiRlbCIsIk1hdGgiLCJwYXJzZUludCIsImxlZnQiLCJyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7SUFDTUEsSztBQUdGO0FBQ0o7QUFDQTtB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RyxDQUFDckIsT0FBSixDQUFZRCxVQUQvQixDQURKO0FBR0EsV0FBS2tCLFdBQUwsQ0FBaUJkLEtBQWpCLENBQXVCcUIsSUFBdkIsR0FBOEJBLElBQUksR0FBRyxJQUFyQztBQUNBLFdBQUt2QixJQUFMLENBQVVFLEtBQVYsQ0FBZ0JzQixLQUFoQixHQUNJSixHQUFHLENBQUNkLFdBQUosR0FBa0JpQixJQUFsQixHQUF5QkgsR0FBRyxDQUFDckIsT0FBSixDQUFZRCxVQUFaLEdBQXlCLENBQWxELEdBQXNELElBRDFEO0FBRUg7OztFQTVHMkJuQyxLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFBhcmVudCBDbGFzcy5cclxuICpcclxuICovXHJcbmNsYXNzIFJhbmdlIHtcclxuICAgICRpbnB1dFJlZjtcclxuICAgICR3cmFwcGVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBNYWluIHJhbmdlIGNvbnN0cnVjdG9yXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9ICRpbnB1dCAtIEJhc2UgaW5wdXQgb2YgdGhlIGN1c3RvbSByYW5nZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigkaW5wdXQpIHtcclxuICAgICAgICB0aGlzLiRpbnB1dFJlZiA9ICRpbnB1dDtcclxuICAgICAgICB0aGlzLl91cGRhdGVCYXJTdGF0ZU9uUmVzaXplKFwicmVzaXplXCIsIFwib3B0aW1pemVkUmVzaXplXCIpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBYnN0cmFjdCBtZXRob2RcclxuICAgICAqIEBkZXNjcmlwdGlvbiBJbml0aWFsaXphdGlvbiBzZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIF9pbml0KCkgeyB9XHJcbiAgICAvKipcclxuICAgICAqIFByb3RlY3RlZCBtZXRob2RcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gSnMgZXZlbnRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gQ3VzdG9tIGV2ZW50IG5hbWVcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSBFbGVtZW50IHdoaWNoIGNhbGwgdGhlIGV2ZW50LiBEZWZhdWx0OiAqKip3aW5kb3cqKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBVc2VkIGZvciB1cGRhdGUgcmFuZ2UgY29udHJvbHMgcG9zaXRpb24gb24gcmVzaXplXHJcbiAgICAgKi9cclxuICAgIF91cGRhdGVCYXJTdGF0ZU9uUmVzaXplKHR5cGUsIG5hbWUsIG9iaikge1xyXG4gICAgICAgIG9iaiA9IG9iaiB8fCB3aW5kb3c7XHJcbiAgICAgICAgbGV0IHJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBmdW5jID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAocnVubmluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgb2JqLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KG5hbWUpKTtcclxuICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvYmouYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgc2luZ2xlIHJhbmdlLlxyXG4gKiBAZXh0ZW5kcyBSYW5nZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNpbmdsZVJhbmdlIGV4dGVuZHMgUmFuZ2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTaW5nbGUgcmFuZ2UgY29uc3RydWN0b3JcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gJGlucHV0IC0gQmFzZSBpbnB1dCBvZiB0aGUgY3VzdG9tIHJhbmdlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCRpbnB1dCkge1xyXG4gICAgICAgIHN1cGVyKCRpbnB1dCk7XHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXphdGlvbiBtZXRob2Qgb2YgdGhlIHNpbmdsZSByYW5nZVxyXG4gICAgICovXHJcbiAgICBfaW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9jcmVhdGVXcmFwcGVyKCk7XHJcbiAgICAgICAgdGhpcy5fY2FsY0FjdGl2ZUJhclNpemUodGhpcy4kaW5wdXRSZWYudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuJGlucHV0UmVmLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9jYWxjQWN0aXZlQmFyU2l6ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcHRpbWl6ZWRSZXNpemVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9jYWxjQWN0aXZlQmFyU2l6ZS5iaW5kKHRoaXMsIHRoaXMuJGlucHV0UmVmLnZhbHVlKSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VkIGZvciB0aGUgbW92ZSBpbnB1dCBpbnRvIHdyYXBwZXJcclxuICAgICAqL1xyXG4gICAgX2NyZWF0ZVdyYXBwZXIoKSB7XHJcbiAgICAgICAgdGhpcy4kd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy4kd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLXJhbmdlXCIpO1xyXG4gICAgICAgIGNvbnN0ICRwYXJlbnROb2RlID0gdGhpcy4kaW5wdXRSZWYucGFyZW50Tm9kZTtcclxuICAgICAgICB0aGlzLiRpbnB1dFJlZi5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLXJhbmdlX19pbnB1dFwiKTtcclxuICAgICAgICBjb25zdCAkY2xvbmVkTm9kZSA9IHRoaXMuJGlucHV0UmVmLmNsb25lTm9kZSgpO1xyXG4gICAgICAgIGNvbnN0ICRzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICRzbGlkZXIuY2xhc3NMaXN0LmFkZChcImN1c3RvbS1yYW5nZV9fc2xpZGVyXCIpO1xyXG4gICAgICAgICRzbGlkZXIuaW5uZXJIVE1MID0gYCA8c3BhbiBjbGFzcz1cImN1c3RvbS1yYW5nZV9fYmFyXCI+PHNwYW4gY2xhc3M9XCJjdXN0b20tcmFuZ2VfX2FjdGl2ZS1iYXJcIj48L3NwYW4+PC9zcGFuPmA7XHJcbiAgICAgICAgJHNsaWRlci5hcHBlbmRDaGlsZCgkY2xvbmVkTm9kZSk7XHJcbiAgICAgICAgdGhpcy4kd3JhcHBlci5hcHBlbmRDaGlsZCgkc2xpZGVyKTtcclxuICAgICAgICAkcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodGhpcy4kd3JhcHBlciwgdGhpcy4kaW5wdXRSZWYpO1xyXG4gICAgICAgIHRoaXMuJGlucHV0UmVmID0gJGNsb25lZE5vZGU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFVzZWQgZm9yIGdldCBhY3R1YWwgYWN0aXZlIGJhciBzaXplLlxyXG4gICAgICpcclxuICAgICAqIE5hdGl2ZSBhY3RpdmUgYmFyIGlzIGhpZGRlbiBieSBTaGFkb3dET01cclxuICAgICAqIEBwYXJhbSB7IG51bWJlciB8IHN0cmluZyB9IHZhbHVlIC0gSW5wdXQgY3VycmVudCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBfY2FsY0FjdGl2ZUJhclNpemUodmFsdWUpIHtcclxuICAgICAgICBjb25zdCB0aHVtYldpZHRoID0gdGhpcy4kaW5wdXRSZWYuZGF0YXNldC50aHVtYldpZHRoO1xyXG4gICAgICAgIGNvbnN0ICRiYXIgPSB0aGlzLiR3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuY3VzdG9tLXJhbmdlX19hY3RpdmUtYmFyXCIpO1xyXG4gICAgICAgICRiYXIuc3R5bGUud2lkdGggPVxyXG4gICAgICAgICAgICAoKHZhbHVlIC0gdGhpcy4kaW5wdXRSZWYubWluKSAvXHJcbiAgICAgICAgICAgICAgICAodGhpcy4kaW5wdXRSZWYubWF4IC0gdGhpcy4kaW5wdXRSZWYubWluKSkgKlxyXG4gICAgICAgICAgICAodGhpcy4kaW5wdXRSZWYub2Zmc2V0V2lkdGggLSB0aHVtYldpZHRoKSArXHJcbiAgICAgICAgICAgIHRodW1iV2lkdGggLyAyICtcclxuICAgICAgICAgICAgXCJweFwiO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBtdWx0aS1yYW5nZS5cclxuICogQGV4dGVuZHMgUmFuZ2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBNdWx0aVJhbmdlIGV4dGVuZHMgUmFuZ2Uge1xyXG4gICAgJHNlY29uZElucHV0UmVmO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTaW5nbGUgcmFuZ2UgY29uc3RydWN0b3JcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gJGZpcnN0SW5wdXQgLSBGaXJzdCBpbnB1dFxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gJHNlY29uZElucHV0IC0gU2Vjb25kIGlucHV0XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCRmaXJzdElucHV0LCAkc2Vjb25kSW5wdXQpIHtcclxuICAgICAgICBzdXBlcigkZmlyc3RJbnB1dCk7XHJcbiAgICAgICAgdGhpcy4kc2Vjb25kSW5wdXRSZWYgPSAkc2Vjb25kSW5wdXQ7XHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXphdGlvbiBtZXRob2Qgb2YgdGhlIG11bHRpLXJhbmdlXHJcbiAgICAgKi9cclxuICAgIF9pbml0KCkge1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZVdyYXBwZXIoKTtcclxuICAgICAgICB0aGlzLl9jYWxjTGVmdEhhbmRsZXJzUG9zaXRpb24uYmluZCh0aGlzKSgpO1xyXG4gICAgICAgIHRoaXMuX2NhbGNSaWdodEhhbmRsZXJzUG9zaXRpb24uYmluZCh0aGlzKSgpO1xyXG4gICAgICAgIHRoaXMuJGlucHV0UmVmLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwiaW5wdXRcIixcclxuICAgICAgICAgICAgdGhpcy5fY2FsY0xlZnRIYW5kbGVyc1Bvc2l0aW9uLmJpbmQodGhpcylcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuJHNlY29uZElucHV0UmVmLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwiaW5wdXRcIixcclxuICAgICAgICAgICAgdGhpcy5fY2FsY1JpZ2h0SGFuZGxlcnNQb3NpdGlvbi5iaW5kKHRoaXMpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJvcHRpbWl6ZWRSZXNpemVcIixcclxuICAgICAgICAgICAgdGhpcy5fY2FsY0xlZnRIYW5kbGVyc1Bvc2l0aW9uLmJpbmQodGhpcylcclxuICAgICAgICApO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcIm9wdGltaXplZFJlc2l6ZVwiLFxyXG4gICAgICAgICAgICB0aGlzLl9jYWxjUmlnaHRIYW5kbGVyc1Bvc2l0aW9uLmJpbmQodGhpcylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VkIGZvciB0aGUgbW92ZSBpbnB1dCdzIGludG8gd3JhcHBlclxyXG4gICAgICovXHJcbiAgICBfY3JlYXRlV3JhcHBlcigpIHtcclxuICAgICAgICB0aGlzLiR3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLiRyYW5nZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuJHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImN1c3RvbS1tdWx0aS1yYW5nZVwiKTtcclxuICAgICAgICB0aGlzLiRyYW5nZVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImN1c3RvbS1tdWx0aS1yYW5nZV9fd3JhcHBlclwiKTtcclxuICAgICAgICB0aGlzLiRzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuJHRyYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLiR0aHVtYkxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuJGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy4kdGh1bWJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy4kc2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJjdXN0b20tbXVsdGktcmFuZ2VfX3NsaWRlclwiKTtcclxuICAgICAgICB0aGlzLiR0cmFjay5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLW11bHRpLXJhbmdlX190cmFja1wiKTtcclxuICAgICAgICB0aGlzLiRiYXIuY2xhc3NMaXN0LmFkZChcImN1c3RvbS1tdWx0aS1yYW5nZV9fcmFuZ2VcIik7XHJcbiAgICAgICAgdGhpcy4kdGh1bWJMZWZ0LmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgICAgIFwiY3VzdG9tLW11bHRpLXJhbmdlX190aHVtYlwiLFxyXG4gICAgICAgICAgICBcImN1c3RvbS1tdWx0aS1yYW5nZV9fdGh1bWItbGVmdFwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLiR0aHVtYlJpZ2h0LmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgICAgIFwiY3VzdG9tLW11bHRpLXJhbmdlX190aHVtYlwiLFxyXG4gICAgICAgICAgICBcImN1c3RvbS1tdWx0aS1yYW5nZV9fdGh1bWItcmlnaHRcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgJGZpcnN0SW5wdXRDbG9uZSA9IHRoaXMuJGlucHV0UmVmLmNsb25lTm9kZSgpO1xyXG4gICAgICAgIGNvbnN0ICRzZWNvbmRJbnB1dENsb25lID0gdGhpcy4kc2Vjb25kSW5wdXRSZWYuY2xvbmVOb2RlKCk7XHJcbiAgICAgICAgdGhpcy4kd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLiRyYW5nZVdyYXBwZXIpO1xyXG4gICAgICAgIHRoaXMuJHJhbmdlV3JhcHBlci5hcHBlbmRDaGlsZCgkZmlyc3RJbnB1dENsb25lKTtcclxuICAgICAgICB0aGlzLiRyYW5nZVdyYXBwZXIuYXBwZW5kQ2hpbGQoJHNlY29uZElucHV0Q2xvbmUpO1xyXG4gICAgICAgIHRoaXMuJHJhbmdlV3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLiRzbGlkZXIpO1xyXG4gICAgICAgIHRoaXMuJHNsaWRlci5hcHBlbmRDaGlsZCh0aGlzLiR0cmFjayk7XHJcbiAgICAgICAgdGhpcy4kc2xpZGVyLmFwcGVuZENoaWxkKHRoaXMuJGJhcik7XHJcbiAgICAgICAgdGhpcy4kc2xpZGVyLmFwcGVuZENoaWxkKHRoaXMuJHRodW1iTGVmdCk7XHJcbiAgICAgICAgdGhpcy4kc2xpZGVyLmFwcGVuZENoaWxkKHRoaXMuJHRodW1iUmlnaHQpO1xyXG4gICAgICAgIHRoaXMuJGlucHV0UmVmLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHRoaXMuJHdyYXBwZXIsIHRoaXMuJGlucHV0UmVmKTtcclxuICAgICAgICB0aGlzLiRzZWNvbmRJbnB1dFJlZi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuJHNlY29uZElucHV0UmVmKTtcclxuICAgICAgICB0aGlzLiRpbnB1dFJlZiA9ICRmaXJzdElucHV0Q2xvbmU7XHJcbiAgICAgICAgdGhpcy4kc2Vjb25kSW5wdXRSZWYgPSAkc2Vjb25kSW5wdXRDbG9uZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVXNlZCBmb3IgZ2V0IGFjdHVhbCBsZWZ0IHRodW1iIHBvc2l0aW9uIGFuZCBhY3RpdmUgYmFyIHN0YXJ0LlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgX2NhbGNMZWZ0SGFuZGxlcnNQb3NpdGlvbigpIHtcclxuICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRpbnB1dFJlZjtcclxuICAgICAgICAkZWwudmFsdWUgPSBNYXRoLm1pbihcclxuICAgICAgICAgICAgcGFyc2VJbnQoJGVsLnZhbHVlKSxcclxuICAgICAgICAgICAgcGFyc2VJbnQodGhpcy4kc2Vjb25kSW5wdXRSZWYudmFsdWUpIC0gMVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IGxlZnQgPVxyXG4gICAgICAgICAgICAoKCRlbC52YWx1ZSAtICRlbC5taW4pIC8gKCRlbC5tYXggLSAkZWwubWluKSkgKlxyXG4gICAgICAgICAgICAoJGVsLm9mZnNldFdpZHRoIC0gJGVsLmRhdGFzZXQudGh1bWJXaWR0aCk7XHJcbiAgICAgICAgdGhpcy4kdGh1bWJMZWZ0LnN0eWxlLmxlZnQgPSBsZWZ0ICsgXCJweFwiO1xyXG4gICAgICAgIHRoaXMuJGJhci5zdHlsZS5sZWZ0ID0gbGVmdCArICRlbC5kYXRhc2V0LnRodW1iV2lkdGggLyAyICsgXCJweFwiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VkIGZvciBnZXQgYWN0dWFsIHJpZ2h0IHRodW1iIHBvc2l0aW9uIGFuZCBhY3RpdmUgYmFyIGVuZC5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIF9jYWxjUmlnaHRIYW5kbGVyc1Bvc2l0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJHNlY29uZElucHV0UmVmO1xyXG4gICAgICAgICRlbC52YWx1ZSA9IE1hdGgubWF4KFxyXG4gICAgICAgICAgICBwYXJzZUludCgkZWwudmFsdWUpLFxyXG4gICAgICAgICAgICBwYXJzZUludCh0aGlzLiRpbnB1dFJlZi52YWx1ZSkgKyAxXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgbGVmdCA9XHJcbiAgICAgICAgICAgICgoJGVsLnZhbHVlIC0gJGVsLm1pbikgLyAoJGVsLm1heCAtICRlbC5taW4pKSAqXHJcbiAgICAgICAgICAgICgkZWwub2Zmc2V0V2lkdGggLSAkZWwuZGF0YXNldC50aHVtYldpZHRoKTtcclxuICAgICAgICB0aGlzLiR0aHVtYlJpZ2h0LnN0eWxlLmxlZnQgPSBsZWZ0ICsgXCJweFwiO1xyXG4gICAgICAgIHRoaXMuJGJhci5zdHlsZS5yaWdodCA9XHJcbiAgICAgICAgICAgICRlbC5vZmZzZXRXaWR0aCAtIGxlZnQgLSAkZWwuZGF0YXNldC50aHVtYldpZHRoIC8gMiArIFwicHhcIjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ==
},{"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/defineProperty":4,"@babel/runtime/helpers/getPrototypeOf":5,"@babel/runtime/helpers/inherits":6,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/possibleConstructorReturn":8}]},{},[11])