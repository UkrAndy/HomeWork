class CreditCalc{
    constructor(perCent,monthCount,creditAmount){
        this.perCent = perCent
        this.monthCount = monthCount
        this.creditAmount = creditAmount
    }
    getMonthPayment(){
        return this.creditAmount*((this.perCent/100)+1) / this.monthCount
    }
    getOverdraftAmount(){
        return this.creditAmount*((this.perCent/100)+1)-this.creditAmount
    }
    btnClick(){
        let monthPay = this.monthP.getMonthPayment()
        let overPay = this.overP.getOverdraftAmount()
        this.input4.innerText = monthPay
        this.input5.innerText = overPay
    }
    render(containerId){
        let div = document.getElementById(containerId)

        let label1 = document.createElement("label")
        label1.innerText = "Total per cent:"
        let input1 = document.createElement("input")
        input1.type = Text
        input1.innerText = '0'
        label1.appendChild(input1)
        div.appendChild(label1)

        let label2 = document.createElement("label")
        label2.innerText = "Total month count:"
        let input2 = document.createElement("input")
        input2.type = Text
        input2.innerText = '0'
        label2.appendChild(input2)
        div.appendChild(label2)

        let label3 = document.createElement("label")
        label3.innerText = "Credit amount:"
        let input3 = document.createElement("input")
        input3.type = Text
        input3.innerText = '0'
        label3.appendChild(input3)
        div.appendChild(label3)

        let label4 = document.createElement("label")
        label4.innerText = "Month payment:"
        this.input4 = document.createElement("input")
        this.input4.type = Text
        this.input4.innerText = '0'
        label4.appendChild(this.input4)
        div.appendChild(label4)

        let label5 = document.createElement("label")
        label5.innerText = "Overpayment:"
        this.input5 = document.createElement("input")
        this.input5.type = Text
        this.input5.innerText = '0'
        label5.appendChild(this.input5)
        div.appendChild(label5)

        let btn = document.createElement("button")
        btn.innerText = "Calculate your credit"
        btn.onclick = this.btnClick.bind(this)
        div.appendChild(btn)
    }
}
function start(){
    let calc = new CreditCalc(15,30,50000)
    calc.render('container')
}
window.onload = function start(){
document.getElementById('start').onclick = start
}
