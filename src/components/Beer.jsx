function Beer(props){
    return (
        <div className="beer">
            {props.info.title}
            {props.info.sub}

        </div>
    )
}

export default Beer