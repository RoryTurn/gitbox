//api map script========================================================================================================
let script = '<script src="https://maps.googleapis.com/maps/api/js?key=' + mykey +'&callback=initMap&libraries=places&v=weekly" async defer >';

$(document).ready(function(){
    $('body').append(script);
});
let map;
let markers =[];
let people=[];
//constants=================================================================================================

//end constants=================================================================================================

const windowStay = []; 
const selectedStay = [];
const selectedPeople = [];    
const selectedCost = [];
const selectedNight= [];
const selectNone= [];
const objectMin= [];
const objectMinTwo= [];
const resultOne= [];
const resultTwo= [];
const resultThree= [];
//end api map script=================================================================================================



//maps===============================================================================================================

function initMap(){
    

    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: {lat:-44.002043349329256, lng:170.47905703652933},
    });

}

//map reload=================================================================================================

    function reloadMarkers(){
    

        for(let i =0; i<markers.length; i++){
            markers[i].setMap(null);
        }
        markers=[];
    }
//end maps=================================================================================================


//array master==============================================================================================


let objectArray= [
    {
        name: "hostel1",
        id: 1,
        type: "hostel",
        title: "Saint Erasmus Lodge",
        textDesc: "",
        address: "5 Edwards Lane, Tekapo",
        latitude: -44.009783422904,
        longitude: 170.47394894695628,
        costNight: 30.00,
        numPeopleMin: 1,  
        numPeopleMax: 1, 
        numRoom: "1 bedroom, shared facilities.",
        numNightMin: -1,
        numNightMax: 1,      
        pic1: './img/hostel1.jpg',
        pic2: './img/hostel1b.jpg',
        pic3: './img/hostel1c.jpg',
        pic4: './img/hostelmenu.jpg',
        menu1: "Weetbix, milk and tinned fruit or toast",
        menu2: "Assorted sandwiches or soup of the day",
        menu3: "Barbeque or shepherds pie (weather dependent)", 
        tags: ["hostel", "tekapo", "saint erasmus lodge"],
        net: "None Provided",
        app: "Colour television set, attached DVD Player",
        cell: "029-887-9907",
        email: "saintjiub@gmail.com"
   
    },
    {
        name: "hostel2",
        id: 2,
        type: "hostel",
        title: "Aotearoa Trekkers",
        textDesc: "",
        address: "102 Lakeside Drive, Tekapo Springs, Tekapo. ",
        latitude: -43.995188087830364, 
        longitude: 170.46180045429935, 
        costNight: 30.00,
        numPeopleMin: 1,  
        numPeopleMax: 1,
        numRoom: "1 bedroom, shared facilities.",
        numNightMin: -1,
        numNightMax: 1,          
        pic1: './img/hostel2.jpg',
        pic2: './img/hostel2b.jpg',
        pic3: './img/hostel2c.jpg',
        pic4: './img/hostelmenu.jpg',
        menu1: "Weetbix, milk and tinned fruit or toast",
        menu2: "Assorted sandwiches or soup of the day",
        menu3: "Barbeque or shepherds pie (weather dependent)", 
        tags: ["hostel", "tekapo springs", "aotearoa trekkers"],   
        net: "None Provided",
        app: "Mini fridge (unstocked), Television Set",
        cell: "03 456 0021",
        email: "tanaka@japanfan.co.nz"
    },
    {
        name: "hostel3",
        id: 3,
        type: "hostel",
        title: "Lazy Sunday Hostel",
        textDesc: "",
        address: "376D Three Springs Road, Kimbell. ",
        latitude: -44.062473877243875, 
        longitude:  170.77247848927692, 
        costNight: 30.00,        
        numPeopleMin: 1,  
        numPeopleMax: 1,
        numRoom: "1 bedroom, ensuite bathroom, shared kitchen",
        numNightMin: -1,
        numNightMax: 1,      
        pic1: './img/hostel3.jpg',
        pic2: './img/hostel3b.jpg',
        pic3: './img/hostel3c.jpg',
        pic4: './img/hostelmenu.jpg',
        menu1: "Weetbix, milk and tinned fruit or toast",
        menu2: "Assorted sandwiches or soup of the day",
        menu3: "Barbeque or shepherds pie (weather dependent)", 
        tags: ["hostel", "kimbell", "lazy sunday hostel"],   
        net: "None Provided",
        app: "Electric heater, CD Player",
        cell: "021 221 45567",
        email: "None"
    },
    {
        name: "motel1",
        id: 4,
        type: "motel",
        title: "Chevron Motor Lodge",
        textDesc: "",
        address: "20 Erebus Place, Tekapo",
        latitude:  -44.00593676623568,
        longitude: 170.47036076708488,
        costNight: 90.00,
        numPeopleMin: 2,
        numPeopleMax: 4,
        numRoom: "1 bedroom , shared facilities, pool access",
        numNightMin: 3,
        numNightMax: 10, 
        pic1: './img/motel1.jpg',
        pic2: './img/motel1b.jpeg',
        pic3: './img/motel1c.jpeg',
        pic4: './img/motelmenu.jpg',
        menu1: "Stewed fruit on toast or berries and yoghurt",
        menu2: "Sausage sizzle or choice of bakery pie",
        menu3: "Crumbed fish and chips or vegan soup",
        tags: ["motel", "tekapo", "chevron motor lodge"],    
        net: "Guest Wifi (ask staff for password)",
        app: "Television set, DVD player, minidridge (unstocked)",
        cell: "029-666-9001",
        email: "chevvy_jim@gmail.com"
    },
    {
        name: "motel2",
        id: 5,
        type: "motel",
        title: "Galaxy Stays",
        textDesc: "",
        address: "37 Main Street, Fairlie.",
        latitude: -44.10142036843941,
        longitude: 170.82929085888716,
        costNight: 90.00,
        numPeopleMin: 2,
        numPeopleMax: 4,
        numRoom: "1 bedroom, ensuite bathroom, attached mini kitchen. ",
        numNightMin: 3,
        numNightMax: 10, 
        pic1: './img/motel2.webp',
        pic2: './img/motel2b.jpg',
        pic3: './img/motel2c.jpg',
        pic4: './img/motelmenu.jpg',
        menu1: "Stewed fruit on toast or berries and yoghurt",
        menu2: "Sausage sizzle or choice of bakery pie",
        menu3: "Crumbed fish and chips or vegan soup", 
        tags: ["motel", "fairlie", "galaxy stays"],      
        net: "Wifi (open access)",
        app: "Laptop port, hot pool (shared)",
        cell: "None",
        email: "faerie_fire55@yahoo.com"
    },
    {
        name: "motel3",
        id: 6,
        type: "motel",
        title: "Model 4 Motel",
        textDesc: "",
        address: "35 Darchiac Drive, Tekapo",
        latitude: -44.00556666040913,
        longitude: 170.47205952578238,
        costNight: 90.00,
        numPeopleMin: 2,
        numPeopleMax: 4,
        numRoom: "1 bedroom, ensuite bathroom, shared kitchen",
        numNightMin: 3,
        numNightMax: 10, 
        pic1: './img/motel3.jpg',
        pic2: './img/motel3b.jpg',
        pic3: './img/motel3c.jpg',
        pic4: './img/motelmenu.jpg',
        menu1: "Stewed fruit on toast or berries and yoghurt",
        menu2: "Sausage sizzle or choice of bakery pie",
        menu3: "Crumbed fish and chips or vegan soup",  
        tags: ["motel", "tekapo", "model 4 motel"],   
        net: "None Provided",
        app: "Cable Television, VHS Player, Cassette Tape Player",
        cell: "03-991-7655 ",
        email: "None"
    },
    {
        name: "hotel1",
        id: 7,
        type: "hotel",
        title: "Mountain View Hotel",
        textDesc: "",
        address: "201 Godfrey Peaks Road, Tekapo Springs, Tekapo",
        latitude: -43.94607574482515,
        longitude: 170.48139229346893,
        costNight: 157.00,
        numPeopleMin: 1,
        numPeopleMax: 2,
        numRoom: "1 bedroom with attached living room and balcony, ensuite bathroom and spa pool access.",
        numNightMin: 1,
        numNightMax: 5,  
        pic1: './img/hotel1.jpg',
        pic2: './img/hotel1b.jpg',
        pic3: './img/hotel1c.jpg',
        pic4: './img/hotelmenu1.jpg',
        menu1: "Deluxe cereal with fresh fruit and glass of chocolate milk or protein shake",
        menu2: "Roast chicken or roast lamb  sandwiches or kumara chips plus dip",
        menu3: "Laksa curry with fresh prawns or stuffed eggplant with rice", 
        tags: ["hotel", "tekapo springs", "mountain view hotel"],    
        net: "Guest Wifi (email us for password) ",
        app: "Desktop PC, two monitors. Minibar (stocked)",
        cell: "0800-787-1112",
        email: "mountup_staff@express.co.nz"
    },
    {
        name: "hotel2",
        id: 8,
        type: "hotel",
        title: "Fairlie Hotel",
        textDesc: "",
        address: "312 Talbot Road, Fairlie.",
        latitude: -44.10779553923274,
        longitude: 170.85153713745999,
        costNight: 157.00,
        numPeopleMin: 1,
        numPeopleMax: 2,
        numRoom: "1 bedroom, ensuite bathroom and study, shared kitchen facilities",
        numNightMin: 1,
        numNightMax: 5, 
        pic1: './img/hotel2.jpg',
        pic2: './img/hotel2b.jpg',
        pic3: './img/hotel2c.jpg',
        pic4: './img/hotelmenu1.jpg',
        menu1: "Deluxe cereal with fresh fruit and glass of chocolate milk or protein shake",
        menu2: "Roast chicken or roast lamb  sandwiches or kumara chips plus dip",
        menu3: "Laksa curry with fresh prawns or stuffed eggplant with rice", 
        tags: ["hotel", "fairlie", "fairlie hotel"],     
        net: "Broadband Modem (ask staff for access)",
        app: "LCD Television, Surround Sound System",
        cell: "03-767-0099",
        email: "owner312@gmail.com"
    },
    {
        name: "hotel3",
        id: 9,
        type: "hotel",
        title: "4 Star Southern Castle",
        textDesc: "",
        address: "42 Hayman Road, Lake Pukaki",
        latitude: -44.15788528499936,
        longitude: 170.22172057762708,
        costNight: 157.00,
        numPeopleMin: 1,
        numPeopleMax: 2,
        numRoom: "1 bedroom, ensuite bathroom and kitchen, pool access",
        numNightMin: 1,
        numNightMax: 5, 
        pic1: './img/hotel3.jpg',
        pic2: './img/hotel3b.jpg',
        pic3: './img/hotel3c.jpg',
        pic4: './img/hotelmenu1.jpg',
        menu1: "Deluxe cereal with fresh fruit and glass of chocolate milk or protein shake",
        menu2: "Roast chicken or roast lamb  sandwiches or kumara chips plus dip",
        menu3: "Laksa curry with fresh prawns or stuffed eggplant with rice",
        tags: ["hotel", "lake pukaki", "4 star southern castle"],   
        net: "Guest Wifi (password provided)",
        app: "LCD Television, PS5/Xbox One (on hire)",
        cell: "0800-4-STAR",
        email: "4star_acc@hotelworld.co.ru" 

    },
    {
        name: "house1",
        id: 10,
        type: "house",
        title: "Juno's Property",
        textDesc: "",
        address: "5 McKenzie Pass Road, McKenzie Country",
        latitude: -44.194758318184086,
        longitude: 170.5104764713155,
        costNight: 240.00,
        numPeopleMin: 1,
        numPeopleMax: 4,
        numRoom: "1 Bedroom, 1 bathroom, open plan kitchen, living room and dining room. Outdoor hot bath.",
        numNightMin: 2,
        numNightMax: 15,
        pic1: './img/house1.jpg',
        pic2: './img/house1b.jpg',
        pic3: './img/house1c.jpg',
        pic4: './img/housemenu.jpeg',
        menu1: "Pancakes with fried banana and bacon or french toast with berry compote",
        menu2: "Homemade pepperoni pizza or vegetarian platter",
        menu3: "Lamb cutlets with mint sauce and bread or selected roast vegetables and lentils",  
        tags: ["house", "McKenzie Country", "juno's property"],   
        net: "None Allowed (we provide escape from the modern world!)",
        app: "Selection of non-electric musical instruments and bicycles",
        cell: "None (write to us at above adress)",
        email: "None (write to us at above adress)"
    },
    {
        name: "house2",
        id: 11,
        type: "house",
        title: "Tekapo Opera House",
        textDesc: "",
        address: "12 Rankin Rise, Tekapo",
        latitude: -44.01042494873107,
        longitude: 170.49275243414104,
        costNight: 240.00,
        numPeopleMin: 1,
        numPeopleMax: 4,
        numRoom: "2 bedrooms, 2 ensuite bathrooms, 1 living room, 1 combined dining room and kitchen, 2 studies.",
        numNightMin: 2,
        numNightMax: 15,
        pic1: './img/house2.jpg',
        pic2: './img/house2b.jpg',
        pic3: './img/house2c.jpg',
        pic4: './img/housemenu.jpeg',
        menu1: "Pancakes with fried banana and bacon or french toast with berry compote",
        menu2: "Homemade pepperoni pizza or vegetarian platter",
        menu3: "Lamb cutlets with mint sauce and bread or selected roast vegetables and lentils", 
        tags: ["house", "tekapo", "tekapo opera house"],    
        net: "Private Wifi",
        app: "Desktop Gaming PC, Desktop Office PC, Surround Sound System",
        cell: "None",
        email: "tekapo_observer@galaxywanderer.co.net"
    },
    {
        name: "house3",
        id: 12,
        type: "house",
        title: "Tripod House",
        textDesc: "",
        address: "31 Perambulator Lane, Kimbell",
        latitude: -44.04548055252425,
        longitude: 170.75571073506416,
        costNight: 240.00,
        numPeopleMin: 1,
        numPeopleMax: 4,
        numRoom: " master bedroom, 2 child bedrooms, 1 open plan living room and dining room, 1 kitchen, 1 bathroom. Pool on property",
        numNightMin: 2,
        numNightMax: 15,
        pic1: './img/house3.jpg',
        pic2: './img/house3b.jpg',
        pic3: './img/house3c.jpg',
        pic4: './img/housemenu.jpeg',
        menu1: "Pancakes with fried banana and bacon or french toast with berry compote",
        menu2: "Homemade pepperoni pizza or vegetarian platter",
        menu3: "Lamb cutlets with mint sauce and bread or selected roast vegetables and lentils",   
        tags: ["house", "kimbell", "tripod house",], 
        net: "High Speed Broadband",
        app: "Organise with owners (email below)",
        cell: "03-677-9898",
        email: "randonaught420@msn.com"
    },
]

