interface Category {
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  {
    name: 'Impresion y Digitalizacion',
    slug: 'impresion-y-digitalizacion',
    description: 'Impresion y Digitalizacion'

  },

  {
    name: 'Tecnologia',
    slug: 'Tecnologia',
    description: 'Tecnologia'
  },

  {
    name: 'Software e informatica',
    slug: 'Software-e-informatica',
    description: 'Software e informatica'

  },
  
];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}