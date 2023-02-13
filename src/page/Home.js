import {Link} from "react-router-dom";

function Home() {
    return (
      <div>
        <h1>私がオススメするラーメン店</h1>
        <ul>
            <li>
            <Link to = '/janku'>ジャンクガレッジ</Link>
            </li>
            <li>
            <Link to = '/jirou'>ラーメン二郎</Link>
            </li>
            <li>
            <Link to = '/yokohama'>横浜家系ラーメン</Link>
            </li>
        </ul>
      </div>
    );
  }
  
  export default Home;