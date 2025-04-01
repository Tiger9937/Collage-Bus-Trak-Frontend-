import { Result } from 'postcss';
import { findicon } from './iconfinder';
import { GetDataWithFile } from './Privet.fetch';

async function makeSocialid(URL) {
    if (!URL) return null; // Handle empty or undefined URL

    const match = URL.match(/https?:\/\/([^\/]+)/);
    if (!match) return null; // Handle invalid URL formats

    let domain = match[1]; // Extract domain name

    // Remove the first subdomain if present
    const parts = domain.split(".");
    if (parts.length > 2) {
        parts.shift();
    }
    domain = parts.join("."); // Rebuild domain

    try {
        let Img = await findicon(domain);
        console.log("Actual url",Img.logo_url)

        const midia = await GetDataWithFile('POST', '/midia/CreateMidia',
            JSON.stringify({ SocialLink: URL, Appimage: Img.logo_url }),
            'application/json'
        );

       
        
        return midia

    } catch (error) {
        console.error("Error in makeSocialid:", error);
        return null;
    }
}

export { makeSocialid };
