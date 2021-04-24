import {render, screen} from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders Page A link', () => {
        render(<App/>);
        const textElement = screen.getByText(/Click the button/);
        expect(textElement).toBeInTheDocument();
    });

});
