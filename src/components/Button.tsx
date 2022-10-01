import React from "react";

export default function Button(
    props: {
        children: React.ReactNode
        handleClick: () => void
    }
) {
    return  <button onClick={props.handleClick}>
                {props.children}
            </button>
}