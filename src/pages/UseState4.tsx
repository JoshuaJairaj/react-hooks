import { useState } from 'react';

export default function UseState4() {
  const [form, setForm] = useState({
    firstName: 'Joshua',
    lastName: 'Jayaraj J',
    email: 'joshua@gmail.com',
  });

  return (
    <>
      <label>
        First name:
        <input
        className='border'
          value={form.firstName}
          onChange={e => {
            console.log(e)
            setForm({
              ...form,
              firstName: e.target.value
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input
        className='border'
          value={form.lastName}
          onChange={e => {
            setForm({
              ...form,
              lastName: e.target.value
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
        className='border'
          value={form.email}
          onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            });
          }}
        />
      </label>
      <p>
        {form.firstName}{' '}
        {form.lastName}{' '}
        {form.email}
      </p>
    </>
  );
}
