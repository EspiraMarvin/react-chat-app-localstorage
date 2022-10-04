import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { store } from "../../toolkit/store"
import { Provider } from "react-redux"
import Signup from '../Signup';


describe('tests sign up component', () => {

    test('renders instructions to start in signup', async () => {
        render(
          <Provider store={store}>
            <Signup />
          </Provider>
        );
        const instructElement = screen.getByText(/Enter your name to start a chart/i);
        expect(instructElement).toBeInTheDocument();
      });
      

      test('checks if submit button renders', async () => {
        render(
          <Provider store={store}>
            <Signup />
          </Provider>
        );
      //  const submitBtn = screen.getByRole("submit-btn")
      const submitBtn = screen.getByRole("button")
      expect(submitBtn.textContent).toBe("Submit")
      });
      

test("input contains initial value of undefined", async () => {
    render(
        <Provider store={store}>
            <Signup />
        </Provider>
    )
    const inputEl = screen.getByTestId("input")

    expect(inputEl.value).toBe(undefined)
})

test("display error message when user does not add a name whhile signing up", () => {
    render(
        <Provider store={store}>
            <Signup />
        </Provider>
    )
    const submitBtn = screen.getByTestId("submit-btn")

    fireEvent.click(submitBtn)

    setTimeout(() => {

        const instructElement = screen.getByText(/Enter a username/i);
        expect(instructElement).toBeInTheDocument()
    }, 1000)

})

  
})
