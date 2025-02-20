import React, { useState, useEffect } from "react";

function ListButton({ itemName }) {
    // 로컬 스토리지에서 초기 값 불러오기
    const storedLikes = localStorage.getItem(itemName);
    const [likes, setLikes] = useState(storedLikes ? parseInt(storedLikes) : 0);

    useEffect(() => {
        // 좋아요 값이 변경될 때마다 로컬 스토리지에 저장
        localStorage.setItem(itemName, likes);
    }, [likes, itemName]);

    return (
        <span className="item__likes">
            <button className="likes__btn" onClick={() => setLikes(likes + 1)}>
                <img src="/assets/images/ico_like.png" alt="좋아요" />
            </button>
            <b className="likes__count">{likes}</b>
        </span>
    );
}

export default ListButton;