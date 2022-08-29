import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { store } from "../../toolkit/store"
import { Provider } from "react-redux"
import ChatList from '../ChatList';

describe('tests ChatList component', () => {

test("check if load more btn shows when length of data is more than 25 messages", () => {
    render(
      <Provider store={store}>
        <ChatList />
      </Provider>
    )
    const loadBtn = screen.getByTestId("loadmorebtn")
    expect(loadBtn).toBeInTheDocument()
  })

  test("check if chats value in localstorage is an empty array when app is first launched on a new browser", () => {
    render(
      <Provider store={store}>
        <ChatList />
      </Provider>
    )
    const state = store.getState()
    const chats = state.chats.chats
    expect(chats).toEqual([])
  })
  
})