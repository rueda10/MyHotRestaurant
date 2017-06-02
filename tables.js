var tables = [
    {
       customerName: 'Placeholder',
       guests: 6 
    }
];

module.exports = function(newTable) {
    console.log(newTable);
    if (newTable.customerName) {
        tables.push(newTable);        
    }
    return tables;
}