// app/nfc-redirect/page.tsx
import { redirect } from 'next/navigation';
import NFCRedirectPage from './components/NFCRedirectPage';
import { defaultConfig } from './config/defaultConfig';

// This page will redirect after a few seconds
// You can also trigger redirect via NFC tap

export default async function Page() {
  // Optional: Add logic here to handle NFC tap events
  // or other server-side operations
  
  return <NFCRedirectPage config={defaultConfig} />;
}