import CtaBanner from '@components/sections/CtaBanner.astro';
import Button from '@components/ui/Button.astro';
import {  Heart, Coffee, Smile, Printer, GitFork, Cpu, CloudUpload } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Printer;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Printer,
                title: 'Outsourcing de Impresión',
                description: 'Simplifica la gestión de tus documentos con tecnología moderna y soporte continuo',
                
            }, 
            {
                icon: GitFork,
                title: 'Consultoría en Procesos de Negocios',
                description: 'Optimiza tus procesos para alcanzar tus objetivos empresariales'
            },
            {
                icon: Cpu,
                title: 'Soluciones Tecnologicas',
                description: 'Equipamos tu oficina con la tecnología que necesitas para triunfar'
            },
            {
                icon: CloudUpload,
                title: 'Digitalización y Organización Documental',
                description: 'El futuro de tu empresa es digital. Nosotros te ayudamos a llegar allí'
            },           
        ]

        
    },
    
    CtaBanner:{
        id: 'CtaBanner',
        features: [
            {
                icon: Smile,
                title: '¿Listo para comenzar?',
                description: 'Contáctanos para obtener más información sobre nuestros servicios',
                
            }, 
            {
                icon: Coffee,
                title: '¡Hablemos!',
                description: 'Estamos aquí para responder a tus preguntas y ayudarte a alcanzar tus objetivos'
            }
        ]
    }
};
