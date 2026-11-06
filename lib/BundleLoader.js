"use strict";

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 组件、模块懒加载
 * props:
 * getComponent: () => Promise<React.Component>
 *
 * <BundleLoader getComponent={import('./module/ModuleA')} {...propsOfModuleA}/>
 */
var BundleLoader = function (_React$Component) {
  (0, _inherits3.default)(BundleLoader, _React$Component);

  function BundleLoader() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, BundleLoader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = BundleLoader.__proto__ || (0, _getPrototypeOf2.default)(BundleLoader)).call.apply(_ref, [this].concat(args))), _this), _this.state = { Component: null }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(BundleLoader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var getComponent = this.props.getComponent;

      getComponent().then(function (Component) {
        return _this2.setState({ Component: Component.default || Component });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Component = this.state.Component;
      var _props = this.props,
          getComponent = _props.getComponent,
          others = (0, _objectWithoutProperties3.default)(_props, ["getComponent"]);

      return Component && _react2.default.createElement(Component, others);
    }
  }]);
  return BundleLoader;
}(_react2.default.Component);

module.exports = BundleLoader;