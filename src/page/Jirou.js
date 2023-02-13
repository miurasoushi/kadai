import {Link} from "react-router-dom";

function Jirou() {
    return (
        <div>
            <ul>
            <li>
            <Link to = '/home'>ホーム</Link>
            </li>
            <li>
            <Link to = '/janku'>ジャンクガレッジ</Link>
            </li>
            <li>
            <Link to = '/yokohama'>横浜家系ラーメン</Link>
            </li>
        </ul>
          <h1>ラーメン二郎</h1>
          <img src="/jirou_shop.jpg" alt="ジャンクの写真"></img>
          <h2>メニュー</h2>
          <img src="/jirou_menu.jpg" alt="ジャンクの写真"></img>
          <h3>私のおすすめ</h3>
          <p>私のオススメは豚ラーメンの大盛りです。<br></br>
          とにかくボリュームがすごいのとチャーシューが肉厚でめっちゃおいしいです。
          </p>
        </div>
      );
    }
  
  export default Jirou;