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

// Decompose callback hell

const checkSuccess = (error, res) => {
  if (error) return void console.error(error);
  if (res.success) console.log('All done!');
  else console.error('Can not save data!');
};

const processReport = (error, data) => {
  if (error) return void console.error(error);
  writeReport('README.md', data, checkSuccess);
};

const processApiResult = (cities) => (error, stats) => {
  if (error) return void console.error(error);
  generateReport(cities, stats, processReport);
};

const processQueryResult = (error, cities) => {
  if (error) return void console.error(error);
  const url = 'http://domain.name/api';
  apiRequest(url, cities, processApiResult(cities));
};

const processConfig = (error, config) => {
  if (error) return void console.error(error);
  const min = config.population.minimalLimit;
  const sql = `select * from cities where size > ${min}`;
  selectFromDb(sql, processQueryResult);
};

readConfig('config.json', processConfig);
