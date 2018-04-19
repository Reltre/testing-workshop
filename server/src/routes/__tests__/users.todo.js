//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=users%20integration&em=
*/
import axios from 'axios';
import startServer from '../../start'
import {generate} from 'til-server-test-utils'
jest.unmock('axios')
let server;


beforeAll(async () => { 
 server = await startServer({port: 8788}) 
})

afterAll(() => { 
  server.close();
 })
test('user CRUD', async () => {
  const loginForm = generate.loginForm();
  const createUser = await axios.post(
    'http://localhost:8788/api/auth/register',
    loginForm
  );
  const result = await axios.get('http://localhost:8788/api/users')
  console.log(result.data)
})

test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
