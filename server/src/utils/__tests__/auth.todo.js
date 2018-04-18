import {isPasswordAllowed, userToJSON} from '../auth'

// TODO: Refactor

describe('isPasswordAllowed', () => {
  const disallowedPasswords = ['', 'fffff', 'balhdshf'];
  const allowedPasswords = ['sfkl.e903f.s'];

  allowedPasswords.forEach(pwd => {
    it(`"${pwd}" should be allowed`, () => {
      expect(isPasswordAllowed(pwd)).toBe(true);
    });
  });

  disallowedPasswords.forEach(pwd => {
    it(`"${pwd}" should not be allowed`, () => {
      expect(isPasswordAllowed(pwd)).toBe(false);
    });
  });
});

test('isPasswordAllowed only allows some passwords', () => {
  expect.assertions(2); // tests how many assertions were made
  expect(isPasswordAllowed('fffff')).toBe(false);
  expect(isPasswordAllowed('sfkl.e903f.s')).toBe(true);
})

test('userToJSON excludes secure properties', () => {
  const safeUser = { 
    id: 'some-id',
    username: 'sarah'
  };

  const user = {
    ...safeUser,
    exp: new Date(),
    iat: new Date(),
    hash: 'some really long string',
    salt: 'some shorter string',
  }
  
  let omittedUser = userToJSON(user);
  expect(omittedUser).toEqual(safeUser);
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=auth%20util&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
