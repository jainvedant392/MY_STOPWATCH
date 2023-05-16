let mini=0, sec=0, min=0, hrs=0, start_count=0, lap_num=0;
let time;
function start(){
    if(start_count==0){start_count++;
        time=setInterval(timer,100);
        function timer(){
            mini++;
            if(mini<10) document.getElementById("miniseconds").innerText="0"+mini;
            if(mini==10){
                mini=0; sec++;
                document.getElementById("miniseconds").innerText="0"+mini;
                document.getElementById("seconds").innerText=sec.toString().length < 2 ? "0"+sec : sec;
            }
            if(sec==60){
                sec=0; min++;
                document.getElementById("seconds").innerText=sec.toString().length < 2 ? "0"+sec : sec;
                document.getElementById("minutes").innerText=min.toString().length < 2 ? "0"+min : min;        
            }
            if(min==60){
                min=0; hrs++;
                document.getElementById("minutes").innerText=min.toString().length < 2 ? "0"+min : min;
                document.getElementById("hours").innerText=hrs.toString().length < 2 ? "0"+hrs : hrs;
            }
        }
    }
}
function stop(){start_count=0;
    clearInterval(time);
}
function reset(){sec=0, min=0, mini=0, hrs=0;
    document.getElementById("miniseconds").innerText="00";
    document.getElementById("seconds").innerText="00";
    document.getElementById("minutes").innerText="00";
    document.getElementById("hours").innerText="00";
}
function lapping(){
    lap_num++;
    let laps=document.getElementById("laps");
    let lap=document.createElement("div");
    lap.setAttribute("id",`lap${lap_num}`);
    lap.innerText=`${lap_num}.` + ` ${(hrs<10?"0"+hrs:hrs)}` + " : " + `${(min<10?"0"+min:min)}` + " : " + `${(sec<10?"0"+sec:sec)}` + " : " + `${(mini<10?"0"+mini:mini)}`;
    /* STYLING */
    lap.style.width="400px";
    lap.style.marginTop="17px";
    lap.style.border="2px solid white";
    lap.style.borderRadius="5px"
    lap.style.textAlign="center";

    laps.appendChild(lap);
}