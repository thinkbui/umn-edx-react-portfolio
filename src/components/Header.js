function Header(props) {
  return (
    <header>
      <img src={props.headshot_src} />
      <h1>{props.header_name}</h1>
      <nav>
        <ul>
          <li><a onClick={() => props.switchTab("about-me")}>About Me</a></li>
          <li><a onClick={() => props.switchTab("code-examples")}>Portfolio</a></li>
          <li><a onClick={() => props.switchTab("contact")}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
  
export default Header;
