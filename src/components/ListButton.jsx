import React, { useState, useEffect } from "react";

function ListButton({ itemName }) {
    // 로컬스토리지에서 초기 값 불러오기
    const storedLikes = localStorage.getItem(itemName);
    const [likes, setLikes] = useState(storedLikes ? parseInt(storedLikes) : 0); // 로컬스토리지는 문자열만 저장 가능, 정수로 변환 parseInt()

    useEffect(() => {
        // likes 값이 변경될 때마다 로컬스토리지에 저장 (key, value)
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