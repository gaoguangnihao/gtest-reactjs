import React from 'react';
import List from './list';

class MainView extends React.Component {

    render() {
    	let head = "GTEST" ;
        return <div id="mainview">
        			<div className="header h1">{head}</div>
        			<List className="list" > </List>
        		</div>
    }
}

export default MainView ;