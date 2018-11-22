import React from 'react';
import List from './list';
import Input from './input';

import BaseComponent from 'g-base-component';

class MainView extends BaseComponent {
  name = 'MainView';
  DEBUG = true;

  tabNames = ['input', 'list'];

  constructor(props) {
    super(props);
    this.state = {
      itemContacts: new Map(),
      logItems: new Map(),
      selectedTabIndex: 0
    };
  }

  onKeyDown(evt) {
    console.log('onKeyDown ', evt.key);
    this.onTabKeyDown(evt);
  }

  onTabKeyDown(evt) {
    let nextIndex;
    switch (evt.key) {
      case 'ArrowRight':
        nextIndex = this.state.selectedTabIndex + 1;
        if (nextIndex <= this.tabNames.length - 1) {
          this.setSelectedTabIndex(nextIndex);
        }
        break;
      case 'ArrowLeft':
        nextIndex = this.state.selectedTabIndex - 1;
        if (nextIndex >= 0) {
          this.setSelectedTabIndex(nextIndex);
        }
        break;
    }
  }

  /**
   * Switch to the tab
   */
  setSelectedTabIndex(index) {
    console.log('setSelectedTabIndex to:', index);
    this.setState({
      selectedTabIndex: index
    });
  }

  render() {
    let head = "GTEST" ;
    let self = this;
    console.log('render, selectedTabIndex = ', this.state.selectedTabIndex);
    const tabs = this.tabNames.map((tabName, index) => {
      const isSelected = index === this.state.selectedTabIndex ? 'selected' : '';
      return (
        <a className={isSelected} key={tabName}>
          <span>{tabName}</span>
        </a>
      );
    });

    let content = '';
    if (this.state.selectedTabIndex === 0) {
      content = <List className="list" > </List>
    } else {
      content = <Input />
    };

    return <div id="mainview" 
            onKeyDown={(e)=>this.onKeyDown(e)}>
            <div className="header h1">{head}</div>
            <gaia-tabs class="h3" underline="child" position="top">
              {tabs}
            </gaia-tabs>
            {content}
        </div>
  }
}

export default MainView ;