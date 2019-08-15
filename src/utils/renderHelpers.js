import React, {Fragment} from "react";
export function renderParaElement(contents) {
    return contents.map((content, index) => {
        return (
            <p key={index}>{content}</p>
        )
    })
}

export function renderBreakElement(contents) {
    return contents.map((content, index) => {
        return (
            <Fragment key={index}>{content}<br/></Fragment>
        )
    })
}

export function renderListElement(contents) {
    return contents.map((content, index) => {
        return (
            <li key={index}>{content}</li>
        )
    })
}