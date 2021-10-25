import MainPage from "./pages/MainPage";
import AdminPage from "./pages/Admin/AdminPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/admin/sign-in" component={AdminPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