//end array master==============================================================================================


//small cards (small, selectable proprty cards at start)==========================================================
function smallCards(event){
    
 
    let k = 0;
    for(k = 0; k < objectArray.length; k++)    {
        

         $('#smallCard').append(
        `     
              
        
        <div class="smallcardcontainer_box">
        
          <h5 class="smallcardcontainer_title">${objectArray[k].title}</h5>
          <img class="smallcardcontainer_img" src="${objectArray[k].pic1}" alt="accommo picture">
          <p class="card_text" id="smallcardText">${objectArray[k].type} $${objectArray[k].costNight}.00</p>
          <br />
          <br />
         </div>

        `
       
    )};

    $('#optContainer').empty().append(

        `
        <div class="optContainer_noclick">
        <container class="iconholder">
            <a href="javascript:void(0);" class="iconholder_icon" onclick="typeFunction()">
          <button class="linkclick_budget" type="button">Budget Bracket</button>
            </a>  
        </container>
        <button class="linkclick3" type="button" onclick="objectFilterer()">Select Stay</button>
        
        <div class="peopleselect2"> 
        <form  id="peopleFilterForm"  action="">
        <select onclick="peopleFilterer()"  id="peopleFilterSelect"  name="formpop" class="peopleselect_select2" >
        <option class= "peopleselect_option" disabled selected> Filter By People</option>
            <option  value="1pop" class= "peopleselect_option2" name="formpop" id="peopleFilter" >1 Person</option>
            <option  value="2pop" class= "peopleselect_option2" name="formpop" id="peopleFilter" >2 People</option> 
            <option  value="3pop" class= "peopleselect_option2" name="formpop" id="peopleFilter" >3 People</option>   
            <option value="4pop" class= "peopleselect_option2" name="formpop" id="peopleFilter" >4 People</option>              
        </select>
        </form>
        </div> 
        
        </div>
        `
    )

}

