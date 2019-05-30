import { sortByTimeAndPayloadsHelper } from '../sortByTimeAndPayloadsHelper';

describe('sortByTimeAndPayloadsHelper', () => {
  it('should return data in inverse chronological order', () => {
    const mockFilteredNasaCustomers = [
      {
        flight_number: 59,
        mission_name: 'CRS-14',
        payloads_count: 1,
        date: '2018-04-02T20:30:41.000Z',
        launch_year: '2018',
        nasaCustomers: true
      },
      {
        flight_number: 60,
        mission_name: 'TESS',
        payloads_count: 1,
        date: '2018-04-18T22:51:00.000Z',
        launch_year: '2018',
        nasaCustomers: true
      },
      {
        flight_number: 62,
        mission_name: 'Iridium NEXT Mission 6',
        payloads_count: 2,
        date: '2018-05-22T19:47:58.000Z',
        launch_year: '2018',
        nasaCustomers: true
      },
      {
        flight_number: 64,
        mission_name: 'CRS-15',
        payloads_count: 1,
        date: '2018-06-29T09:42:00.000Z',
        launch_year: '2018',
        nasaCustomers: true
      },
      {
        flight_number: 72,
        mission_name: 'CRS-16',
        payloads_count: 1,
        date: '2018-12-05T18:16:00.000Z',
        launch_year: '2018',
        nasaCustomers: true
      }
    ];
    const expected = sortByTimeAndPayloadsHelper(mockFilteredNasaCustomers);
    const result = [
      {
        flight_number: 62,
        mission_name: 'Iridium NEXT Mission 6',
        payloads_count: 2
      },
      {
        flight_number: 72,
        mission_name: 'CRS-16',
        payloads_count: 1
      },
      {
        flight_number: 64,
        mission_name: 'CRS-15',
        payloads_count: 1
      },
      {
        flight_number: 60,
        mission_name: 'TESS',
        payloads_count: 1
      },
      {
        flight_number: 59,
        mission_name: 'CRS-14',
        payloads_count: 1
      }
    ];
    expect(expected).toEqual(result);
  });

  it('should return default value', () => {
    const mockFilteredNasaCustomers = [];
    const expected = sortByTimeAndPayloadsHelper(mockFilteredNasaCustomers);
    expect(expected).toEqual([]);
  });
});
