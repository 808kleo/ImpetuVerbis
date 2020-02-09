var second = 0;
var minute = 0;
var hour = 0;

function Timer()
	{
        var output_second = second;
        var output_minute = minute;
        var output_hour = hour;
        second = second + 1;
		
        if (second == 60){
            minute = minute + 1;
            second = 0;
        }
        if(minute == 60){
            hour = hour + 1;
            minute = 0;
        }
        if(second < 10){
            output_second = "0"+second;
        }
        if(minute < 10){
            output_minute = "0"+minute;
        }
        if(hour < 10){
            output_hour = "0"+minute;
        }

        if(minute == 0 && hour == 0){
            document.getElementById("time").innerHTML = "Time with you.</br>"+output_second+" second";
        }
        
        else if (minute != 0 && hour == 0){
            document.getElementById("time").innerHTML = "Time with you.</br>"+output_minute+":"+output_second+" minutes";
        }
        else{
            document.getElementById("time").innerHTML = "Time with you.</br>"+output_hour+":"+output_minute+":"+output_second+" hours";
        }
		
        

		setTimeout("Timer()",1000);
    }

var ml = Math.random() * 20;
var mt = Math.random() * 10;
function RandomPlace()
    {
        const element = document.querySelector("#web-frame"); 
        element.style.setProperty("margin-left",ml +"%")
        element.style.setProperty("margin-top",mt +"%")
    }

var cnt_fullscreen = 0;
function FullScreen()
    {
        if(cnt_fullscreen % 2 == 0)
        {
            const element = document.querySelector("#web-frame"); 
            element.style.setProperty("margin-left",0 +"%");
            element.style.setProperty("margin-top",0 +"%");
            element.style.setProperty("width",99.8 +"%");
            element.style.setProperty("height",99.5 +"%");

            const element2 = document.querySelector("#logobar"); 
            element2.style.setProperty("width",0+"%");

            const element3 = document.querySelector("#ad"); 
            element3.style.setProperty("width",0+"%");

            const element4 = document.querySelector("#content");
            element4.style.setProperty("width",100+"%"); 
        }
        else
        {
            const element = document.querySelector("#web-frame"); 
            element.style.setProperty("margin-left",ml +"%");
            element.style.setProperty("margin-top",mt +"%");
            element.style.setProperty("width",70 +"%");
            element.style.setProperty("height",80 +"%");
    
            const element2 = document.querySelector("#logobar"); 
            element2.style.setProperty("width",5+"%");
    
            const element3 = document.querySelector("#ad"); 
            element3.style.setProperty("width",10+"%");
    
            const element4 = document.querySelector("#content");
            element4.style.setProperty("width",85+"%");   
        }
        cnt_fullscreen = cnt_fullscreen + 1;
    }



function ScaleStart()
    {
        const array = ["ma","yo","fo","ab","sd"]; 
        const p_container = document.querySelectorAll("#menu-content .p-container");
        const menu_cell = document.querySelectorAll(".menu-cell");
        var i = 0;
        var value_height = 0;
        var value_padding = 0;
        for (var el in array) 
        {
            const element = document.getElementById(array[el]);
            var value =  element.clientHeight;

            p_container[i].style.setProperty("height",value+"px");
            menu_cell[i].style.setProperty("height",value+"px");
            
            value_height = value_height + value;
            value_padding = value_padding + value/3;
            i=i+1;
        }
        
        const menu_ad = document.querySelector("#menu-ad");
        const img_ad = document.querySelector("#img-ad");

        value2 = menu_ad.clientWidth;

        img_ad.style.setProperty("height",value_height+value_padding+"px");
        img_ad.style.setProperty("width",value2+"px");
        
    }

function MenuUp()
    {
        
        const menu_button = document.querySelector(".menu-button");
        menu_button.style.setProperty("border","2px inset #858585")
        const menu_content = document.querySelector("#menu-content");
        menu_content.style.setProperty("display","block")

        const array = ["ma","yo","fo","ab","sd"]; 
        const p_container = document.querySelectorAll("#menu-content .p-container");
        const menu_cell = document.querySelectorAll(".menu-cell");
        var i = 0;
        var value_height = 0;
        var value_padding = 0;
        for (var el in array) 
        {
            const element = document.getElementById(array[el]);
            var value =  element.clientHeight;

            p_container[i].style.setProperty("height",value+"px");
            menu_cell[i].style.setProperty("height",value+"px");
            
            value_height = value_height + value;
            value_padding = value_padding + value/3;
            i=i+1;
        }
        
        const menu_ad = document.querySelector("#menu-ad");
        const img_ad = document.querySelector("#img-ad");

        value2 = menu_ad.clientWidth;

        img_ad.style.setProperty("height",value_height+value_padding+"px");
        img_ad.style.setProperty("width",value2+"px");
        



    }