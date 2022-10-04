import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { store } from "../../toolkit/store"
import { Provider } from "react-redux"
import Signup from '../../components/Signup';

describe('tests Auth Page', () => {

test('renders instructions to start in signup', async () => {
    render(
      <Provider store={store}>
        <Signup />
      </Provider>
    );
    const linkElement = screen.getByText(/Enter your name to start a chart/i);
    expect(linkElement).toBeInTheDocument();
  });
  
it('show btn', async () => {
  render (
    <Provider store={store}>
      <Signup />
    </Provider>
  )
  const linkElement = screen.getByRole("button");
      expect(linkElement.textContent).toBe("Submit");
  })  

})
  