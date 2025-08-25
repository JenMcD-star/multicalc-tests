import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import {userEvent} from '@testing-library/user-event'
import { OperandContext } from './context/OperandContext';
import Form from './Form';

describe('form test suite', () => {
  it('disables the button when the operand contains no value', async () => {
    const user = userEvent.setup();

    render(
    <OperandContext.Provider value={{ operand: 0, setOperand: vi.fn() }}>
        <Form />
    </OperandContext.Provider>
    );

    const input = screen.getByLabelText(/calculate with/i);
    await user.clear(input);

    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeDisabled();
  });
});
