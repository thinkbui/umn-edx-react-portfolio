function Header(props) {
  return (
    <header>
      <img src="./assets/images/headshot.jpeg" />
      <h1>Ian Bui</h1>
      <nav>
        <ul>
          <li><a onClick={() => props.switchTab("about-me")}>About Me</a></li>
          <li><a onClick={() => props.switchTab("code-examples")}>Code Examples</a></li>
          <li><a onClick={() => props.switchTab("contact")}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
  
export default Header;
