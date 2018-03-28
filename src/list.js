
import React from 'react';
import ReactDom from 'react-dom';
//import BaseComponent from './base/baseComponent';
import BaseComponent from 'g-base-component';
import ListItem from './listItem';
import SimpleNavigationHelper from './base/simpleNavigationHelper';
//import SimpleNavigationHelper from '../node_modules/simple-navigation-helper';
import Service from './base/service';
import DataStore from './dataStore';

import {compare} from './utils/utils.js';
import Pinyin from './utils/pinyin.js';

export default class List extends BaseComponent {
	DEBUG = true;
	
	constructor(props) {
		super(props);

		this.prefix = 'list';
		this.debug(' constructor 12345');
	}

	componentWillMount() {
		this.debug("componentWillMount()");
	}
	
	componentDidMount() {
		this.debug("componentDidMount");
		this.navigator = new SimpleNavigationHelper('.navigable', this.element);

		// test service 
		Service.register('onKeyDown', this);

		// test utils
		var array = ['张','高','王','赵'];
		var result = array.sort(compare);
		this.debug(result);

		this.debug(Pinyin.getFullChars('张').toLowerCase());
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
        			<div className='icon'></div>
        			<input className='navigable'
        			ref={(c) => {this.input = c}}
        			 onKeyDown={(e) => {this.onKeyDown(e)}}/>
        			{dom}
        		</div>
    }
}
