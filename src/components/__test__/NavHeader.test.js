import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { store } from "../../toolkit/store"
import { Provider } from "react-redux"
import NavHeader from '../NavHeader';

describe('tests NavHeader component', () => {

test('renders Chat', () => {
    render(
      <Provider store={store}>
        <NavHeader />
      </Provider>
    );
    const linkElement = screen.getByText(/Chat/i);
    expect(linkElement).toBeInTheDocument();
  });

})