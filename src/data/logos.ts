import type { ImageMetadata } from 'astro';

// Import your logo images
// Replace these imports with your actual logo files
import logo1 from '../assets/images/logos/logoLexmark.svg';
import logo2 from '../assets/images/logos/logoRicoh.svg';
import logo3 from '../assets/images/logos/logoMicrosoft.svg';
import logo4 from '../assets/images/logos/logoKaspersky.svg';

export interface Logo {
    src: ImageMetadata;
    alt: string;
    link?: string;
    target?: string;

}

export interface LogoList {
    id: string;
    logos: Logo[];
    link?: string;
    target?: string; 
  
}

// Example logo lists with imported images
export const logoLists: Record<string, LogoList> = {
    main: {
        id: 'main',
        logos: [
            {
                src: logo1,
                alt: 'Logo 1',
                link: 'https://www.lexmark.com/',
                target: 'https://www.lexmark.com/',
            },
            {
                src: logo2,
                alt: 'Logo 2',
                link: 'https://www.ricoh.com/',
            },
            {
                src: logo3,
                alt: 'Logo 3',
                link: 'https://www.microsoft.com/',
            },
            {
                src: logo4,
                alt: 'Logo 4',
                link: 'https://www.kaspersky.com/',
            },
        ]
    }
};
