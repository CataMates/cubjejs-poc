cube(`Nycsales`, {
  sql: `SELECT * FROM public.nycsales`,

  measures: {
    count: {
      type: `count`,
      drillMembers: [residentialUnits, id, saleDate]
    },

    salePrice: {
      sql: `sale_price`,
      type: `sum`
    },

    pricePerSquareFeet: {
      sql: `${salePrice} / ${Nycsales.landSquareFeet}`,
      type: `number`
    },

    landSquareFeet: {
      sql: `land_square_feet`,
      type: `sum`
    }
  },

  dimensions: {
    address: {
      sql: `address`,
      type: `string`
    },

    lot: {
      sql: `lot`,
      type: `string`
    },

    block: {
      sql: `block`,
      type: `string`
    },

    easeMent: {
      sql: `ease_ment`,
      type: `string`
    },

    taxClassAtTimeOfSale: {
      sql: `tax_class_at_time_of_sale`,
      type: `string`
    },

    residentialUnits: {
      sql: `residential_units`,
      type: `string`
    },

    taxClassAtPresent: {
      sql: `tax_class_at_present`,
      type: `string`
    },

    apartmentNumber: {
      sql: `apartment_number`,
      type: `string`
    },

    zipCode: {
      sql: `zip_code`,
      type: `string`
    },

    buildingClassAtTimeOfSale: {
      sql: `building_class_at_time_of_sale`,
      type: `string`
    },

    neighborhood: {
      sql: `neighborhood`,
      type: `string`
    },

    commercialUnits: {
      sql: `commercial_units`,
      type: `string`
    },

    buildingClassAtPresent: {
      sql: `building_class_at_present`,
      type: `string`
    },

    buildingClassCategory: {
      sql: `building_class_category`,
      type: `string`
    },

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },

    saleDate: {
      sql: `sale_date`,
      type: `time`
    },
  }
});
