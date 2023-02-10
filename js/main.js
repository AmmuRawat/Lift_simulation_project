let no_of_floors=0;
let no_of_lifts=0;
var up_element=0;
var down_element=0;

create_building_area=document.getElementsByClassName("CreateBuilding");

show_records = () => 
{
    let floor=document.getElementById("no_of_floors")
    no_of_floors= document.getElementById("no_of_floors").value;
    no_of_lifts= document.getElementById("no_of_lifts").value;
    console.log(`No of floors : ${no_of_floors}`);
    console.log(`No of lifts : ${no_of_lifts}`);
    create_building(no_of_floors,no_of_lifts);
}

// function for creating building
create_building = (no_of_floors,no_of_lifts) =>{
    let createFloor = "";
    for(i=no_of_floors;i>=1;i--)
    {
        
        createFloor += `
          <div class="floor${i}" style="color: black; background-color:white; width: 1000px; height: 100px; border-top: 2px solid black; display: flex; flex-direction:column; text-align: right; margin:20px;" >
              Floor ${i} 
              <div class="LiftButton_Floor${i}">
                  <button  id= up_button style="background-color:green ; display: flex;  margin:2px; height:30px; width:50px;  justify-content: center; border-radius: 5px; " onclick= "lift_moving_up()"> Up </button>   
                  <button id= down_button style="background-color:yellow ;display: flex;  margin:2px; height:30px; width:50px; justify-content: center; border-radius: 5px; ;" onclick= "lift_moving_down()" > Down </button>  
              </div>

              <div class="LiftArea">  ${i === 1 ? create_lift(no_of_lifts) : ""} </div>
          </div>
         `


    create_building_area[0].innerHTML = createFloor;
    
    }
    
    console.log("Floors are made");
}
    




// function for creating lift
create_lift = (no_of_lifts) =>{
    console.log("inside lift");
    let createLift = "";
    let lifts=no_of_lifts;
    
    for(let i=1;i<=no_of_lifts;i++)
    {
      createLift +=`
    
       <div class="lift${i}" style="background-color:blue; text-align:center; height:150px; width:100px; margin:20px; position:relative; left: 120px; top:-100px;float:left;">Lift${i}</div>
      
      `
    }
   return createLift

}


//move lift up
lift_moving_up = () => {
    
    console.log("moving up");
    let lift1_obj=document.getElementsByClassName("lift1");
    let h=100;
    let topmargin=0;
    var data = setInterval(()=>
    {
        
        
       
        if (topmargin === 100) 
        {
            console.log("top margin= h");
            clearInterval(data);
            console.log("top margin achieved value is: ",topmargin);
        } 
        else 
        {
            lift1_obj.style.top = topmargin + "px";
            topmargin=topmargin+10;
            console.log(topmargin);
           
        }

    },500);
    

}

//move lift down
lift_moving_down = () => {
    console.log("moving down");
    let lift2_obj=document.getElementsByClassName("lift2");
    console.log(lift2_obj);
}


// move_lift=(lift1_obj)=>{
//     //console.log(lift1_obj);
//     let h=100;
//     let topmargin=0;
//     topmargin=topmargin+10;
//     console.log(topmargin);
//     if (topmargin == h) 
//     {
//         clearInterval(myVar);
//     } 
//     else 
//     {
//         //lift1_obj.style.top = topmargin + "px";
//         topmargin=topmargin+10;
//         console.log(topmargin);
//         console.log("else is running");
//     }
   
//     //console.log(topmargin);
// }