import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { store } from "../../toolkit/store"
import { Provider } from "react-redux"
import Signup from '../../components/Signup';

describe('tests Auth Page', () => {

test('reners instructions to start in signup', () => {
    render(
      <Provider store={store}>
        <Signup />
      </Provider>
    );
    const linkElement = screen.getByText(/Enter your name to start a chart/i);
    expect(linkElement).toBeInTheDocument();
  });

})
  