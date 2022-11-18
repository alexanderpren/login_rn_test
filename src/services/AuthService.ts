

export type AuthData = {
  token: string;
  email: string;
  name: string;
};
const signIn = (email: string, _password: string): Promise<AuthData> => {
  console.log('Sending to API Login ');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: JWTTokenMock,
        email: email,
        name: 'Alex Pren',
      });
    }, 2500);
  });
};

export const authService = {
  signIn,
};

const JWTTokenMock = 'TokenTest123';
