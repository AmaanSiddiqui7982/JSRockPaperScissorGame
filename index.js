let random = Math.ceil(Math.random() * 3)
    console.log(random);
    let update = "";
    var score_rock ;
    var score_paper ;
    var score_scissor;
    let your_choice = "";
    let yourdiv = document.createElement("div")
    yourdiv.setAttribute("class", "your_result")

    let btn1 = document.getElementById("btn1");
    let div1 = document.getElementById("div1");
    let heading = document.getElementById("heading");
    let total_container = document.querySelector(".totalconatiner")
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissor = document.getElementById("scissor");
   
   
    btn1.addEventListener("click", () => {
        heading.classList.remove("hide")
        div1.classList.add("hide");
        total_container.classList.remove("hide");

    })


    rock.addEventListener("click", function(){

        score_rock = 1;
        document.querySelector(".play_container").classList.add("hide")
        your_choice+=`
        <div class = "rock_cpu">
            <h2>You chose:</h2>
            <i class="fas fa-hand-rock fa-5x"></i> 
            <span class="span">ROCK</span>
        </div>
        `
        yourdiv.innerHTML = your_choice;
        cpuPlays();
        
    })
    paper.addEventListener("click", function(){
        
        score_paper = 1;
        your_choice+=`
        <div class = "paper_cpu">
            <h2>You chose:</h2>
            <i class="fas fa-hand-paper fa-5x"></i> 
            <span class="span">PAPER</span>
        </div>
        `
        yourdiv.innerHTML = your_choice;
        cpuPlays();
        document.querySelector(".play_container").classList.add("hide")
        
    })
    scissor.addEventListener("click", function(){
        
        score_scissor = 1;
        your_choice+=`
        <div class = "scissor_cpu">
            <h2>You chose:</h2>
            <i class="fas fa-hand-scissors fa-5x"></i> 
            <span class="span">Scissor</span>
        </div>
        `
        yourdiv.innerHTML = your_choice;
        document.querySelector(".play_container").classList.add("hide")
        cpuPlays();
        
    })




function cpuPlays(){
    if (random === 1) {
        update += `

        <div class = "rock_cpu">
            <h2>Computer chose:</h2>
            <i class="fas fa-hand-rock fa-5x"></i> 
            <span class="span">ROCK</span>
        </div>
        `
        total_container.appendChild(yourdiv);
         let cpu = document.createElement("div");
         cpu.classList.add("cpucontainer");
         
         cpu.innerHTML = update;
         console.log(cpu)
         total_container.appendChild(cpu)
         console.log(yourdiv);


         if (score_rock === 1) {
                let message = document.createElement("h1");
                message.classList.add("message");
                message.innerText = "Tied"
                total_container.appendChild(message)
            }
        else if(score_scissor === 1){
            let message = document.createElement("h1");
                message.classList.add("message");
                message.innerText = "COMP WON"
                total_container.appendChild(message)
        }
        else if(score_paper === 1){
            let message = document.createElement("h1");
                message.classList.add("message");
                message.innerText = "YOU WON"
                total_container.appendChild(message)
        }

        let restart = document.createElement("button")
         restart.classList.add("restart_btn");
         restart.innerText = "Restart"
         total_container.appendChild(restart);
         console.log(score_rock)

         
         let restartbutton = document.querySelector(".restart_btn")
           restartbutton.addEventListener("click", ()=>{
               location.reload();
           })
}

    else if (random === 3) {
        update += `

        <div class = "scissor_cpu">
            <h2>Computer chose:</h2>
            <i class="fas fa-hand-scissors fa-5x"></i> 
            <span class="span">scissor</span>
        </div>
        `
        total_container.appendChild(yourdiv);
        let cpu = document.createElement("div");
        cpu.classList.add("cpucontainer");
        // cpu.classList.add("hide");
        cpu.innerHTML = update;
        console.log(cpu)
        total_container.appendChild(cpu)
        console.log(yourdiv);

        console.log(score_scissor)
        if (score_scissor === 1) {
                let message = document.createElement("h1");
                message.classList.add("message");
                message.innerText = "Tied"
                total_container.appendChild(message)
            }
        else if(score_paper === 1){
            let message = document.createElement("h1");
                message.classList.add("message");
                message.innerText = "COMP WON"
                total_container.appendChild(message)
        }
        else if(score_rock === 1){
            let message = document.createElement("h1");
                message.classList.add("message");
                message.innerText = "YOU WON"
                total_container.appendChild(message)
        }
         
         let restart = document.createElement("button")
         restart.classList.add("restart_btn");
         restart.innerText = "Restart"
         total_container.appendChild(restart);

        let restartbutton = document.querySelector(".restart_btn")
           restartbutton.addEventListener("click", ()=>{
               location.reload();
           })
}


    else if (random === 2) {
        update += `

        <div class = "paper_cpu">
            <h2>Computer chose:</h2>
            <i class="fas fa-hand-paper fa-5x"></i> 
            <span class="span">paper</span>
        </div>
        `
        total_container.appendChild(yourdiv);
        console.log(yourdiv);
        console.log(yourdiv);
        let cpu = document.createElement("div");
        cpu.classList.add("cpucontainer");
        cpu.innerHTML = update;
        console.log(cpu)
        total_container.appendChild(cpu)
        console.log(score_paper)
        if (score_paper === 1) {
                let message = document.createElement("h1");
                message.classList.add("message");
                message.innerText = "Tied"
                total_container.appendChild(message)
            }
        else if(score_rock === 1){
            let message = document.createElement("h1");
                message.classList.add("message");
                message.innerText = "COMP WON"
                total_container.appendChild(message)
        }
        else if(score_scissor === 1){
            let message = document.createElement("h1");
                message.classList.add("message");
                message.innerText = "YOU WON"
                total_container.appendChild(message)
        }
         

         let restart = document.createElement("button")
         restart.classList.add("restart_btn");
         restart.innerText = "Restart"
         total_container.appendChild(restart);


         let restartbutton = document.querySelector(".restart_btn")
           restartbutton.addEventListener("click", ()=>{
               location.reload();
           })
        }
    
}
