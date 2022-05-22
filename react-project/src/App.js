import './App.css';
import Write from './component/Write';
import Home from './component/Home';
import View from './component/View';
import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as BrowserRouter,
	Switch,
	Route,
	Routes,
} from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/write/*" element={<Write />}></Route>
					<Route path="/view/*" element={<View />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
