import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

jest.mock('../app/components/Body', () => () => <div>Test</div>);

describe('Home Page', () => {
	it('renders body', () => {
		render(<Home />);

		const body = screen.getByText('Test');

		expect(body).toBeInTheDocument();
	});
});
