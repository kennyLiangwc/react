import React from "react";
import { Link, Route, BrowserRouter, Switch,HashRouter } from "react-router-dom";
// import Home from "../components/Home/Home.js";
import Page1 from "bundle-loader?lazy!../components/Page/Page1.js"
import Home from 'bundle-loader?lazy!../components/Home/Home'

// const Home = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('../components/Home/Home').default)
//     },'Home')
// }

// const Home = (location, callback) => {
//   require.ensure([], require => {
//     callback(null, require('../components/Home/Home'))
//   }, 'Home')  
// }
// const Page1 = (location, callback) => {
//   require.ensure([], require => {
//     callback(null, require('../components/Page/Home'))
//   }, 'Home')  
// }


// const Home = () => (
// 	<h1>This is Home</h1>	
// )
// const Page = () => (
// 	<h1>This is Page11</h1>
// )
const getRouter = () => (
	<HashRouter>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/page">Page1</Link></li>
			</ul>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/page" component={Page1}></Route>
			</Switch>
		</div>
	</HashRouter>
)
export default getRouter