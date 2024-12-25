let TeamA=[];
let TeamB=[];
let p1=[0,0,0];
let p2=[0,0,0];
let gd1=[0,0,0];
let gd2=[0,0,0];
let w1=[0,0,0];
let w2=[0,0,0];
let l1=[0,0,0];
let l2=[0,0,0];
let d1=[0,0,0];
let d2=[0,0,0];
let po1=[0,0,0];
let po2=[0,0,0];
let count=0;
function InputNmae(Element){
    const teamname=prompt("Enter the team name:");
    const Elementid=Element.id;
    document.getElementById(Elementid).innerText=teamname;
   if(count<=2){ 
    TeamA[count]=teamname;}
    else{
        TeamB[count-3]=teamname;
    }
    count++;
}

function LeagueDraw(){
        document.getElementById("inputTerminalOne").style.visibility="hidden";
        document.getElementById("inputTerminalTwo").style.visibility="hidden";
        document.getElementById("generateLeague").style.visibility="hidden";
        document.getElementById("table1").style.visibility="visible";
        document.getElementById("table2").style.visibility="visible";
        document.getElementById("Poll1cont").style.visibility="visible";
        document.getElementById("Poll2cont").style.visibility="visible";
        document.getElementById("a12").innerText=TeamA[0];
        document.getElementById("a22").innerText=TeamA[1];
        document.getElementById("a32").innerText=TeamA[2];
        document.getElementById("b12").innerText=TeamB[0];
        document.getElementById("b22").innerText=TeamB[1];
        document.getElementById("b32").innerText=TeamB[2];
        document.getElementById("a13").innerText=p1[0];
        document.getElementById("a23").innerText=p1[1];
        document.getElementById("a33").innerText=p1[2];
        document.getElementById("b13").innerText=p2[0];
        document.getElementById("b23").innerText=p2[1];
        document.getElementById("b33").innerText=p2[2];
        document.getElementById("a14").innerText=gd1[0];
        document.getElementById("a24").innerText=gd1[1];
        document.getElementById("a34").innerText=gd1[2];
        document.getElementById("b14").innerText=gd2[0];
        document.getElementById("b24").innerText=gd2[1];
        document.getElementById("b34").innerText=gd2[2];
        document.getElementById("a15").innerText=w1[0];
        document.getElementById("a25").innerText=w1[1];
        document.getElementById("a35").innerText=w1[2];
        document.getElementById("b15").innerText=w2[0];
        document.getElementById("b25").innerText=w2[1];
        document.getElementById("b35").innerText=w2[2];
        document.getElementById("a16").innerText=l1[0];
        document.getElementById("a26").innerText=l1[1];
        document.getElementById("a36").innerText=l1[2];
        document.getElementById("b16").innerText=l2[0];
        document.getElementById("b26").innerText=l2[1];
        document.getElementById("b36").innerText=l2[2];
        document.getElementById("a17").innerText=d1[0];
        document.getElementById("a27").innerText=d1[1];
        document.getElementById("a37").innerText=d1[2];
        document.getElementById("b17").innerText=d2[0];
        document.getElementById("b27").innerText=d2[1];
        document.getElementById("b37").innerText=d2[2];
        document.getElementById("a18").innerText=po1[0];
        document.getElementById("a28").innerText=po1[1];
        document.getElementById("a38").innerText=po1[2];
        document.getElementById("b18").innerText=po2[0];
        document.getElementById("b28").innerText=po2[1];
        document.getElementById("b38").innerText=po2[2];

        document.getElementById("match1txt").innerText=`${TeamA[0]} vs ${TeamA[1]}`;
        document.getElementById("match2txt").innerText=`${TeamA[1]} vs ${TeamA[2]}`;
        document.getElementById("match3txt").innerText=`${TeamA[0]} vs ${TeamA[2]}`;

        document.getElementById("match1atxt").innerText=`${TeamB[0]} vs ${TeamB[1]}`;
        document.getElementById("match2atxt").innerText=`${TeamB[1]} vs ${TeamB[2]}`;
        document.getElementById("match3atxt").innerText=`${TeamB[0]} vs ${TeamB[2]}`;
    }

   

    document.getElementById("match1det").addEventListener("submit", function(event) {
        event.preventDefault(); 
        const teamAGoals = parseInt(document.getElementById("Agoals").value, 10);
    const teamBGoals = parseInt(document.getElementById("Bgoals").value, 10);
        if(teamAGoals>teamBGoals){
            p1[0]+=1;
            p1[1]+=1;
            w1[0]+=1;
            l1[1]+=1;
            po1[0]+=3;
            gd1[0]+=teamAGoals-teamBGoals;
            gd1[1]+=teamBGoals-teamAGoals;
        }
        else if(teamAGoals<teamBGoals){
            p1[0]+=1;
            p1[1]+=1;
            w1[1]+=1;
            l1[0]+=1;
            po1[1]+=3;
            gd1[0]+=teamAGoals-teamBGoals;
            gd1[1]+=teamBGoals-teamAGoals;
        }
        else{
            p1[0]+=1;
            p1[1]+=1;
            d1[0]+=1;
            d1[1]+=1;
            po1[0]+=1;
            po1[1]+=1;
        }
        updateTbl1();
        document.getElementById("Sub1").style.visibility="hidden";
     });

     document.getElementById("match2det").addEventListener("submit", function(event) {
        event.preventDefault(); 
        const teamAGoals = parseInt(document.getElementById("Agoals1").value, 10);
    const teamBGoals = parseInt(document.getElementById("Bgoals1").value, 10);
        if(teamAGoals>teamBGoals){
            p1[1]+=1;
            p1[2]+=1;
            w1[1]+=1;
            l1[2]+=1;
            po1[1]+=3;
            gd1[1]+=teamAGoals-teamBGoals;
            gd1[2]+=teamBGoals-teamAGoals;
        }
        else if(teamAGoals<teamBGoals){
            p1[1]+=1;
            p1[2]+=1;
            w1[2]+=1;
            l1[1]+=1;
            po1[2]+=3;
            gd1[1]+=teamAGoals-teamBGoals;
            gd1[2]+=teamBGoals-teamAGoals;
        }
        else{
            p1[1]+=1;
            p1[2]+=1;
            d1[1]+=1;
            d1[2]+=1;
            po1[1]+=1;
            po1[2]+=1;
        }
        updateTbl1();
        document.getElementById("Sub2").style.visibility="hidden";
     });

     document.getElementById("match3det").addEventListener("submit", function(event) {
        event.preventDefault(); 
        const teamAGoals = parseInt(document.getElementById("Agoals2").value, 10);
    const teamBGoals = parseInt(document.getElementById("Bgoals2").value, 10);
        if(teamAGoals>teamBGoals){
            p1[0]+=1;
            p1[2]+=1;
            w1[0]+=1;
            l1[2]+=1;
            po1[0]+=3;
            gd1[0]+=teamAGoals-teamBGoals;
            gd1[2]+=teamBGoals-teamAGoals;
        }
        else if(teamAGoals<teamBGoals){
            p1[0]+=1;
            p1[2]+=1;
            w1[2]+=1;
            l1[0]+=1;
            po1[2]+=3;
            gd1[0]+=teamAGoals-teamBGoals;
            gd1[2]+=teamBGoals-teamAGoals;
        }
        else{
            p1[0]+=1;
            p1[2]+=1;
            d1[0]+=1;
            d1[2]+=1;
            po1[0]+=1;
            po1[2]+=1;
        }
        updateTbl1();
        sortTbl1();
        updateTbl1();
        document.getElementById("Sub3").style.visibility="hidden";
     });


