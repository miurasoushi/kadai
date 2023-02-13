import {Link} from "react-router-dom";

function Janku() {
  return (
    <div>
        <ul>
            <li>
            <Link to = '/home'>ホーム</Link>
            </li>
            <li>
            <Link to = '/jirou'>ラーメン二郎</Link>
            </li>
            <li>
            <Link to = '/yokohama'>横浜家系ラーメン</Link>
            </li>
        </ul>
      <h1>ジャンクガレッジ</h1>
      <img src="/janku_shop.jpg" alt="ジャンクの写真"></img>
      <h2>メニュー</h2>
      <img src="/janku_menu.jpg" alt=""></img>
      <h3>私のおすすめ</h3>
      <p>
        私のオススメはまぜそばです。<br></br>
        無料でトッピングの量を増やすことができるのですがエビマヨ倍増しのその他全増しが一番オススメです。
      </p>
    </div>
  );
}

export default Janku;
