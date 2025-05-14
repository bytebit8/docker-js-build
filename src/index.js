import _ from 'lodash';

const even = _.find([1, 2, 3, 4], (n) => n % 2 === 0);

console.log(even);