function updateTbl1(){
    document.getElementById("a13").innerText=p1[0];
    document.getElementById("a12").innerText=TeamA[0];
    document.getElementById("a22").innerText=TeamA[1];
    document.getElementById("a32").innerText=TeamA[2];
    document.getElementById("b12").innerText=TeamB[0];
    document.getElementById("b22").innerText=TeamB[1];
    document.getElementById("b32").innerText=TeamB[2];
        document.getElementById("a23").innerText=p1[1];
        document.getElementById("a33").innerText=p1[2];
        document.getElementById("b13").innerText=p2[0];
        document.getElementById("b23").innerText=p2[1];
        document.getElementById("b33").innerText=p2[2];
        document.getElementById("a14").innerText=gd1[0];
        document.getElementById("a24").innerText=gd1[1];
        document.getElementById("a34").innerText=gd1[2];
        document.getElementById("b14").innerText=gd2[0];
        document.getElementById("b24").innerText=gd2[1];
        document.getElementById("b34").innerText=gd2[2];
        document.getElementById("a15").innerText=w1[0];
        document.getElementById("a25").innerText=w1[1];
        document.getElementById("a35").innerText=w1[2];
        document.getElementById("b15").innerText=w2[0];
        document.getElementById("b25").innerText=w2[1];
        document.getElementById("b35").innerText=w2[2];
        document.getElementById("a16").innerText=l1[0];
        document.getElementById("a26").innerText=l1[1];
        document.getElementById("a36").innerText=l1[2];
        document.getElementById("b16").innerText=l2[0];
        document.getElementById("b26").innerText=l2[1];
        document.getElementById("b36").innerText=l2[2];
        document.getElementById("a17").innerText=d1[0];
        document.getElementById("a27").innerText=d1[1];
        document.getElementById("a37").innerText=d1[2];
        document.getElementById("b17").innerText=d2[0];
        document.getElementById("b27").innerText=d2[1];
        document.getElementById("b37").innerText=d2[2];
        document.getElementById("a18").innerText=po1[0];
        document.getElementById("a28").innerText=po1[1];
        document.getElementById("a38").innerText=po1[2];
        document.getElementById("b18").innerText=po2[0];
        document.getElementById("b28").innerText=po2[1];
        document.getElementById("b38").innerText=po2[2];
}