smallCards();
//end small cards==============================================================================================

//generate main cards==============================================================================================
function generateCard(x){
    $('#moverClear').empty();
    $('#resultSend').append(
        `
        <button id="resultSend" class="linkclick4" type="button" onclick="resultsFinished()">Book Stay</button> 
        `
    )


    $('#cardContent').empty().append(
        `
                <div class="cardbox">
                    <div class="cardbox_left">
                        <div class="imgbox">
                        <img class="img1" src="${objectArray[x].pic1}" alt="Card image cap">
                            <div class="imgbox2">
                            <img class="img2" src="${objectArray[x].pic2}" alt="Card image cap">
                            <img class="img2" src="${objectArray[x].pic3}" alt="Card image cap">
                            
                            </div>
                            <p class="card_text" id="menuPick"> No menu Selected</p>
                        </div>  
                    </div>
                    <div class="cardbox_right">
                        <div class="card-body">
                                        <h5 class="card_title">${objectArray[x].title}</h5>
                                        <p class="card_text">Cost Per Night: $${objectArray[x].costNight}</p>
                                        <p class="card_text">Internet: ${objectArray[x].net}</p>
                                        <p class="card_text">Room Arrangement: ${objectArray[x].numRoom}</p>
                                        <p class="card_text">Onsite Appliances: ${objectArray[x].app}</p>                                        
                                        <p class="card_text">Contact Number: ${objectArray[x].cell}</p>
                                        <p class="card_text">Email: ${objectArray[x].email}</p>
                                        
                            <div class="cardButtons">
                            <button id="backSpace" class="linkclick2" type="button" onclick="backButton()">Go Back</button>           
                            <button1 id="${objectArray[x].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
                                Menu
                            </button1>
                            </div>
                           
                        </div>
                    </div>
                </div> 

        `
    );
modal()

};

//end main card generation==============================================================================================


//card modals ==============================================================================================
function modal(){
    $(".moreInformation").click(function(){
        let i = 0;
        for(i = 0; i<objectArray.length; i++){
            if(parseInt(this.id) === objectArray[i].id){
                // console.log(objectArray[i].artist);
                // one way to clear data is use the jquery function
                // empty() - it removes all child nodes from the selected element
                $('#exampleModalLongTitle').empty().append(
                    `
                    <h1 class="modal-title"> ${objectArray[i].title} </h1>
                    <h1 class="modal-title_label" id="menuLabel">Add menu?</h1>

                    `
                )
                $("#objectArrayModalInfo").empty().append(
                    `
                    <img class= "modal-img" src="${objectArray[i].pic4}" alt="Creature Picture">
                       <p class="modal-text">Breakfast: ${objectArray[i].menu1}</p>
                       <p class="modal-text">Lunch: ${objectArray[i].menu2}</p>
                       <p class="modal-text">Dinner: ${objectArray[i].menu3}</p>
                       <select onclick="menuFunction()" name="menuClicker" id="menuClick"  class="menu">
                       <option class= "menu_option" disabled selected id="menuClick"> Add Menu? </option>
                           <option value="true" class= "menu_option" id="menuClick">Yes</option>
                           <option value="false" class= "menu_option" id="menuClick">No</option>
                           <option value="false2" class= "menu_option" id="menuClick">Cancel</option>
                        </select>
                    `
                );
                
            }
        }
    });
};
//end card modalsr==============================================================================================


//drop hamburger menu(budget) =================================================================================================

function typeFunction() {
    var x = document.getElementById("navid");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };
//end drop down menu(budget) =================================================================================================


// menu buttons============================================================================================================
buttonlinkHostel.addEventListener("click", displayHostel); 

buttonlinkMotel.addEventListener("click", displayMotel);
buttonlinkHotel.addEventListener("click", displayHotel);
buttonlinkHouse.addEventListener("click", displayHouse);

// end menu buttons============================================================================================================

// display/append budget categories============================================================================================================

