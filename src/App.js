import React, { Component } from 'react';
import Toolbar from './Toolbar'
import Drawer from 'material-ui/Drawer'
import Button from 'material-ui/Button'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: false
    }
  }
  

  toggleDrawer = (value) => {
    this.setState({
      drawerOpen: value
    })
  }

  render() {
    return (
      <div>
        <Drawer open={this.state.drawerOpen} onClose={() => this.toggleDrawer(false)}>
          <Button raised>hello</Button>
        </Drawer>
        <Toolbar title="Hello!" onMenuClick={() => this.toggleDrawer(true)}/>
      </div>
    );
  }
}

export default App;
