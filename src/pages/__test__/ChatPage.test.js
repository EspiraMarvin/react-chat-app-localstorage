import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { store } from "../../toolkit/store"
import { Provider } from "react-redux"
import ChatPage from '../ChatPage';

describe('tests Chat Page', () => {


test('renders learn react link', () => {
    render(
      <Provider store={store}>
        <ChatPage />
      </Provider>
    );
    const chatPage = screen.getByTestId("chat-page");
    expect(chatPage).toBeInTheDocument();
  });
  

})