function displayHostel(){
    $("#imgOne").empty();     
    $("#optContainer").empty().append(
        `
        <div class="hosteldiv">
        
        <form class="myform" action=""> 
        
                <label for="objectType" class="mylabel">Hostel 1</label>                
                <label for="objectType" class="mylabel">Hostel 2</label>
                <label for="objectType" class="mylabel">Hostel 3</label>
        </form>
        
                <hr class="optionsline"> 
        
        
        <form class="myform" action="">      
                <input type="radio" name="objectType" value="hostel1" class="mycheck" id="budgetcheck">
                <input type="radio" name="objectType" value="hostel2" class="mycheck" id="budgetcheck">
                <input type="radio" name="objectType" value="hostel3" class="mycheck" id="budgetcheck">
        
        </form>
        
        </div>
        <container class="iconhostel1" type="onclick" id="hostel1push"> </container><container class=iconhostel2> </container><container class=iconhostel3></container>
        ` 
    );
typeFunction();

$("#buttonselectID").empty().append(
    `
    <button class="linkclick_select" id="goButton" type="button">Select Stay</button>
    `
);
}
function displayMotel(){
    $("#imgOne").empty();
    $("#optContainer").empty().append(
        `
        <div class="hosteldiv">
        
        <form class="myform" action=""> 
        
                <label for="objectType" class="mylabel">Motel 1</label>                
                <label for="objectType" class="mylabel">Motel 2</label>
                <label for="objectType" class="mylabel">Motel 3</label>
        </form>
                <hr class="optionsline"> 
        
        
        <form class="myform" action="">      
                <input type="radio" name="objectType" value="motel1" class="mycheck" id="budgetcheck">
                <input type="radio" name="objectType" value="motel2" class="mycheck" id="budgetcheck">
                <input type="radio" name="objectType" value="motel3" class="mycheck" id="budgetcheck">
        
        </form>
        
        </div>
        <container class="iconmotel1"> </container><container class="iconmotel2"> </container><container class="iconmotel3"></container>
        ` 
    );
    typeFunction()
    $("#buttonselectID").empty().append(
        `
        <button class="linkclick_select" id="goButton" type="button">Select Stay</button>
        `
    );
    }
function displayHotel(){
    $("#imgOne").empty();
    $("#optContainer").empty().append(
        `
        <div class="hosteldiv">
        
        <form class="myform" action=""> 
        
                <label for="objectType" class="mylabel">Hotel 1</label>                
                <label for="objectType" class="mylabel">Hotel 2</label>
                <label for="objectType" class="mylabel">Hotel 3</label>
        </form>
                <hr class="optionsline"> 
        
        
        <form class="myform" action="">      
                <input type="radio" name="objectType" value="hotel1" class="mycheck" id="budgetcheck">
                <input type="radio" name="objectType" value="hotel2" class="mycheck" id="budgetcheck">
                <input type="radio" name="objectType" value="hotel3" class="mycheck" id="budgetcheck">
        
        </form>
        
        </div>
        <container class="iconhotel1"> </container><container class="iconhotel2"> </container><container class="iconhotel3"></container>
        ` 
    );
    typeFunction()


    $("#buttonselectID").empty().append(
        `
        <button class="linkclick_select" id="goButton" type="button">Select Stay</button>
        `
    );
    
    }
function displayHouse(){
    $("#imgOne").empty();
    $("#optContainer").empty().append(
        `
        <div class="hosteldiv">
        
        <form class="myform" action=""> 
        
                <label for="objectType" class="mylabel">House 1</label>                
                <label for="objectType" class="mylabel">House 2</label>
                <label for="objectType" class="mylabel">House 3</label>
        </form>
                <hr class="optionsline"> 
        
        
        <form class="myform" action="" id="budgetcheck">      
                <input type="radio" name="objectType" value="house1" class="mycheck" id="budgetcheck">
                <input type="radio" name="objectType" value="house2" class="mycheck" id="budgetcheck">
                <input type="radio" name="objectType" value="house3" class="mycheck" id="budgetcheck">
        
        </form>
        
        </div>
        <container class=iconhouse1> </container><container class=iconhouse2> </container><container class=iconhouse3></container>
        ` 
    );
    typeFunction()
    $("#buttonselectID").empty().append(
        `
        <button class="linkclick_select"" id="goButton" type="button">Select Stay</button>
        `
    );
    }

// end display/append budget categories============================================================================================================


