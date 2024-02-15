'use strict';

// Emulate async operations

const readConfig = (name, callback) => {
  console.log('(1) Config loaded');
  callback(null, { population: { minimalLimit: 1000000 } });
};

const selectFromDb = (query, callback) => {
  console.log('(2) SQL query executed');
  callback(null, [{ name: 'Kiev' }, { name: 'Roma' }]);
};

const apiRequest = (url, cities, callback) => {
  console.log('(3) Data from web api');
  callback(null, { stats: ['some sata'] });
};

const generateReport = (cities, stats, callback) => {
  console.log('(4) Generate report');
  callback(null, 'file content');
};

const writeReport = (path, data, callback) => {
  console.log('(5) Write file');
  callback(null, { success: true });
};

// Callback hell example

readConfig('config.json', (error, config) => {
  const min = config.population.minimalLimit;
  const sql = `select * from cities where size > ${min}`;
  selectFromDb(sql, (error, cities) => {
    const url = 'http://domain.name/api';
    apiRequest(url, cities, (error, stats) => {
      generateReport(cities, stats, (error, data) => {
        writeReport('README.md', data, (error, res) => {
          if (res.success) console.log('All done!');
        });
      });
    });
  });
});
