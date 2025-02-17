import React from "react";
import ListButton from "./ListButton";

function ListItem(props) {
    return (
        <li className="item">
            <div className="item__img">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="item__name">
                {props.desc}
                <strong>{props.name}</strong>
            </div>
            <ListButton itemName={props.name} />
        </li>
    );
}

export default ListItem;
