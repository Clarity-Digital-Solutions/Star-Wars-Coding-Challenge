import { render, screen } from '@testing-library/react';
import { HelloWorld } from './HelloWorld';

describe('HelloWorld', () => {
  it('renders correctly with default value', () => {
    render(<HelloWorld />);
    expect(screen.queryByText('Hello World')).toBeInTheDocument();
  });
});
