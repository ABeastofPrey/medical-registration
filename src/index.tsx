import "./styles.scss";
import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
// import { Tester } from "./test";
// import { RouterApp } from "./demo/router-app";
import { TodoApp } from "./demo/dsc/todo-app";
import store from "./demo/dsc/store";
import "antd-mobile/dist/antd-mobile.css";

const rootElement = document.getElementById("root");

// class App extends React.Component {
//   public render(): React.DetailedHTMLProps<
//     React.HTMLAttributes<HTMLDivElement>,
//     HTMLDivElement
//   > {
//     return (
//       <div className="App">
//         <Tester />
//       </div>
//     );
//   }
// }

const renderApp = () => {
  render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
    rootElement
  );
};
store.subscribe(renderApp);
renderApp();
