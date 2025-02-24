# 개발 코드 설명

## 컴포넌트 동작 흐름

- **App.jsx에서 ListItem 컴포넌트를 사용**  
  `ListItem`은 부모-자식 간 데이터 전달을 위해 `props`를 사용합니다.

- **ListButton에서 props.name을 itemName으로 정의**  
  `itemName`은 로컬스토리지에서 데이터를 저장할 때 사용할 key 값입니다.

- **컴포넌트가 처음 마운트될 때 `useState`와 `useEffect` 실행**  
  `useState`: 초기 렌더링 시 로컬스토리지에서 `itemName`에 해당하는 값을 가져옵니다.  
  `storedLikes`는 로컬스토리지에서 `itemName`(key)에 해당하는 값을 가져오는데, 처음에는 `null`이므로 `false`가 반환되고, `useState(0)`이 실행됩니다.  
  `useEffect`: 초기 렌더링 후, `likes` 값이 바뀔 때마다 변경된 값을 로컬스토리지에 저장합니다.

- **로컬스토리지 저장 및 값 갱신**  
  `useEffect`는 `likes`가 변경될 때마다 `localStorage.setItem(itemName, likes)`로 해당 값이 저장됩니다.  
  `onClick`할 때마다 `setLikes(likes + 1)`을 호출하여 `likes` 값이 증가하고, 이로 인해 `useEffect`가 실행됩니다.

- **새로고침 시 로컬스토리지 값으로 재할당**  
  새로고침 시, 로컬스토리지에 저장된 값으로 `storedLikes`를 재할당하여 `likes` 값을 초기화합니다.

## 기술 스택

- React
- LocalStorage
- useState, useEffect