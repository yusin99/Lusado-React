/* eslint-disable prettier/prettier */
/* eslint-disable semi */
export default interface ProductItemProps {
  item: {
    id: number;
    brand: {
      id: number;
      name: string;
    };
    category: {
      id: number;
      name: string;
      parent: string;
      features: {
        id: number;
        possible_values: [
          {
            id: number;
            name: string;
            canonical_name: string;
            description: string;
          },
        ];
      };
    };
    configurations: [
      {
        id: number;
        feature: {
          id: number;
          name: string;
          possible_values: [number];
        };
        value: {
          id: number;
          name: string;
          canonical_name: string;
          description: string;
        };
      },
    ];
    photos: [
      {
        id: number;
        url: string;
      },
    ];
    name: string;
    description: string;
    created_on: string; // a voir, peut etre number/number
    price_without_shipping_costs: string; // A voir pour le prix
    state: {
      id: number;
      name: string;
      description: string;
    };
  };
}
