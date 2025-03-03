import React from 'react';
import '../styles/Donations.css';

function Donations() {
  const bankAccounts = [
    { id: 1, bank: 'Banco de Ejemplo', account: '123456789', type: 'Cuenta de Ahorros' },
    { id: 2, bank: 'Banco de Prueba', account: '987654321', type: 'Cuenta Corriente' }
  ];

  const digitalOptions = [
    { id: 1, name: 'Nequi', details: 'Transfiere desde la app Nequi' },
    { id: 2, name: 'Daviplata', details: 'Transfiere desde la app Daviplata' }
  ];

  const directContacts = [
    { id: 1, type: 'WhatsApp', contact: '+57 300 1234567' },
    { id: 2, type: 'Email', contact: 'ayuda@example.com' }
  ];

  return (
    <div className="donations-page">
      <div className="donations-container">
        <h2>Canales de Donación</h2>
        
        <section className="donation-section">
          <h3>Cuentas Bancarias</h3>
          <ul className="donation-list">
            {bankAccounts.map((account) => (
              <li key={account.id} className="donation-item">
                <p><strong>{account.bank}</strong></p>
                <p>{account.account} - {account.type}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="donation-section">
          <h3>Donaciones Digitales</h3>
          <ul className="donation-list">
            {digitalOptions.map((option) => (
              <li key={option.id} className="donation-item">
                <p><strong>{option.name}</strong></p>
                <p>{option.details}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="donation-section">
          <h3>Contacto para Apoyo Directo</h3>
          <ul className="donation-list">
            {directContacts.map((contact) => (
              <li key={contact.id} className="donation-item">
                <p><strong>{contact.type}</strong></p>
                <p>{contact.contact}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Donations;
