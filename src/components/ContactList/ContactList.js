import React from 'react';
import Contact from 'components/Contact/Contact';

const ContactList = ({ data, onDeleteContact }) => {
  return (
    <section>
      <ul>
        {data.map(e => (
          <Contact key={e.id} name={e.name} number={e.number} onDeleteContact={onDeleteContact}>
                     <button onClick={() => onDeleteContact(e.id)}> Delete </button>
                      </Contact>
        ))}
      </ul>
    </section>
  );
};

export default ContactList;
