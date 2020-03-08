const { Form } = require('../../models');


test("Form.all() should return an array", async () =>{
  const result = await Form.all() ||  [];
  expect(result.length).toEqual(1);
});

test("Form.all() should return an array", async () =>{
  const result = await Form.all() ||  [];
  expect(result.length).toEqual(5);
});
