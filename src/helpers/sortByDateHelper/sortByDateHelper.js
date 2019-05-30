import omit from 'lodash/omit';
import sortBy from 'lodash/sortBy';

/**
 * This helper is used to sort nasaCustomer using the date and then removes
 * the unnecessary properties from the object.
 *
 * @param {Array} nasaCustomer - nasaCustomer from the data
 * @returns {Array} - updated data
 */
export const sortByDateHelper = (nasaCustomer) => {
  const sortedItem = sortBy(nasaCustomer, 'date');
  return sortedItem.map(item =>
      omit(
        item,
        ['date', 'launch_year', 'nasaCustomers'],
    ),
  );
};
