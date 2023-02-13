import {Link} from "react-router-dom";

function Yokohama() {
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
            <Link to = '/jirou'>ラーメン二郎</Link>
            </li>
        </ul>
          <h1>横浜家系ラーメン</h1>
          <img src="/yokohama_shop.jpg" alt="ジャンクの写真"></img>
          <h2>メニュー</h2>
          <img src="/yokohama_menu.jpg" alt="ジャンクの写真"></img>
          <h3>私のおすすめ</h3>
          <p>私のオススメは家系ラーメンです。<br></br>
          なんとも癖になる味となっていて鬼りぴするぐらい美味しいです。
          </p>
        </div>
      );
    }
  
  export default Yokohama;