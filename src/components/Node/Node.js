'use strict';

class Node {
  constructor(props = {}) {
    if (!window.NodeX) {
      window.NodeX = {
        Nodes: [],
        DOMNodes: [],
        events: {},
        subscribers: {},
        Node: function (DOMElement) {
          return this.Nodes[this.DOMNodes.indexOf(DOMElement)];
        }
      };
    }

    this.nid = NodeX.DOMNodes.length;

    NodeX.Nodes[this.nid] = this;
    NodeX.DOMNodes[this.nid] = this.createElement.call(this, props);
  }

  createElement(props = {}) {
    var node = document.createElement(props.element || "div");
    delete props.element;

    if (props.style) {
      for (var prop in props.style) {
        node.style[prop] = props.style[prop];
      }
      delete props.style;
    }

    if (props.attrs) {
      for (var prop in props.attrs) {
        node.setAttribute(prop, props.attrs[prop]);
      }
      delete props.attrs;
    }

    return Object.assign(node, props);
  }

  append(appendNode, callback) {
    var nid = NodeX.Nodes.indexOf(appendNode) || NodeX.DOMNodes.indexOf(appendNode);
    if (nid === -1) {
      var newNode = new Node(appendNode);
      nid = newNode.nid;
    }
    let appendedNode = newNode || NodeX.Nodes[nid];
    NodeX.DOMNodes[this.nid].appendChild(NodeX.DOMNodes[nid]);


    if(callback){
      callback.call(this, appendedNode);
    }
    return appendedNode;
  }
}

export default Node;