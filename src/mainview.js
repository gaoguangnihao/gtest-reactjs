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

         // request an ad when the DOM is loaded
      document.addEventListener("DOMContentLoaded", () => {
        showAds();
      });

      function showAds(){
        getKaiAd({
          publisher: '9114a075-0291-4376-abda-4309bee4f036',
          app: 'ECbook',
          slot: 'List Level',
          
          //h: 264,
          h: 100,
          w: 240,

          // Max supported size is 240x264
          // container is required for responsive ads
          container: document.getElementById('ad-container'),
          onerror: err => console.error('Custom catch:', err),
          onready: ad => {
            console.log('onready');

            /*// Ad is ready to be displayed
            let button = document.getElementById('button');
            button.addEventListener('click', function btnListener() {

              button.removeEventListener('click', btnListener)

              // calling 'display' will display the ad
              ad.call('display')
            })

            // user clicked the ad
            ad.on('click', () => console.log('click event') )

            // user closed the ad (currently only with fullscreen)
            ad.on('close', () => console.log('close event') )

            // the ad succesfully displayed
            ad.on('display', () => console.log('display event') )*/

            // Ad is ready to be displayed
            // calling 'display' will display the ad
            ad.call('display', {

              // In KaiOS the app developer is responsible
              // for user navigation, and can provide
              // navigational className and/or a tabindex
              tabindex: 0,

              // if the application is using
              // a classname to navigate
              // this classname will be applied
              // to the container
              navClass: 'items',

              // display style will be applied
              // to the container block or inline-block
              display: 'block',
            })
          }
        });
      }
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