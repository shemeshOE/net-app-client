import { nodesActionTypes } from './nodes.types';

const INITIAL_STATE = {
  nodes: [],
};

const addNodesToParent = (parent, children) => {
  if (parent) {
    parent.isExpanded = true;
    parent.children = children;
  }
}

const nodesResults = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case nodesActionTypes.ADD_NODES:
      if (action.payload.parent) {
        addNodesToParent(action.payload.parent, action.payload.children);
      }
      return {
        ...state,
        nodes: action.payload.parent ? [...state.nodes] : [...action.payload.children],
      };
    case nodesActionTypes.SET_EXPAND:
      action.payload.node.isExpanded = action.payload.node.isExpanded ? false : true;
      return {
        ...state,
        nodes: [...state.nodes],
      } 
    default:
      return state;
  }
};

export default nodesResults;
