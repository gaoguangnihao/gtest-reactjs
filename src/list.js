
import React from 'react';
import ReactDom from 'react-dom';
import BaseComponent from './base/baseComponent';
//import BaseComponent from 'base-component';
import ListItem from './listItem';
import SimpleNavigationHelper from './base/simpleNavigationHelper';
import Service from './base/service';
import DataStore from './dataStore';

export default class List extends BaseComponent {

	constructor(props) {
		super(props);
		this.DEBUG = true;
		this.prefix = 'list';
		this.debug(' constructor');

	}

	componentWillMount() {
		this.debug("componentWillMount()");
	}
	
	componentDidMount() {
		this.debug("componentDidMount");
		this.navigator = new SimpleNavigationHelper('.navigable', this.element);

		// test service 
		Service.register('onKeyDown', this);

	}

	componentWillUnmount() {
		this.debug("componentWillUnmount()");
	}

	onClick(e) {
		this.debug("onClick");

	}

	onKeyDown(e) {
		this.debug("onKeyDown key:" + e.key);

	}
    render() {
    	this.debug("render");
    	let dom = [];
    	for (var i = 0; i < 3; i++) {
    		dom.push(
    			<ListItem index={i}> </ListItem>
    		);
    	}

        return <div id="list" 
        			ref={(c) => {this.element = c}}
        			onClick={(e) => {this.onClick(e)}}
        			tabindex="-1"
        		>
        			<input className='navigable'
        			ref={(c) => {this.input = c}}
        			 onKeyDown={(e) => {this.onKeyDown(e)}}/>
        			{dom}
        		</div>
    }
}
