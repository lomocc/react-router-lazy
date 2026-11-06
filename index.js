/**
 * react-router 懒加载
 * Created by vincent on 2018/01/25.
 *
 * import {Route} from 'react-router-lazy';
 * <Route path="/about" getComponent={()=>import('./modules/ModuleA')}/>
 *
 */
var v3 = require('./lib/v3');
var Route = require('./lib/Route');
var BundleLoader = require('./lib/BundleLoader');

v3.Route = Route;
v3.BundleLoader = BundleLoader;
v3.v3 = v3;
module.exports = v3;