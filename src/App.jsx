import React from 'react';
import './App.css';
import '../src/assets/fonts/fonts.css';
import ListItem from "./components/ListItem"

function App() {
  const imagePath = "/src/assets/images/"; // 경로를 변수로 설정
  
  return (
    <main>
      <ul className='character-list'>
        <ListItem image={`${imagePath}/character_01.png`} desc="사랑의" name="하츄핑" />
        <ListItem image={`${imagePath}/character_02.png`} desc="용기의" name="아자핑" />
        <ListItem image={`${imagePath}/character_03.png`} desc="희망의" name="차차핑" />
        <ListItem image={`${imagePath}/character_04.png`} desc="올바른" name="바로핑" />
        <ListItem image={`${imagePath}/character_05.png`} desc="즐거워" name="라라핑" />
        <ListItem image={`${imagePath}/character_06.png`} desc="행복의" name="해핑" />
        <ListItem image={`${imagePath}/character_07.png`} desc="개구쟁이" name="키키핑" />
        <ListItem image={`${imagePath}/character_08.png`} desc="애교가득" name="아잉핑" />
        <ListItem image={`${imagePath}/character_09.png`} desc="부끄부끄" name="부끄핑" />
        <ListItem image={`${imagePath}/character_10.png`} desc="뜨거운" name="부투핑" />
        <ListItem image={`${imagePath}/character_11.png`} desc="덤벙대는" name="깜빡핑" />
        <ListItem image={`${imagePath}/character_12.png`} desc="상상력의" name="띠용핑" />
        <ListItem image={`${imagePath}/character_13.png`} desc="그렁그렁" name="주르핑" />
        <ListItem image={`${imagePath}/character_14.png`} desc="귀찮아" name="차나핑" />
        <ListItem image={`${imagePath}/character_15.png`} desc="따라쟁이" name="따라핑" />
        <ListItem image={`${imagePath}/character_16.png`} desc="날사랑해" name="나르핑" />
        <ListItem image={`${imagePath}/character_17.png`} desc="겁쟁이" name="무셔핑" />
        <ListItem image={`${imagePath}/character_18.png`} desc="질투쟁이" name="투투핑" />
        <ListItem image={`${imagePath}/character_19.png`} desc="친절한" name="차캐핑" />
        <ListItem image={`${imagePath}/character_20.png`} desc="수다쟁이" name="떠벌핑" />
      </ul>
    </main>
  );
}

export default App;