import Navigation from "./Header/Navigation"
import { headshot_src, header_name, tab_list } from "./../constants/Constants"

function Header(props) {
  return (
    <header>
      <img src={headshot_src} />
      <h1>{header_name}</h1>
      <nav>
        <ul>
          {tab_list.map((tab) => (
            <Navigation
              key={tab}
              tab={tab}
              switchTab={props.switchTab}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
  
export default Header;
