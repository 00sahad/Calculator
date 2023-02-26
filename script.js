let final_value = 0;

const pressNumber = (i) => {

    const num1 = document.getElementsByTagName('button')[i].innerHTML;
    const num2 = document.getElementById('display').value
    const total = num2 + '' + num1
    document.getElementById('display').value = total
}

const pressOprator = (i) => {
    const firstValue = document.getElementById('display').value
    document.getElementById('display').value = firstValue + `${i}`;
}

const sumFinder = () => {
    try {
        const firstValue = document.getElementById('display').value;
        final_value = eval(firstValue)
        document.getElementById('display').value = final_value
    } catch (err) {

        document.getElementById('display').value = 'SYNTAX ERROR'
        document.getElementById('display').style.textAlign = 'center'

    }
}

const clearDisplay = () => {
    document.getElementById('display').value = '0'
}