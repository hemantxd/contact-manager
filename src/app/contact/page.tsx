import React from 'react'
import { getSessionCookie } from '../lib/session';
import { getContacts } from '../api/contact';

const ContactPage = async () => {
  const user = await getSessionCookie();
  if(!user) {
    return(
      <div>
        Please <a href="/login" className='text-blue-600 hover:underline'>login</a> to view contacts.
      </div>
    )
  }

  const contacts = await getContacts(user.id);
  console.log("contacts : ",contacts)
  if(contacts.length === 0) {
     return(
      <div>
        Please <a href="/contact/new" className='text-blue-600 hover:underline'>to add a contact</a> to your contact list. 
      </div>
    )
  }

  return (
    <div>ContactPage</div>
  )
}

export default ContactPage