function sortTbl1(){
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            if(po1[j]<po1[i]){
                temp=po1[j];
                po1[j]=po1[i];
                po1[i]=temp;

                temp=p1[j];
                p1[j]=p1[i];
                p1[i]=temp;

                temp=w1[j];
                w1[j]=w1[i];
                w1[i]=temp;

                temp=l1[j];
                l1[j]=l1[i];
                l1[i]=temp;

                temp=gd1[j];
                gd1[j]=gd1[i];
                gd1[i]=temp;

                temp=d1[j];
                d1[j]=d1[i];
                d1[i]=temp;

                temp=TeamA[j];
                TeamA[j]=TeamA[i];
                TeamA[i]=temp;
            }
            if(po1[j]===po1[i])
            {
                if(gd1[j]<gd1[i]){
                    temp=po1[j];
                    po1[j]=po1[i];
                    po1[i]=temp;
    
                    temp=p1[j];
                    p1[j]=p1[i];
                    p1[i]=temp;
    
                    temp=w1[j];
                    w1[j]=w1[i];
                    w1[i]=temp;
    
                    temp=l1[j];
                    l1[j]=l1[i];
                    l1[i]=temp;
    
                    temp=gd1[j];
                    gd1[j]=gd1[i];
                    gd1[i]=temp;
    
                    temp=d1[j];
                    d1[j]=d1[i];
                    d1[i]=temp;
    
                    temp=TeamA[j];
                    TeamA[j]=TeamA[i];
                    TeamA[i]=temp;
                }

            }
        }
    }
}


