import React from 'react';
import './App.css';
import '../src/assets/fonts/fonts.css';
import ListItem from "./components/ListItem"

function App() {
  const imagePath = "/assets/images/character"; // 이미지 경로
  
  return (
    <main>
      <ul className='character-list'>
        <ListItem image={`${imagePath}_01.png`} desc="사랑의" name="하츄핑" />
        <ListItem image={`${imagePath}_02.png`} desc="용기의" name="아자핑" />
        <ListItem image={`${imagePath}_03.png`} desc="희망의" name="차차핑" />
        <ListItem image={`${imagePath}_04.png`} desc="올바른" name="바로핑" />
        <ListItem image={`${imagePath}_05.png`} desc="즐거워" name="라라핑" />
        <ListItem image={`${imagePath}_06.png`} desc="행복의" name="해핑" />
        <ListItem image={`${imagePath}_07.png`} desc="개구쟁이" name="키키핑" />
        <ListItem image={`${imagePath}_08.png`} desc="애교가득" name="아잉핑" />
        <ListItem image={`${imagePath}_09.png`} desc="부끄부끄" name="부끄핑" />
        <ListItem image={`${imagePath}_10.png`} desc="뜨거운" name="부투핑" />
        <ListItem image={`${imagePath}_11.png`} desc="덤벙대는" name="깜빡핑" />
        <ListItem image={`${imagePath}_12.png`} desc="상상력의" name="띠용핑" />
        <ListItem image={`${imagePath}_13.png`} desc="그렁그렁" name="주르핑" />
        <ListItem image={`${imagePath}_14.png`} desc="귀찮아" name="차나핑" />
        <ListItem image={`${imagePath}_15.png`} desc="따라쟁이" name="따라핑" />
        <ListItem image={`${imagePath}_16.png`} desc="날사랑해" name="나르핑" />
        <ListItem image={`${imagePath}_17.png`} desc="겁쟁이" name="무셔핑" />
        <ListItem image={`${imagePath}_18.png`} desc="질투쟁이" name="투투핑" />
        <ListItem image={`${imagePath}_19.png`} desc="친절한" name="차캐핑" />
        <ListItem image={`${imagePath}_20.png`} desc="수다쟁이" name="떠벌핑" />
      </ul>
    </main>
  );
}

export default App;