class GuessRandom{
    constructor (minNum,maxNum){
        this.minNum = minNum
        this.maxNum = maxNum
    }
    getRandomNumber(){
        let randCompNum = Math.floor(this.minNum+Math.random()*this.minNum+this.maxNum-this.minNum)
        return randCompNum
    }
    toString(){
        return `Computer number: ${randCompNum}`  //Помилка, що це за змінна randCompNum
    }
}
class GuessGame{
    constructor(guess1,guess2,score1,score2,min,max){  У конструктор треба передавати тільки min,max
        this.guess1 = guess1
        this.guess2 = guess2
        this.score1 = score1
        this.score2 = score2
        this.newRandNum = new GuessRandom(min,max)
    }
    getNumberEven(){
        let currentRandomNum = this.newRandNum.getRandomNumber()
        if(this.guess1==this.guess2&&this.guess2==currentRandomNum){
          this.score1++
          this.score2++  
        }
        else if(math.abs(this.guess1-currentRandomNum)<math.abs(this.guess2-currentRandomNum))
            this.score1++
        else this.score2++
        // if(this.guess1 == currentRandomNum||this.guess1-this.guess2<=this.guess2-this.guess1)
        //     this.score1++
        // else if(this.score2==currentRandomNum||this.guess2-this.guess1<=this.guess1-this.guess2)
        //     this.score2++
        this.text1.innerText = this.score1
        this.text2.innerText = this.score2
        // this.input1 = this.guess1
        // this.input2 = this.guess2

        
    }
    render(containerId){
        let div = document.getElementById(containerId)

        let label1 = document.createElement("label")
        label1.innerText = "Player 1 Score:"
        this.text1 = document.createElement("input")
        this.text1.type = Text
        this.text1.innerHTML = '0'
        label1.appendChild(this.text1)
        div.appendChild(label1)

        let label2 = document.createElement("label")
        this.text2 = document.createElement("input")
        this.text2.type = Text
        this.text2.innerText = '0'
        label2.innerText = "Player 2 Score:"
        label2.appendChild(this.text2)
        div.appendChild(label2)
        
        let br1 = document.createElement("br")
        div.appendChild(br1)

        let label3 = document.createElement("label")
        let input1 = document.createElement("input")
        input1.type = Text
        label3.innerText = "Player 1 Guess Number:"
        label3.appendChild(input1)
        div.appendChild(label3)

        let label4 = document.createElement("label")
        let input2 = document.createElement("input")
        input2.type = Text
        label4.innerText = "Player 1 Guess Number:"
        label4.appendChild(input2)
        div.appendChild(label4)

        let br2 = document.createElement("br")
        dicv.appendChild(br2)

        let btn = document.createElement("button")
        btn.innerText = "Guess the number!"
        btn.onclick = this.getNumberEven.bind(this)
        div.appendChild(btn)
    }
}
function begin(){
    let game = new GuessGame(1,1,0,0,1,10)
    game.render('container')
    document.write(game)
    // let score = game.getNumberEven()
    // document.write(score)
}  
