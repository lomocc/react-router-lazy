"use strict";

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Route = require("react-router/Route");

var _Route2 = _interopRequireDefault(_Route);

var _BundleLoader = require("./BundleLoader");

var _BundleLoader2 = _interopRequireDefault(_BundleLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * react-router v4 组件、模块懒加载
 * props:
 * getComponent: () => Promise<React.Component>
 *
 * import {Route} from 'react-router-lazy';
 * <Route path="/about" getComponent={import('./module/ModuleA')}/>
 */

module.exports = function (_ref) {
  var getComponent = _ref.getComponent,
      props = (0, _objectWithoutProperties3.default)(_ref, ["getComponent"]);

  if (getComponent) {
    return _react2.default.createElement(_Route2.default, (0, _extends3.default)({}, props, {
      component: function component(props) {
        return _react2.default.createElement(_BundleLoader2.default, (0, _extends3.default)({}, props, { getComponent: getComponent }));
      }
    }));
  }
  return _react2.default.createElement(_Route2.default, props);
};