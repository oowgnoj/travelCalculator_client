const FakeData = {
  estimate: {
    flight: 1120,
    hotel: 700,
    restaurant: 600,
    total: 350,
  },
  details: {
    flight: [
      {
        offerid: 1,
        itineraries: [
          {
            duration: '20H 10M',
            stop: 0,
            segments: [
              {
                daparture: {
                  city: 'Seoul',
                  date: '2019-11-01 23:40:00',
                },
                arrival: {
                  city: `string(방콕)`,
                  date: '2019-11-02 03:00:00',
                },
                duration: '04H 10M',
              },
              {
                daparture: {
                  city: 'string(방콕)',
                  date: '2019-11-02 03:00:00',
                },
                arrival: {
                  city: 'Los Angeles',
                  date: '2019-11-02 21:00:00',
                },
                duration: '13H 10M',
              },
            ],
          },
          {
            duration: 'Number 0,1,2(0이면 직항, 1이면 경유 1회)',
            segments: [
              {
                daparture: {
                  city: 'string(Los Angeles)',
                  date: '2019-11-01 23:40:00',
                },
                arrival: {
                  city: 'string(방콕)',
                  date: '2019-11-02 03:00:00',
                },
                duration: '04H 10M',
              },
              {
                daparture: {
                  city: 'string(방콕)',
                  date: '2019-11-02 03:00:00',
                },
                arrival: {
                  city: 'string(Seoul)',
                  date: '2019-11-02 21:00:00',
                },
                duration: '13H 10M',
              },
            ],
          },
        ],
        price: 100000,
        airline: 'Korean Air',
      },
      {
        offerid: 2,
        itineraries: [
          {
            duration: '20H 10M',
            stop: ' Number 0,1,2(0이면 직항, 1이면 경유 1회)',
            segments: [
              {
                daparture: {
                  city: 'string(Seoul)',
                  date: '2019-11-01 23:40:00',
                },
                arrival: {
                  city: 'string(방콕)',
                  date: '2019-11-02 03:00:00',
                },
                duration: '04H 10M',
              },
              {
                daparture: {
                  city: 'string(방콕)',
                  date: '2019-11-02 03:00:00',
                },
                arrival: {
                  city: 'string(Los Angeles)',
                  date: '2019-11-02 21:00:00',
                },
                duration: '13H 10M',
              },
            ],
          },
          {
            duration: '20H 10M',
            stop: ' Number 0,1,2(0이면 직항, 1이면 경유 1회)',
            segments: [
              {
                daparture: {
                  city: 'string(Los Angeles)',
                  date: '2019-11-01 23:40:00',
                },
                arrival: {
                  city: 'string(방콕)',
                  date: '2019-11-02 03:00:00',
                },
                duration: '04H 10M',
              },
              {
                daparture: {
                  city: 'string(방콕)',
                  date: '2019-11-02 03:00:00',
                },
                arrival: {
                  city: 'string(Seoul)',
                  date: '2019-11-02 21:00:00',
                },
                duration: '13H 10M',
              },
            ],
          },
        ],
        price: 100000,
        airline: 'string(대한항공)',
      },
      {
        offerid: 3,
        itineraries: [
          {
            duration: '20H 10M',
            stop: ' Number 0,1,2(0이면 직항, 1이면 경유 1회)',
            segments: [
              {
                daparture: {
                  city: 'string(Seoul)',
                  date: '2019-11-01 23:40:00',
                },
                arrival: {
                  city: 'string(방콕)',
                  date: '2019-11-02 03:00:00',
                },
                duration: '04H 10M',
              },
              {
                daparture: {
                  city: 'string(방콕)',
                  date: '2019-11-02 03:00:00',
                },
                arrival: {
                  city: 'string(Los Angeles)',
                  date: '2019-11-02 21:00:00',
                },
                duration: '13H 10M',
              },
            ],
          },
          {
            duration: '20H 10M',
            stop: ' Number 0,1,2(0이면 직항, 1이면 경유 1회)',
            segments: [
              {
                daparture: {
                  city: 'string(Los Angeles)',
                  date: '2019-11-01 23:40:00',
                },
                arrival: {
                  city: 'string(방콕)',
                  date: '2019-11-02 03:00:00',
                },
                duration: '04H 10M',
              },
              {
                daparture: {
                  city: 'string(방콕)',
                  date: '2019-11-02 03:00:00',
                },
                arrival: {
                  city: 'string(Seoul)',
                  date: '2019-11-02 21:00:00',
                },
                duration: '13H 10M',
              },
            ],
          },
        ],
        price: 100000,
        airline: 'string(대한항공)',
      },
    ],
    hotel: [
      {
        name: 'Ramada London Heathrow International Airport',
        photo: 'string(이미지 url)',
        price: 300000,
        rating: 3,
      },
      {
        name: 'Intercontinental Hotel Centre of London',
        photo: 'string(이미지 url)',
        price: 204000,
        rating: 3,
      },
      {
        name: 'I dont know ',
        photo: 'string(이미지 url)',
        price: 210000,
        rating: 3,
      },
    ],
    restaurant: [
      {
        name: 'string(식당이름/영문)',
        photo: 'string(이미지 url)',
        cuisines: 'string(음식종류/영문)',
        price: 1,
        rating: 1,
      },
      {
        name: 'string(식당이름/영문)',
        photo: 'string(이미지 url)',
        cuisines: 'string(음식종류/영문)',
        price: 1,
        rating: 1,
      },
      {
        name: 'string(식당이름/영문)',
        photo: 'string(이미지 url)',
        cuisines: 'string(음식종류/영문)',
        price: 1,
        rating: 1,
      },
    ],
  },
};

module.exports = FakeData;