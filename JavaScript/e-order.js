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

// Back to order

const steps = {};

steps.start = () => {
  readConfig('config.json', steps.processConfig);
};

steps.processConfig = (error, config) => {
  if (error) return void console.error(error);
  const min = config.population.minimalLimit;
  const sql = `select * from cities where size > ${min}`;
  selectFromDb(sql, steps.processQueryResult);
};

steps.processQueryResult = (error, cities) => {
  if (error) return void console.error(error);
  const url = 'http://domain.name/api';
  const callback = steps.processApiResult(cities);
  apiRequest(url, cities, callback);
};

steps.processApiResult = (cities) => (error, stats) => {
  if (error) return void console.error(error);
  generateReport(cities, stats, steps.processReport);
};

steps.processReport = (error, data) => {
  if (error) return void console.error(error);
  writeReport('README.md', data, steps.checkSuccess);
};

steps.checkSuccess = (error, res) => {
  if (error) return void console.error(error);
  if (res.success) console.log('All done!');
  else console.error('Can not save data!');
};

steps.start();
