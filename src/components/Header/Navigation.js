import { tab_data } from "./../../constants/Constants"

function Navigation(props) {
  function headerLinkHighlight(tab_name) {
    return props.mainTab === tab_name ? "header_link_highlight" : "";
  }
  return (
    <li>
      <a
        className={headerLinkHighlight(props.tab)}
        onClick={() => props.switchTab(props.tab)}
      >
        {tab_data[props.tab].name}
      </a>
    </li>
  )
}

export default Navigation;
