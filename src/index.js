import react from 'react'
import reactDom from 'react-dom/client'
import App from './Apps/SellerApp';

const root = reactDom.createRoot(document.querySelector('#root'));
root.render(<App />);