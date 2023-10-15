
function createData(id, name, clicks, cost, conversions, revenue) {
    return {
      id,
      name,
      clicks,
      cost,
      conversions,
      revenue,
    };
  }
export const campaignRows = [
    createData(0, 'Cosmetics', 712, 4272, 8, 16568),
    createData(1, 'Serums', 3961, 27331, 115, 362526),
    createData(2, 'Facewash', 9462, 76831, 123, 266800),
    createData(3, 'Shampoos', 439, 2151, 5, 175245),
    createData(4, 'Conditioners', 1680, 3864, 49, 623106),
    createData(5, 'Facewash 2', 4978, 29370, 189, 1573563),

  ];

  export const campaignColumns = [
    {
      id: '0',
      numeric: false,
      disablePadding: true,
      label: 'campaigns',
    },
    {
      id: '1',
      numeric: true,
      disablePadding: false,
      label: 'clicks',
    },
    {
      id: '2',
      numeric: true,
      disablePadding: false,
      label: 'cost',
    },
    {
      id: '3',
      numeric: true,
      disablePadding: false,
      label: 'conversions',
    },
    {
      id: '4',
      numeric: true,
      disablePadding: false,
      label: 'revenue',
    },
  ];


  // Groups 
  export const groupRows = [
    createData(0, 'Male', 348, 12528, 42, 62118),
    createData(1, 'Female', 692, 24912, 35, 5175),
    createData(2, 'Unknown', 105, 3943, 3, 4489), 
  ]

  export const groupColumns = [
    {
      id: '0',
      numeric: false,
      disablePadding: true,
      label: 'groups',
    },
    {
      id: '1',
      numeric: true,
      disablePadding: false,
      label: 'clicks',
    },
    {
      id: '2',
      numeric: true,
      disablePadding: false,
      label: 'cost',
    },
    {
      id: '3',
      numeric: true,
      disablePadding: false,
      label: 'conversions',
    },
    {
      id: '4',
      numeric: true,
      disablePadding: false,
      label: 'revenue',
    },
  ]
