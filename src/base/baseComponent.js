
import React from 'react';

export default class BaseComponent extends React.Component {

	debug(msg) {
		if (this.DEBUG) {
			console.log(this.prefix + " ==*== " + msg);
		}
	}
}