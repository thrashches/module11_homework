function evenOddNull(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let nullCount = 0;

    arr.forEach(item => {
        if (typeof item != 'number' || item === NaN) {
            nullCount++;
        }
        else if (item % 2 == 0) {
            evenCount++;
        }
        else {
            oddCount++;
        }
    })

    console.log(`Чентых: ${evenCount},\nНечетных: ${oddCount},\nОстальных: ${nullCount}.`);
}


evenOddNull([12, 1, 4, 7, NaN, false]);
evenOddNull([2, 2, 2, 3, 3, 3, '2', null, undefined]);

