import NFCRedirectPage from './components/NFCRedirectPage';
import { defaultConfig } from './config/defaultConfig';

export default async function Page() {
    return (
        <div>
            <NFCRedirectPage config={defaultConfig} />
        </div>
    );
}