//main card filterer=================================================================================================================
function objectFilterer(event){
    // $('#cardContent').empty();
    // event.preventDefault();
    console.log('clicked');
    
    reloadMarkers();
    
  
    $('input[name="objectType"]:checked').each( function(){
    selectedStay.push(this.value);})
    ;  



    
    
    let i = 0;
    for(i = 0; i < selectedStay.length; i++){

        if(selectedStay[i] === 'hostel1'){
           let i = 0;
           for(i = 0; i<objectArray.length; i++){
                if(objectArray[i].name === 'hostel1'){
                    let titleA = objectArray[i].title;
                    costReset();
                    reloadMarkers();
                   accommoFunction(titleA);
                    generateCard(i);
                    generatePeopleHostel();
                    let u= objectArray[i].costNight;
                    selectedCost.push(u);
                    console.log(selectedCost);
                    document.getElementById("minMax1").innerHTML =  `You only need to pick a START DATE for this Hostel.`;
                    let p= objectArray[i].numNightMax;
                    selectedNight.push(p);
                    console.log(selectedNight);
                    let v= objectArray[i].numNightMin;
                    objectMin.push(v);
                    
                   

                    let location = {lat: objectArray[i].latitude, lng:objectArray[i].longitude};
                    console.log(location);
    
                    let marker = new google.maps.Marker({
                        position: location,
                        map:map,
                        zoom: 10,
                    });
                    markers.push(marker);
                }
                
            }
        }
        if(selectedStay[i] === 'hostel2'){
            let i = 0;
            for(i = 0; i<objectArray.length; i++){
                 if(objectArray[i].name === 'hostel2'){
                    let titleA = objectArray[i].title;
                    costReset();
                    reloadMarkers();
                   accommoFunction(titleA);
                    generateCard(i);
                    generatePeopleHostel();
                    let u= objectArray[i].costNight;
                    selectedCost.push(u);
                    console.log(selectedCost);
                    let p= objectArray[i].numNightMax;
                    selectedNight.push(p);
                    console.log(selectedNight);
                    let v= objectArray[i].numNightMin;
                    objectMin.push(v);
                    document.getElementById("minMax1").innerHTML = `You only need to pick a START DATE for this Hostel.`;
                    let location = {lat: objectArray[i].latitude, lng:objectArray[i].longitude};
                    console.log(location);
    
                    let marker = new google.maps.Marker({
                        position: location,
                        map:map,
                        zoom: 10,
                    });
                    markers.push(marker);
                }
            }
        }
         if(selectedStay[i] === 'hostel3'){
            let i = 0;
            for(i = 0; i<objectArray.length; i++){
                 if(objectArray[i].name === 'hostel3'){
                    let titleA = objectArray[i].title;
                    costReset();
                    reloadMarkers();
                    accommoFunction(titleA);
                    generateCard(i);
                    generatePeopleHostel();
                    let u= objectArray[i].costNight;
                    selectedCost.push(u);
                    console.log(selectedCost);
                    let p= objectArray[i].numNightMax;
                    selectedNight.push(p);
                    console.log(selectedNight);
                    let v= objectArray[i].numNightMin;
                    objectMin.push(v);
                    document.getElementById("minMax1").innerHTML =  `You only need to pick a START DATE for this Hostel.`;
                    let location = {lat: objectArray[i].latitude, lng:objectArray[i].longitude};
                    console.log(location);
    
                    let marker = new google.maps.Marker({
                        position: location,
                        map:map
                    });
                    markers.push(marker);
                }
            }
        }
         if(selectedStay[i] === 'motel1'){
            let i = 0;
            for(i = 0; i<objectArray.length; i++){
                 if(objectArray[i].name === 'motel1'){
                    let titleA = objectArray[i].title;
                    costReset();
                    reloadMarkers();
                    accommoFunction(titleA);
                    generateCard(i);
                    generatePeopleMotel();
                    let u= objectArray[i].costNight;
                    selectedCost.push(u);
                    console.log(selectedCost);
                    let p= objectArray[i].numNightMax;
                    selectedNight.push(p);
                    console.log(selectedNight);
                    let v= objectArray[i].numNightMin;
                    objectMin.push(v);
                    document.getElementById("minMax1").innerHTML = `Mimimum Night Stay = ${objectArray[i].numNightMin}`;
                    document.getElementById("minMax2").innerHTML = `Maximum Night Stay = ${objectArray[i].numNightMax}`;
                    
                    let location = {lat: objectArray[i].latitude, lng:objectArray[i].longitude};
                    console.log(location);
    
                    let marker = new google.maps.Marker({
                        position: location,
                        map:map
                    });
                    markers.push(marker);
                }
            }
        }
         if(selectedStay[i] === 'motel2'){
            let i = 0;
            for(i = 0; i<objectArray.length; i++){
                 if(objectArray[i].name === 'motel2'){
                    let titleA = objectArray[i].title;
                    costReset();
                    reloadMarkers();
                    accommoFunction(titleA);
                    generateCard(i);
                    generatePeopleMotel();
                    let u= objectArray[i].costNight;
                    selectedCost.push(u);
                    console.log(selectedCost);
                    let p= objectArray[i].numNightMax;
                    selectedNight.push(p);
                    console.log(selectedNight);
                    let v= objectArray[i].numNightMin;
                    objectMin.push(v);
                    document.getElementById("minMax1").innerHTML = `Mimimum Night Stay = ${objectArray[i].numNightMin}`;
                    document.getElementById("minMax2").innerHTML = `Maximum Night Stay = ${objectArray[i].numNightMax}`;
                    
                    let location = {lat: objectArray[i].latitude, lng:objectArray[i].longitude};
                    console.log(location);
    
                    let marker = new google.maps.Marker({
                        position: location,
                        map:map
                    });
                    markers.push(marker);
                }
            }
        }
         if(selectedStay[i] === 'motel3'){
            let i = 0;
            for(i = 0; i<objectArray.length; i++){
                 if(objectArray[i].name === 'motel3'){
                    let titleA = objectArray[i].title;
                    costReset();
                    reloadMarkers();
                    accommoFunction(titleA);
                    generateCard(i);
                    generatePeopleMotel();
                    let u= objectArray[i].costNight;
                    selectedCost.push(u);
                    console.log(selectedCost);
                    let p= objectArray[i].numNightMax;
                    selectedNight.push(p);
                    console.log(selectedNight);
                    let v= objectArray[i].numNightMin;
                    objectMin.push(v);
                    document.getElementById("minMax1").innerHTML = `Mimimum Night Stay = ${objectArray[i].numNightMin}`;
                    document.getElementById("minMax2").innerHTML = `Maximum Night Stay = ${objectArray[i].numNightMax}`;
                    
                    let location = {lat: objectArray[i].latitude, lng:objectArray[i].longitude};
                    console.log(location);
    
                    let marker = new google.maps.Marker({
                        position: location,
                        map:map
                    });
                    markers.push(marker);
                }
            }
        }
         if(selectedStay[i] === 'hotel1'){
            let i = 0;
            for(i = 0; i<objectArray.length; i++){
                 if(objectArray[i].name === 'hotel1'){
                    let titleA = objectArray[i].title;
                    costReset();
                    reloadMarkers();
                    accommoFunction(titleA);
                    generateCard(i);
                    generatePeopleHotel();
                    let u= objectArray[i].costNight;
                    selectedCost.push(u);
                    console.log(selectedCost);
                    let p= objectArray[i].numNightMax;
                    selectedNight.push(p);
                    console.log(selectedNight);
                    let v= objectArray[i].numNightMin;
                    objectMin.push(v);
                    document.getElementById("minMax1").innerHTML = `Mimimum Night Stay = ${objectArray[i].numNightMin}`;
                    document.getElementById("minMax2").innerHTML = `Maximum Night Stay = ${objectArray[i].numNightMax}`;
                   
                    let location = {lat: objectArray[i].latitude, lng:objectArray[i].longitude};
                    console.log(location);
    
                    let marker = new google.maps.Marker({
                        position: location,
                        map:map
                    });
                    markers.push(marker);
                }
            }
        }
         if(selectedStay[i] === 'hotel2'){
            let i = 0;
            for(i = 0; i<objectArray.length; i++){
                 if(objectArray[i].name === 'hotel2'){
                    let titleA = objectArray[i].title;
                    costReset();
                    reloadMarkers();
                    accommoFunction(titleA);
                    generateCard(i);
                    generatePeopleHotel();
                    let u= objectArray[i].costNight;
                    selectedCost.push(u);
                    console.log(selectedCost);
                    let p= objectArray[i].numNightMax;
                    selectedNight.push(p);
                    console.log(selectedNight);
                    let v= objectArray[i].numNightMin;
                    objectMin.push(v);
                    document.getElementById("minMax1").innerHTML = `Mimimum Night Stay = ${objectArray[i].numNightMin}`;
                    document.getElementById("minMax2").innerHTML = `Maximum Night Stay = ${objectArray[i].numNightMax}`;
                    
                    let location = {lat: objectArray[i].latitude, lng:objectArray[i].longitude};
                    console.log(location);
    
                    let marker = new google.maps.Marker({
                        position: location,
                        map:map
                    });
                    markers.push(marker);
                }
            }
        }
         if(selectedStay[i] === 'hotel3'){
            let i = 0;
            for(i = 0; i<objectArray.length; i++){
                 if(objectArray[i].name === 'hotel3'){
                    let titleA = objectArray[i].title;
                    costReset();
                    reloadMarkers();
                    accommoFunction(titleA);
                    generateCard(i);
                    generatePeopleHotel();
                    let u= objectArray[i].costNight;
                    selectedCost.push(u);
                    console.log(selectedCost);
                    let p= objectArray[i].numNightMax;
                    selectedNight.push(p);
                    console.log(selectedNight);
                    let v= objectArray[i].numNightMin;
                    objectMin.push(v);
                    document.getElementById("minMax1").innerHTML = `Mimimum Night Stay = ${objectArray[i].numNightMin}`;
                    document.getElementById("minMax2").innerHTML = `Maximum Night Stay = ${objectArray[i].numNightMax}`;
                    
                    let location = {lat: objectArray[i].latitude, lng:objectArray[i].longitude};
                    console.log(location);
    
                    let marker = new google.maps.Marker({
                        position: location,
                        map:map
                    });
                    markers.push(marker);
                }
            }
        }
         if(selectedStay[i] === 'house1'){
            let i = 0;
            for(i = 0; i<objectArray.length; i++){
                 if(objectArray[i].name === 'house1'){
                    let titleA = objectArray[i].title;
                    costReset();
                    reloadMarkers();
                    accommoFunction(titleA);
                    generateCard(i);
                    generatePeopleHouse();
                    let u= objectArray[i].costNight;
                    selectedCost.push(u);
                    console.log(selectedCost);
                    let p= objectArray[i].numNightMax;
                    selectedNight.push(p);
                    console.log(selectedNight);
                    let v= objectArray[i].numNightMin;
                    objectMin.push(v);
                    document.getElementById("minMax1").innerHTML = `Mimimum Night Stay = ${objectArray[i].numNightMin}`;
                    document.getElementById("minMax2").innerHTML = `Maximum Night Stay = ${objectArray[i].numNightMax}`;
                    
                    let location = {lat: objectArray[i].latitude, lng:objectArray[i].longitude};
                    console.log(location);
    
                    let marker = new google.maps.Marker({
                        position: location,
                        map:map
                    });
                    markers.push(marker);
                }
            }
        }
         if(selectedStay[i] === 'house2'){
            let i = 0;
            for(i = 0; i<objectArray.length; i++){
                 if(objectArray[i].name === 'house2'){
                    let titleA = objectArray[i].title;
                    costReset();
                    reloadMarkers();
                    accommoFunction(titleA);
                    generateCard(i);
                    generatePeopleHouse();
                    let u= objectArray[i].costNight;
                    selectedCost.push(u);
                    console.log(selectedCost);
                    let p= objectArray[i].numNightMax;
                    selectedNight.push(p);
                    console.log(selectedNight);
                    let v= objectArray[i].numNightMin;
                    objectMin.push(v);
                    document.getElementById("minMax1").innerHTML = `Mimimum Night Stay = ${objectArray[i].numNightMin}`;
                    document.getElementById("minMax2").innerHTML = `Maximum Night Stay = ${objectArray[i].numNightMax}`;
                    
                    
                    let location = {lat: objectArray[i].latitude, lng:objectArray[i].longitude};
                    console.log(location);
    
                    let marker = new google.maps.Marker({
                        position: location,
                        map:map
                    });
                    markers.push(marker);
                    
                }
            }
        }
         if(selectedStay[i] === 'house3'){
            let i = 0;
            for(i = 0; i<objectArray.length; i++){
                 if(objectArray[i].name === 'house3'){
                    let titleA = objectArray[i].title;
                    costReset();
                    reloadMarkers();
                    accommoFunction(titleA);
                    generateCard(i);
                    generatePeopleHouse();
                    let u= objectArray[i].costNight;
                    selectedCost.push(u);
                    console.log(selectedCost);
                    let p= objectArray[i].numNightMax;
                    selectedNight.push(p);
                    console.log(selectedNight);
                    let v= objectArray[i].numNightMin;
                    objectMin.push(v);
                    document.getElementById("minMax1").innerHTML = `Mimimum Night Stay = ${objectArray[i].numNightMin}`;
                    document.getElementById("minMax2").innerHTML = `Maximum Night Stay = ${objectArray[i].numNightMax}`;
                    

                    let location = {lat: objectArray[i].latitude, lng:objectArray[i].longitude};
                    console.log(location);
    
                    let marker = new google.maps.Marker({
                        position: location,
                        map:map
                    });
                    markers.push(marker);
                }
            }
        }
        else{

        }
        
        modal();
        $("#galaxy").empty();
        
    };
};


