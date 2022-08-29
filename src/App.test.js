import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { store } from "./toolkit/store"
import { Provider } from "react-redux"
import App from './App';

describe('tests App.js', () => {

  test('check if user is not signed returns the right user state isLoggedin', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const state = store.getState()
    const isUserAuthenticated = state.users.isLoggedIn
    expect(isUserAuthenticated).toBe(false);
  });

})





