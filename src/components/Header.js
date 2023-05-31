import Navigation from "./Header/Navigation"

function Header(props) {
  return (
    <header>
      <img src={props.headshot_src} />
      <h1>{props.header_name}</h1>
      <nav>
        <ul>
          {props.tab_list.map((tab) => (
            <Navigation
              tab={tab}
              tab_data={props.tab_data}
              switchTab={props.switchTab}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
  
export default Header;