document.getElementById("match1adet").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const teamAGoals = parseInt(document.getElementById("Aagoals").value, 10);
const teamBGoals = parseInt(document.getElementById("Bagoals").value, 10);
    if(teamAGoals>teamBGoals){
        p2[0]+=1;
        p2[1]+=1;
        w2[0]+=1;
        l2[1]+=1;
        po2[0]+=3;
        gd2[0]+=teamAGoals-teamBGoals;
        gd2[1]+=teamBGoals-teamAGoals;
    }
    else if(teamAGoals<teamBGoals){
        p2[0]+=1;
        p2[1]+=1;
        w2[1]+=1;
        l2[0]+=1;
        po2[1]+=3;
        gd2[0]+=teamAGoals-teamBGoals;
        gd2[1]+=teamBGoals-teamAGoals;
    }
    else{
        p2[0]+=1;
        p2[1]+=1;
        d2[0]+=1;
        d2[1]+=1;
        po2[0]+=1;
        po2[1]+=1;
    }
    updateTbl2();
    document.getElementById("Sub1a").style.visibility="hidden";
 });

 document.getElementById("match2adet").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const teamAGoals = parseInt(document.getElementById("Aa1goals").value, 10);
const teamBGoals = parseInt(document.getElementById("Ba1goals").value, 10);
    if(teamAGoals>teamBGoals){
        p2[1]+=1;
        p2[2]+=1;
        w2[1]+=1;
        l2[2]+=1;
        po2[1]+=3;
        gd2[1]+=teamAGoals-teamBGoals;
        gd2[2]+=teamBGoals-teamAGoals;
    }
    else if(teamAGoals<teamBGoals){
        p2[1]+=1;
        p2[2]+=1;
        w2[2]+=1;
        l2[1]+=1;
        po2[2]+=3;
        gd2[1]+=teamAGoals-teamBGoals;
        gd2[2]+=teamBGoals-teamAGoals;
    }
    else{
        p2[1]+=1;
        p2[2]+=1;
        d2[1]+=1;
        d2[2]+=1;
        po2[1]+=1;
        po2[2]+=1;
    }
    updateTbl2();
    document.getElementById("Sub2a").style.visibility="hidden";
 });

 document.getElementById("match3adet").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const teamAGoals = parseInt(document.getElementById("Aa2goals").value, 10);
const teamBGoals = parseInt(document.getElementById("Ba2goals").value, 10);
    if(teamAGoals>teamBGoals){
        p2[0]+=1;
        p2[2]+=1;
        w2[0]+=1;
        l2[2]+=1;
        po2[0]+=3;
        gd2[0]+=teamAGoals-teamBGoals;
        gd2[2]+=teamBGoals-teamAGoals;
    }
    else if(teamAGoals<teamBGoals){
        p2[0]+=1;
        p2[2]+=1;
        w2[2]+=1;
        l2[0]+=1;
        po2[2]+=3;
        gd2[0]+=teamAGoals-teamBGoals;
        gd2[2]+=teamBGoals-teamAGoals;
    }
    else{
        p2[0]+=1;
        p2[2]+=1;
        d2[0]+=1;
        d2[2]+=1;
        po2[0]+=1;
        po2[2]+=1;
    }
    updateTbl2();
    sortTbl2();
    updateTbl2();
    document.getElementById("Sub3a").style.visibility="hidden";
    document.getElementById("SemiBtn").style.visibility="visible";
 });


function updateTbl2(){
document.getElementById("b12").innerText=TeamB[0];
document.getElementById("b22").innerText=TeamB[1];
document.getElementById("b32").innerText=TeamB[2];
    document.getElementById("b13").innerText=p2[0];
    document.getElementById("b23").innerText=p2[1];
    document.getElementById("b33").innerText=p2[2];
    document.getElementById("b14").innerText=gd2[0];
    document.getElementById("b24").innerText=gd2[1];
    document.getElementById("b34").innerText=gd2[2];
    document.getElementById("b15").innerText=w2[0];
    document.getElementById("b25").innerText=w2[1];
    document.getElementById("b35").innerText=w2[2];
    document.getElementById("b16").innerText=l2[0];
    document.getElementById("b26").innerText=l2[1];
    document.getElementById("b36").innerText=l2[2];
    document.getElementById("b17").innerText=d2[0];
    document.getElementById("b27").innerText=d2[1];
    document.getElementById("b37").innerText=d2[2];
    document.getElementById("b18").innerText=po2[0];
    document.getElementById("b28").innerText=po2[1];
    document.getElementById("b38").innerText=po2[2];
}

