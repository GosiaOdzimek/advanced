const gamePlane = document.querySelector(".gamePlane")
gamePlane.cssText =`
border: 2px dashed red;
height: 100vh;
position: relative;
`
function makeWall(x, y, w, h, type = "wall"){
    let color = 'red';
    
    switch( type ){
        case "start":
        color = 'green';
        // wall.onclick = function(){ game.start() }
        break;
        case "meta":
        color = 'blue';
        wall.onclick = () => { game.over('win')}
        break;
    }

    const wall = document.createElement("div")
    wall.style.cssText =  `
    position: absolute;
    background-color:${color};
    width:${w}%;
    height:${h}%;
    left:${x}%;
    top:${y}%;
    `
    gamePlane.append(wall)
}

const map = [
    [0, 0, 20, 20, 'start'],
    [20, 10, 40, 10],
    [50, 20, 10, 60],
    [50, 80, 30, 10],
    [80, 80, 20, 20, 'meta']
]

for( const wall of map){

    // console.log(wall)
    makeWall(...wall)

}

const game = {
    start(){

        console.log("game started")

        gamePlane.addEventListener('mousemove', game.watch)
        document.querySelectorAll("gamePlane div").forEach( wall => {
            e.stopPropagation()
        })
    
        }
    },

        watch(){
            game.over('lose')
        },
        over( result ){
            gamePlane.removeEventListener('mousemove', game.watch)

            switch(result){
                case 'win':
                    alert("YOU WIN");
                    break;
                    case 'lose':
                        alert("YOU LOSE!");
                        break;
            }
        }





