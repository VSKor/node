require('./scss/main.scss');

import Node from './components/node/Node';
import Table from './components/table/Table';

var Main = new Node;
document.body.appendChild(NodeX.DOMNodes[Main.nid]);

Main.append(new Table({
  className: 'some',
  head: [["a", "b", "c"]],
  body: [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
  ]
}));