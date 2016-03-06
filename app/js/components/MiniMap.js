/*
 * MiniMap
 * Shows a small map of the UML Diagram. Includes navigation buttons.
 */

import React, { Component } from 'react';
import UMLDiagram from './UMLDiagram';

class MiniMap extends Component {
  render() {
    const dispatch = this.props.dispatch;
    return (
      <div className='MiniMap'>
        <div className='buttons'>
          <button>struct</button>
          <button>file</button>
          <button>package</button>
        </div>
        <div className='map'>
          <UMLDiagram 
            data={this.props.data}
            miniMap={true}
          />
        </div>
      </div>
    );
  }
}
MiniMap.defaultProps = {
  data: null,
};

export default MiniMap;