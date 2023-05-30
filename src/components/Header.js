function Header(props) {
  return (
    <header>
      <img src={props.headshot_src} />
      <h1>{props.header_name}</h1>
      <nav>
        <ul>
          <li>
            <a className={props.mainTab === "about-me" ? "header_link_highlight" : ""} onClick={() => props.switchTab("about-me")}>
              {props.tab_names.about_me}
            </a>
          </li>
          <li>
            <a onClick={() => props.switchTab("portfolio")}>
              {props.tab_names.portfolio}
            </a>
          </li>
          <li>
            <a onClick={() => props.switchTab("contact")}>
              {props.tab_names.contact}
            </a>
          </li>
          <li>
            <a onClick={() => props.switchTab("resume")}>
              {props.tab_names.resume}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
  
export default Header;
