import {  reducer, screen } from '../../../shared/utils/test-utils';
import SigninFormComponent from './SigninForm.component';

describe('Sign-in Form', () => {
  let signInButton = null;

  beforeEach(() => {
    reducer(<SigninFormComponent />);
    signInButton = screen.getByRole('button', { name: /sign-in/i });
  });

  test('The login button should be in the document', () => {
    // Certifique-se de usar um matcher adequado
    expect(signInButton).toBeInTheDocument();
  });

  test('The login button should initially be disabled', () => {
    // Valida se o botão está desativado
    expect(signInButton).toBeDisabled();
  });
});
