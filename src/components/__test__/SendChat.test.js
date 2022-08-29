import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { store } from "../../toolkit/store"
import { Provider } from "react-redux"
import SendChat from '../SendChat';


describe('tests SendChat component', () => {

test("change value of input works correctly", () => {
    render(
      <Provider store={store}>
        <SendChat />
      </Provider>
    )
    const inputEl = screen.getByTestId("input")
    expect(inputEl).toBeInTheDocument()
  })


test("send chat", () => {
  render(
    <Provider store={store}>
      <SendChat />
    </Provider>
  )
  const submitChatBtn = screen.getByTestId("submit-chat-btn")
  expect(submitChatBtn).toBeInTheDocument()
 })
 

})
  
  