import React from 'react';
import ReactDom from 'react-dom';
import Hello from './components/Hello.js'
import getRouter from './router/router'

// console.log(getRouter)
if(module.hot) {
	module.hot.accept()
}

ReactDom.render(
	getRouter(),document.getElementById("app")
)