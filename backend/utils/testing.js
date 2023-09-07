const Reverse = (string) => {
    return string.split('').reverse().join('')
}

const Average = (array)=>{
    const Reducer = (sum, item) => {
        return sum + item
    }
    return array.reduce(Reducer, 0)/array.length
}

module.exports = {
    Reverse, Average
}