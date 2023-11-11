import React, { useEffect, useState } from "react"; // 必ず必要
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  console.log("App");
  const [num, setNum] = useState(0); // num = stateの変数名、setNum = stateを更新していく関数名
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // 第二引数に設定した変数の状態が変化した時
  useEffect(() => {
    console.log("numの状態が更新されました");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
      <ColorfullMessage color="pink">元気です！</ColorfullMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>😆</p>}
    </>
  );
};

export default App; // 他のファイルでも使えるようにexport
