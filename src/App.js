import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addNodes, setExpand } from './redux/nodes/nodes.actions';
import API from './api/api';
import NodeLevel from './components/node-level/node-level';

function App(props) {
  const getChildren = (parent) => {
    if (!parent || !parent.children) {
      API.get(`/getChildren?node_id=${parent !== undefined ? parent.node_id : ''}`).then(
        (response) => {
          props.addNodes(parent, response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    } else if (parent) {
      props.setExpand(parent);
    }
  }

  useEffect(() => {
    if (props.nodes.length === 0) {
      API.get('/getChildren').then(
        (response) => {
          props.addNodes(undefined, response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [props]);

  return (
    <div className="App">
      <NodeLevel nodes={props.nodes} onClick={getChildren} expand={true}/>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addNodes: (parent, children) => {
    dispatch(addNodes(parent, children));
  },
  setExpand: (node) => {
    dispatch(setExpand(node));
  }
});

const mapStateToProps = ({nodes}) => {
  return {nodes: nodes.nodes};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
