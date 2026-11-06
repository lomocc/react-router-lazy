import React from "react";
/**
 * 组件、模块懒加载
 * props:
 * getComponent: () => Promise<React.Component>
 *
 * <BundleLoader getComponent={import('./module/ModuleA')} {...propsOfModuleA}/>
 */
class BundleLoader extends React.Component {
  state = { Component: null };
  componentDidMount() {
    const { getComponent } = this.props;
    getComponent().then((Component) => this.setState({ Component: Component.default || Component }));
  }
  render() {
    const { Component } = this.state;
    const { getComponent, ...others } = this.props;
    return Component && React.createElement(Component, others);
  }
}
module.exports = BundleLoader;