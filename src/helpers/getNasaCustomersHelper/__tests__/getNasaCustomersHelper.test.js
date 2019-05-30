import { getNasaCustomersHelper } from '../getNasaCustomersHelper';

describe('getNasaCustomersHelper', () => {
  it('should return false if launch year is not 2018', () => {
    const mockCustomers = [
      {
        payload_id: 'Trailblazer',
        norad_id: [],
        reused: false,
        customers: [
          'ABC',
          'NASA (CRT)',
        ],
      }
    ];
    const mockLaunchYear = '2017';
    const expected = getNasaCustomersHelper(mockCustomers, mockLaunchYear);
    expect(expected).toBeFalsy();
  });

  it('should return true if launch year is 2018 and nasa customer', () => {
    const mockCustomers = [
      {
        payload_id: 'Trailblazer',
        norad_id: [],
        reused: false,
        customers: [
          'ABC',
          'NASA (CRT)',
        ],
      }
    ];
    const mockLaunchYear = '2018';
    const expected = getNasaCustomersHelper(mockCustomers, mockLaunchYear);
    expect(expected).toBeTruthy();
  });
});
