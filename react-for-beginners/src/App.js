import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './route/Detail';
import Home from './route/Home';

function App() {
	//router를 render
	//root url(/)이면 Home component를 보여준다.
	//Switch -router를 찾는다.
	//HashRouter 뒤에 /#/url
	//Switch - Route 하나만 렌더링되기위해 사용한다.
	//Link 새로고침없이 유저를 다른 페이지로 이동
	return (
		<Router>
			<Switch>
				<Route path="/Movie">
					<Detail />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}
export default App;
