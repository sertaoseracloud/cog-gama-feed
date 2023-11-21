import { Fragment } from "react";

export function Post(props){
    return(
        <Fragment>
             <strong>{props.title}</strong>
             <p>{props.content}</p>
        </Fragment>
    )
}
