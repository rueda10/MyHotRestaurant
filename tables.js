var tables = [
    {
       name: 'Placeholder',
       guests: 6 
    }];

module.exports = function(newTable) {
    if (newTable) {
        tables.push(newTable);        
    }
    return tables;
}