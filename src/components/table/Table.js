'use strict';

import Node from '../node/Node';

class Table extends Node {
  constructor(props = {}) {
    super(Object.assign(props, {
      element: 'table'
    }));

    var tableParts = ['head', 'body', 'foot'];
    for (let i in tableParts) {
      let part = tableParts[i];
      if (props[part]) {
        this.addTablePart.call(this, part, props[part]);
      }
    }
  }

  appendRow(data) {
    this.append({
      element: 'tr'
    }, (appendedNode)=> {
      for (var i in data) {
        appendedNode.append({
          element: 'td',
          innerHTML: data[i]
        });
      }
    });
  }

  addTablePart(part, data) {
    this[part] = this.append({element: `t${part}`});
    console.log(data);
    for (var i in data) {
      console.log(data[i]);
      this.appendRow.call(this[part], data[i]);
    }
  }
}

export default Table;