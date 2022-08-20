import { render, screen } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals';
import Albums from '@/components/Albums/Albums';
/**
 * @vitest-environment jsdom
 */

describe('this is a description', () => {
  it('renders albums', () => {
    render(<Albums />);
    const title = screen.getByText(/Albums/i);
    expect(title.textContent).toBe('Albums');
    // expect(title).toBeVisible();
  });
});
