function Header(props) {
  function headerLinkHighlight(tab_name) {
    return props.mainTab === tab_name ? "header_link_highlight" : "";
  }
  return (
    <header>
      <img src={props.headshot_src} />
      <h1>{props.header_name}</h1>
      <nav>
        <ul>
          {props.tab_list.map((tab) => (
            <li>
              <a
                className={headerLinkHighlight(tab)}
                onClick={() => props.switchTab(tab)}
              >
                {props.tab_data[tab].name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
  
export default Header;
