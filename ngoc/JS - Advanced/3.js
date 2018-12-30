const csvToArray = (data, delimiter = ',') => {
    return data.split('\n')
               .map(item => item.split(delimiter));
}

dataTemp = 'head1,head2\na,b\nc,d';

console.log(csvToArray(dataTemp));