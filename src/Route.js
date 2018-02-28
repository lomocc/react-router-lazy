import React from "react";
import Route from "react-router/Route";
import BundleLoader from "./BundleLoader";
/**
 * react-router v4 组件、模块懒加载
 * props:
 * getComponent: () => Promise<React.Component>
 *
 * import {Route} from 'react-router-lazy';
 * <Route path="/about" getComponent={import('./module/ModuleA')}/>
 */

module.exports = function({getComponent, ...props}){
  if(getComponent){
    return React.createElement(Route, {
      ...props,
      component: function(props){
        return React.createElement(BundleLoader, {...props, getComponent});
      }
    });
  }
  return React.createElement(Route, props);
};