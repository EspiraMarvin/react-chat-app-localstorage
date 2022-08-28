import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Signup from './components/Signup';
import { store } from "./toolkit/store"
import { Provider } from "react-redux"
import ChatPage from './pages/ChatPage';
import NavHeader from './components/NavHeader';
import SendChat from './components/SendChat';


test('eners instructions to start in signup', () => {
  render(
    <Provider store={store}>
      <Signup />
    </Provider>
  );
  const linkElement = screen.getByText(/Enter your name to start a chart/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Chat', () => {
  render(
    <Provider store={store}>
      <NavHeader />
    </Provider>
  );
  const linkElement = screen.getByText(/Chat/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <ChatPage/>
    </Provider>
  );
  const chatPage = screen.getByTestId("chat-page");
  expect(chatPage).toBeInTheDocument();
});

test("change value of input works correctly", () => {
  render(
    <Provider store={store}>
      <SendChat />
    </Provider>
  )
  const inputEl = screen.getByTestId("input")
  expect(inputEl).toBeInTheDocument()
})
