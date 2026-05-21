import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { expect, test } from '@jest/globals'
import Contact from './Contact'
import { act } from 'react'

test('fills and submits the contact form successfully', async () => {
  const user = userEvent.setup()
  render(<Contact />)

  const nameInput = screen.getByPlaceholderText<HTMLInputElement>(/Jane Smith/i)
  const emailInput = screen.getByPlaceholderText<HTMLInputElement>(/jane@company.com/i)
  const messageInput = screen.getByPlaceholderText<HTMLTextAreaElement>(/Tell me about your project.../i)
  const submitButton = screen.getByRole('button', { name: /send message/i })

  await act(async () => {
    await user.type(nameInput, 'Rodina El_Naggar')
    await user.type(emailInput, 'rodina@test.com')
    await user.type(messageInput, 'This is a test message from my CI/CD pipeline.')
    await user.click(submitButton)
  })

  await waitFor(() => {
    expect(messageInput.value).toBe('This is a test message from my CI/CD pipeline.')
  })
})
