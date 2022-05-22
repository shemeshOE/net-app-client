import { nodesActionTypes } from './nodes.types';

export const addNodes = (parent, children) => ({
  type: nodesActionTypes.ADD_NODES,
  payload: {parent, children},
});

export const setExpand = (node) => ({
  type: nodesActionTypes.SET_EXPAND,
  payload: {node},
});