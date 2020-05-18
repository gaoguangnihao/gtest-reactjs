import React from 'react';
import BaseComponent from './base/baseComponent';
import '../scss/listItem.scss';
import Service from './base/service';

export default class ListItem extends BaseComponent {

	constructor(props) {
		super(props);
		this.DEBUG = true;
		this.prefix = 'ListItem';

		this.state = {
			index: this.props.index
		}
	}

	onKeyDown(e) {
		this.debug("onKeyDown key:" + e.key);
		Service.request('onKeyDown', e.key);
		navigator.mozGmodule.setTestData(this.props.index);

		if(e.key == 'Enter') {
							          //kevin add
		          navigator.mozApps.getSelf().onsuccess = (evt) => {
		              dump('kevin  getSelf onsuccess');
		              var app = evt.target.result;
		              let msgname = 'launcher-closesheet';
		              if (this.props.index == 0) {
		              	msgname = 'launcher-closesheet-system';
		              }	
		              app.connect(msgname).then(function onConnAccepted(ports) {
		                dump('kevin onConnAccepted msgname = ' + msgname);
		                ports.forEach((port) => {
		                  port.postMessage({target:'123'});
		                  dump('kevin postMessage');
		                });
		              }, function onConnRejected(reason) {
		                  dump('kevin onConnRejected reason = ' + reason);
		              });
		            }

		}
	}
	render() {
		this.debug("render");
	    return <div id="list" className='listItem navigable' tabindex="-1"
	   	onKeyDown={(e) => this.onKeyDown(e)}
	    >
	    			<div className="">item {this.state.index}</div>
	    		</div>
	}
}