import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./store/store";
import PersistentDrawerRight from "./components/PersistentDrawerRight";
import HeroBanner from "./sections/HeroBanner";

const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <PersistentDrawerRight />
          <HeroBanner />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
