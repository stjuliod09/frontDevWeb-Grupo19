import React from 'react';
import SideMenu from './SideMenu'; // Asegúrate de que el componente SideMenu esté en esta ruta
import '../styles/Donations.css';

function Donations() {
  const bankAccounts = [
    { id: 1, bank: 'Banco Nacional', account: '0123456789', type: 'Cuenta de Ahorros' },
    { id: 2, bank: 'Banco del Pueblo', account: '987654321', type: 'Cuenta Corriente' }
  ];

  const directContacts = [
    { id: 1, type: 'WhatsApp', contact: '+57 311 222 3344' },
    { id: 2, type: 'Email', contact: 'ayuda@michirescue.org' }
  ];

  return (
    <div className="page-container">
      <SideMenu />
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
    </div>
  );
}

export default Donations;