//end main card filterer=================================================================================================================

//main card filterer buttons=================================================================================================================
goButton.addEventListener("click", objectFilterer);


//end main card filterer buttons=================================================================================================================



// people select functions(for results)=====================================================================================================

function generatePeopleHostel() {
    $('#peoplebuttonHolder').empty().append(
        `
        <div class="peopleselect"> 
      
        <select onclick="peopleFunction()" name="numberOfPeople" id="peopleNumber"  class="peopleselect_select">
        <option class= "peopleselect_option" disabled selected> Number of People</option>
            <option value="1" class= "peopleselect_option">1</option>
        </select>
    </div>
 
        `
    )

}
function generatePeopleMotel() {
    $('#peoplebuttonHolder').empty().append(
        `
    <div class="peopleselect"> 
      
        <select onclick="peopleFunction()" name="numberOfPeople" id="peopleNumber" class="peopleselect_select">
        <option class= "peopleselect_option" disabled selected> Number of People</option>
            <option value="2" class= "peopleselect_option">2</option>
            <option value="3" class= "peopleselect_option">3</option>
            <option value="4" class= "peopleselect_option">4</option>
        </select>
    </div>
 
        `
    )

}
function generatePeopleHotel() {
    $('#peoplebuttonHolder').empty().append(
        `
    <div class="peopleselect"> 
      
        <select onclick="peopleFunction()" name="numberOfPeople" id="peopleNumber"  class="peopleselect_select">
        <option class= "peopleselect_option" disabled selected> Number of People</option>
            <option value="1" class= "peopleselect_option">1</option>
            <option value="2" class= "peopleselect_option">2</option>            
        </select>
    </div>
 
        `
    )

}
function generatePeopleHouse() {
    
    $('#peoplebuttonHolder').empty().append(
        `
    <div class="peopleselect"> 
      
        <select onclick="peopleFunction()" name="numberOfPeople" id="peopleNumber"  class="peopleselect_select">
        <option class= "peopleselect_option" disabled selected> Number of People</option>
            <option value="1" class= "peopleselect_option">1</option>
            <option value="2" class= "peopleselect_option">2</option>
            <option value="3" class= "peopleselect_option">3</option> 
            <option value="4" class= "peopleselect_option">4</option>                       
        </select>
    </div>
 
 
        `
    )

}
 

// end people select functions(for results)=====================================================================================================


// display results (people and title)=====================================================================================================


function peopleFunction() {
   let x = document.getElementById("peopleNumber").value;
   document.getElementById("peopleDisplay").innerHTML = `<style="color: white">${x} Person/s`; 
   resultThree.push(true);

};

function accommoFunction(title) {
console.log(title);

document.getElementById("houseDisplay").innerHTML = `<style="color: white">${title}`;
resultOne.push(true); 

 };


// end display results (people and title)=====================================================================================================



 // clear (reset) button=====================================================================================================


clearButton.addEventListener("click", clearResults);



function clearResults() {

     

    document. location. reload();  
}

 // end clear button=====================================================================================================
  
// filter small cards by people number=====================================================================================================

