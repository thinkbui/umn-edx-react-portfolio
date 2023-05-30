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
          <li>
            <a
              className={headerLinkHighlight("about-me")}
              onClick={() => props.switchTab("about-me")}
            >
              {props.tab_names.about_me}
            </a>
          </li>
          <li>
            <a
              className={headerLinkHighlight("portfolio")}
              onClick={() => props.switchTab("portfolio")}
            >
              {props.tab_names.portfolio}
            </a>
          </li>
          <li>
            <a
              className={headerLinkHighlight("contact")}
              onClick={() => props.switchTab("contact")}
            >
              {props.tab_names.contact}
            </a>
          </li>
          <li>
            <a
              className={headerLinkHighlight("resume")}
              onClick={() => props.switchTab("resume")}
            >
              {props.tab_names.resume}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
  
export default Header;
