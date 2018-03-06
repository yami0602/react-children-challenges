import React from "react";
import ReactDOM from "react-dom";
// import targetIcon from "./images/target-icon.jpg";
import "./index.css";

// 2 - Add NavItem component.
// - The NavItem should take a url prop and the link text as a child, then render an anchor tag (a) element with that text, and pointing url.

// function Nav({ children }) {
//   let items = React.Children.toArray(children);
//   for (let i = items.length - 1; i >= 1; i--) {
//     items.splice(
//       i,
//       0,
//       <span key={i} className="separator">
//         |
//       </span>
//     );
//   }
//   return <div className="nav">{items}</div>;
// }

function IconButton({ children }) {
  return (
    <div className="icon">
      <i class="fas fa-exclamation-triangle" />
      {children}
    </div>
  );
}

function NavItem({ children }) {
  return <a className="icon">{children}</a>;
}

function Nav({ children }) {
  let items = React.Children.toArray(children);
  if (items != children) {
    return Demo();
  } else {
    return <div className="nav">{items}</div>;
  }
}

function Demo() {
  return (
    <div>
      <IconButton>Something went wrong!</IconButton>

      <NavItem url="https://google.com">Google</NavItem>
      <NavItem url="https://slack.com">Slack</NavItem>
    </div>
  );
}

ReactDOM.render(<Demo />, document.getElementById("root"));