function peopleFilterer(){ 

    reloadMarkers();


    $('#peopleFilterSelect').click(function(){ 

        selectedPeople.push(this.value);
        
    });


   
  console.log(selectedPeople);




       if(selectedPeople[1] === '1pop'){
        $('#moverClear').empty();
        
        $('#smallCard').empty().append(
                    `     
                          
                    
                    <div class="smallcardcontainer_box">
                    
                      <h5 class="smallcardcontainer_title">${objectArray[0].title}</h5>
                      <img class="smallcardcontainer_img" src="${objectArray[0].pic1}" alt="accommo picture">
                      <form class="moverCheck_form2" action="">      
                      <input type="radio" name="objectType" value="hostel1" class="mycheck">
                      </form>
                     </div>
                     <div class="smallcardcontainer_box">
                    
                     <h5 class="smallcardcontainer_title">${objectArray[1].title}</h5>
                     <img class="smallcardcontainer_img" src="${objectArray[1].pic1}" alt="accommo picture">
                     <form class="moverCheck_form2" action="">      
                     <input type="radio" name="objectType" value="hostel2" class="mycheck">
                     </form>
                    </div>
                    </div>
                    <div class="smallcardcontainer_box">
                    
                    <h5 class="smallcardcontainer_title">${objectArray[2].title}</h5>
                    <img class="smallcardcontainer_img" src="${objectArray[2].pic1}" alt="accommo picture">
\
                    <form class="moverCheck_form2" action="">      
                    <input type="radio" name="objectType" value="hostel3" class="mycheck">
                    </form>
                   </div>
                   </div>
                    `
                   
                )
                selectedPeople.length = 0;
              
            };
                if(selectedPeople[1] === '2pop'){
                    $('#moverClear').empty();
                    $('#smallCard').empty().append(
                                `     
                                      
                                
                                <div class="smallcardcontainer_box">
                                
                                  <h5 class="smallcardcontainer_title">${objectArray[3].title}</h5>
                                  <img class="smallcardcontainer_img" src="${objectArray[3].pic1}" alt="accommo picture">
                                  <form class="moverCheck_form2" action="">      
                                  <input type="radio" name="objectType" value="motel1" class="mycheck">
                                  </form>
                                 </div>

                                 <div class="smallcardcontainer_box">
                                
                                 <h5 class="smallcardcontainer_title">${objectArray[4].title}</h5>
                                 <img class="smallcardcontainer_img" src="${objectArray[4].pic1}" alt="accommo picture">
                                 <form class="moverCheck_form2" action="">      
                                 <input type="radio" name="objectType" value="motel2" class="mycheck">
                                 </form>
                                </div>

                                <div class="smallcardcontainer_box">
                                
                                    <h5 class="smallcardcontainer_title">${objectArray[5].title}</h5>
                                    <img class="smallcardcontainer_img" src="${objectArray[5].pic1}" alt="accommo picture">
                                    <form class="moverCheck_form2" action="">      
                                    <input type="radio" name="objectType" value="motel3" class="mycheck">
                                    </form>
                                </div>

                                <div class="smallcardcontainer_box">
                                <h5 class="smallcardcontainer_title">${objectArray[6].title}</h5>
                                <img class="smallcardcontainer_img" src="${objectArray[6].pic1}" alt="accommo picture">
                                <form class="moverCheck_form2" action="">      
                                <input type="radio" name="objectType" value="hotel1" class="mycheck">
                                </form>
                                </div>
                                
                                <div class="smallcardcontainer_box">
                                <h5 class="smallcardcontainer_title">${objectArray[7].title}</h5>
                                <img class="smallcardcontainer_img" src="${objectArray[7].pic1}" alt="accommo picture">
                                <form class="moverCheck_form2" action="">      
                                <input type="radio" name="objectType" value="hotel2" class="mycheck">
                                </form>
                                </div>

                                
                                <div class="smallcardcontainer_box">
                                <h5 class="smallcardcontainer_title">${objectArray[8].title}</h5>
                                <img class="smallcardcontainer_img" src="${objectArray[8].pic1}" alt="accommo picture">
                                <form class="moverCheck_form2" action="">      
                                <input type="radio" name="objectType" value="hotel3" class="mycheck">
                                </form>
                                </div>
                               
                                <div class="smallcardcontainer_box">
                                <h5 class="smallcardcontainer_title">${objectArray[9].title}</h5>
                                <img class="smallcardcontainer_img" src="${objectArray[9].pic1}" alt="accommo picture">
                                <form class="moverCheck_form2" action="">      
                                <input type="radio" name="objectType" value="house1" class="mycheck">
                                </form>
                                </div>
                               
                                <div class="smallcardcontainer_box">
                                <h5 class="smallcardcontainer_title">${objectArray[10].title}</h5>
                                <img class="smallcardcontainer_img" src="${objectArray[10].pic1}" alt="accommo picture">
                                <form class="moverCheck_form2" action="">      
                                <input type="radio" name="objectType" value="house2" class="mycheck">
                                </form>
                                </div>
                                
                                <div class="smallcardcontainer_box">
                                <h5 class="smallcardcontainer_title">${objectArray[11].title}</h5>
                                <img class="smallcardcontainer_img" src="${objectArray[11].pic1}" alt="accommo picture">
                                <form class="moverCheck_form2" action="">      
                                <input type="radio" name="objectType" value="house3" class="mycheck">
                                </form>
                                </div>

                                

                           
                                `
                               
                            )
                            selectedPeople.length = 0;
                            
                        };

                            if(selectedPeople[1] === '3pop'){
                                $('#moverClear').empty();
                                $('#smallCard').empty().append(
                                            `     
                                                  
                                            
                                            <div class="smallcardcontainer_box">
                                
                                            <h5 class="smallcardcontainer_title">${objectArray[3].title}</h5>
                                            <img class="smallcardcontainer_img" src="${objectArray[3].pic1}" alt="accommo picture">
                                            <form class="moverCheck_form2" action="">      
                                            <input type="radio" name="objectType" value="motel1" class="mycheck">
                                            </form>
                                           </div>
          
                                           <div class="smallcardcontainer_box">
                                          
                                           <h5 class="smallcardcontainer_title">${objectArray[4].title}</h5>
                                           <img class="smallcardcontainer_img" src="${objectArray[4].pic1}" alt="accommo picture">
                                           <form class="moverCheck_form2" action="">      
                                           <input type="radio" name="objectType" value="motel2" class="mycheck">
                                           </form>
                                          </div>
          
                                          <div class="smallcardcontainer_box">
                                          
                                              <h5 class="smallcardcontainer_title">${objectArray[5].title}</h5>
                                              <img class="smallcardcontainer_img" src="${objectArray[5].pic1}" alt="accommo picture">
                                              <form class="moverCheck_form2" action="">      
                                              <input type="radio" name="objectType" value="motel3" class="mycheck">
                                              </form>
                                          </div>
                                                <div class="smallcardcontainer_box">
                                                <h5 class="smallcardcontainer_title">${objectArray[9].title}</h5>
                                                <img class="smallcardcontainer_img" src="${objectArray[9].pic1}" alt="accommo picture">
                                                <form class="moverCheck_form2" action="">      
                                                <input type="radio" name="objectType" value="house1" class="mycheck">
                                                </form>
                                                </div>
                                               
                                                <div class="smallcardcontainer_box">
                                                <h5 class="smallcardcontainer_title">${objectArray[10].title}</h5>
                                                <img class="smallcardcontainer_img" src="${objectArray[10].pic1}" alt="accommo picture">
                                                <form class="moverCheck_form2" action="">      
                                                <input type="radio" name="objectType" value="house2" class="mycheck">
                                                </form>
                                                </div>
                                                
                                                <div class="smallcardcontainer_box">
                                                <h5 class="smallcardcontainer_title">${objectArray[11].title}</h5>
                                                <img class="smallcardcontainer_img" src="${objectArray[11].pic1}" alt="accommo picture">
                                                <form class="moverCheck_form2" action="">      
                                                <input type="radio" name="objectType" value="house3" class="mycheck">
                                                </form>
                                                </div>
                                       
                                            `
                                           
                                        )
                                        selectedPeople.length = 0;
                                        
                                    }; 

                                        if(selectedPeople[1] === '4pop'){
                                            $('#moverClear').empty();
                                            $('#smallCard').empty().append(
                                                        `     
                                                              
                                                        
                                                        <div class="smallcardcontainer_box">
                                
                                                        <h5 class="smallcardcontainer_title">${objectArray[3].title}</h5>
                                                        <img class="smallcardcontainer_img" src="${objectArray[3].pic1}" alt="accommo picture">
                                                        <form class="moverCheck_form2" action="">      
                                                        <input type="radio" name="objectType" value="motel1" class="mycheck">
                                                        </form>
                                                       </div>
                      
                                                       <div class="smallcardcontainer_box">
                                                      
                                                       <h5 class="smallcardcontainer_title">${objectArray[4].title}</h5>
                                                       <img class="smallcardcontainer_img" src="${objectArray[4].pic1}" alt="accommo picture">
                                                       <form class="moverCheck_form2" action="">      
                                                       <input type="radio" name="objectType" value="motel2" class="mycheck">
                                                       </form>
                                                      </div>
                      
                                                      <div class="smallcardcontainer_box">
                                                      
                                                          <h5 class="smallcardcontainer_title">${objectArray[5].title}</h5>
                                                          <img class="smallcardcontainer_img" src="${objectArray[5].pic1}" alt="accommo picture">
                                                          <form class="moverCheck_form2" action="">      
                                                          <input type="radio" name="objectType" value="motel3" class="mycheck">
                                                          </form>
                                                      </div>
                                                            <div class="smallcardcontainer_box">
                                                            <h5 class="smallcardcontainer_title">${objectArray[9].title}</h5>
                                                            <img class="smallcardcontainer_img" src="${objectArray[9].pic1}" alt="accommo picture">
                                                            <form class="moverCheck_form2" action="">      
                                                            <input type="radio" name="objectType" value="house1" class="mycheck">
                                                            </form>
                                                            </div>
                                                           
                                                            <div class="smallcardcontainer_box">
                                                            <h5 class="smallcardcontainer_title">${objectArray[10].title}</h5>
                                                            <img class="smallcardcontainer_img" src="${objectArray[10].pic1}" alt="accommo picture">
                                                            <form class="moverCheck_form2" action="">      
                                                            <input type="radio" name="objectType" value="house2" class="mycheck">
                                                            </form>
                                                            </div>
                                                            
                                                            <div class="smallcardcontainer_box">
                                                            <h5 class="smallcardcontainer_title">${objectArray[11].title}</h5>
                                                            <img class="smallcardcontainer_img" src="${objectArray[11].pic1}" alt="accommo picture">
                                                            <form class="moverCheck_form2" action="">      
                                                            <input type="radio" name="objectType" value="house3" class="mycheck">
                                                            </form>
                                                            </div>
                                                   
                                                        `
                                                       
                                                    )
                                                    selectedPeople.length = 0;
                                                    
                                                }; 
            


                }