function sortTbl2(){
for(i=0;i<3;i++){
    for(j=0;j<3;j++){
        if(po2[j]<po2[i]){
            temp=po2[j];
            po2[j]=po2[i];
            po2[i]=temp;

            temp=p2[j];
            p2[j]=p2[i];
            p2[i]=temp;

            temp=w2[j];
            w2[j]=w2[i];
            w2[i]=temp;

            temp=l2[j];
            l2[j]=l2[i];
            l2[i]=temp;

            temp=gd2[j];
            gd2[j]=gd2[i];
            gd2[i]=temp;

            temp=d2[j];
            d2[j]=d2[i];
            d2[i]=temp;

            temp=TeamB[j];
            TeamB[j]=TeamB[i];
            TeamB[i]=temp;
        }
        if(po2[j]===po2[i])
        {
            if(gd1[j]>gd1[i]){
                temp=po2[j];
                po2[j]=po2[i];
                po2[i]=temp;

                temp=p2[j];
                p2[j]=p2[i];
                p2[i]=temp;

                temp=w2[j];
                w2[j]=w2[i];
                w2[i]=temp;

                temp=l2[j];
                l2[j]=l2[i];
                l2[i]=temp;

                temp=gd2[j];
                gd2[j]=gd2[i];
                gd2[i]=temp;

                temp=d2[j];
                d2[j]=d2[i];
                d2[i]=temp;

                temp=TeamB[j];
                TeamB[j]=TeamB[i];
                TeamB[i]=temp;
            }

        }
    }
}
}

function ShowSemi(){
    document.getElementById("table1").style.visibility="hidden";
    document.getElementById("table2").style.visibility="hidden";
    document.getElementById("Poll1cont").style.visibility="hidden";
    document.getElementById("Poll2cont").style.visibility="hidden";
    document.getElementById("SemiBtn").style.visibility="hidden";
    document.getElementById("inputTerminalOne").style.visibility="visible";
    document.getElementById("PollOneTitle").style.visibility="hidden";
    document.getElementById("inputTerminalTwo").style.visibility="visible";
    document.getElementById("PollTwoTitle").style.visibility="hidden";
    document.getElementById("InputTeamOne").innerText=TeamA[0];
    document.getElementById("InputTeamThree").innerText=TeamB[1];
    document.getElementById("InputTeamTwo").innerText="vs";
    document.getElementById("InputTeamOneA").innerText=TeamB[0];
    document.getElementById("InputTeamThreeA").innerText=TeamA[1];
    document.getElementById("InputTeamTwoA").innerText="vs";
    document.getElementById("InputTeamOne").onclick="null";
    document.getElementById("InputTeamTwo").onclick="null";
    document.getElementById("InputTeamThree").onclick="null";
    document.getElementById("InputTeamOneA").onclick="null";
    document.getElementById("InputTeamTwoA").onclick="null";
    document.getElementById("InputTeamThreeA").onclick="null";
    document.getElementById("InputTeamTwo").style.visibility="hidden";
    document.getElementById("InputTeamTwoA").style.visibility="hidden";
    document.getElementById("line1").style.visibility="visible";
    document.getElementById("line2").style.visibility="visible";
    document.getElementById("line3").style.visibility="visible";
    document.getElementById("line4").style.visibility="visible";
    document.getElementById("line5").style.visibility="visible";
    document.getElementById("line6").style.visibility="visible";
    document.getElementById("lineF").style.visibility="visible";
}