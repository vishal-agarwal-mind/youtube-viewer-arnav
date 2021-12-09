import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Container from "./components/container";

const App = () => <Provider store={store}>
    <Container />
</Provider>

export default App;