// end filter small cards by people number=====================================================================================================


//datepicker===========================================================================================================


$(document).ready(function(){
   
  


    $('#startDate').datepicker({
        dateFormat: 'yy-mm-dd',
        inline: true,
        changeMonth: true,
        minDate: new Date(),
        maxDate: '+1y',

        onSelect: function(date){
            let selectDate = new Date(date);
            let msecInADay = 86400000;
            let stDate = new Date(selectDate.getTime() + msecInADay);
            $('#endDate').datepicker('option', 'minDate', stDate);
            let enDate = new Date(selectDate.getTime() + selectedNight * msecInADay);
            $('#endDate').datepicker('option','maxDate', enDate);
        }
   
    });
    $('#endDate').datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth:true
    });
    $('#calculateDays').click(function(){
        dateDiff();
        costCalc();
        let x = objectMin;
        let y= objectMinTwo;
        if (y <= x){
            window.alert(`Change the End Date to ${[x]} days after the Start Date`); 
            clearResults();
        }

        console.log(y);
        console.log(x);
       
    });
    function dateDiff(){
        let start = $(startDate).datepicker('getDate');
        let end = $(endDate).datepicker('getDate');
        let days = (end - start)/1000/60/60/24;
        $('#days').val(days);
        document.getElementById("nightDisplay").innerHTML = `<style="color: white">${[days]}`;
        resultTwo.push(true);
        objectMinTwo.push(days);
        console.log(objectMinTwo);
    }
});

//datepicker end==================================================================================================
function emptyCal(){

    $('#endDate').datepicker(enDate = []);
    
    $('#startDate').datepicker(stDate = []);
}
//cost calculator==============================================================
function costCalc(){
    let k = selectedCost;
  



    let stay = document.getElementById("nightDisplay").textContent;
  
    let value = stay * k;
    document.getElementById("costDisplay").innerHTML = `<style="color: white">$${[value]}.00`;  
 }

 //cost reset

 function costReset(){
    selectedCost.length = 0;
    selectedNight.length = 0;

 }

 //cost calc end =======================================================================


 // food menu=======================================================================================

 function menuFunction(){
     let food = document.getElementById("menuClick").value;
     console.log(food);

     if (food === 'true'){
         document.getElementById("menuLabel").innerHTML= `Menu Selected`;
         document.getElementById("menuPick").innerHTML= `Menu Option Selected`;

     }
     if (food === 'false'){
        document.getElementById("menuLabel").innerHTML= "Menu Not Selected";
        document.getElementById("menuPick").innerHTML= `No Food Wanted`;
     }
     if (food === 'false2'){
        document.getElementById("menuLabel").innerHTML= "Add menu?";
        document.getElementById("menuPick").innerHTML= `No menu Selected`;
     }

 }


 // food menu end=======================================================================================

 // back button start=======================================================================================

 function backButton(){
    clearResults();
}
// back button end=======================================================================================
// results suceed function=======================================================================================

function resultsFinished(){

if(resultOne[0] === true && resultTwo[0] === true && resultThree[0] === true){
window.alert("Thank You for Booking with Dark Skies Tekapo and Tourism NZ");
}else {
window.alert("Please Fill in all Parameters");
}

console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);
}
// results suceed function end=======================================================================================