const NodeLevel = (props) => {
    return (
        <div style={{display: props.expand ? 'block' : 'none', marginInlineStart:'5vw', textAlign: 'start', width:'fit-content'}}>
            {props.nodes.map((n) => {
                return (
                    <>
                        <div onClick={() => props.onClick(n)} key={n.node_id} style={{cursor:'pointer'}}>{n.isExpanded ? '⮟' : '➤'}{n.node_name}</div>
                        {n.children && n.children.length > 0 && <NodeLevel nodes={n.children} onClick={props.onClick} expand={n.isExpanded}/>}
                    </>)
            })}
        </div>
    );
}

export default NodeLevel;