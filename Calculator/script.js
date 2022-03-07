checkb1=document.getElementById('checkb1');
checkb2=document.getElementById('checkb2');
checkb3=document.getElementById('checkb3');
checkb4=document.getElementById('checkb4');
checkb5=document.getElementById('checkb5');
checkb6=document.getElementById('checkb6');
checkb7=document.getElementById('checkb7');
checkb8=document.getElementById('checkb8');
checkb9=document.getElementById('checkb9');
checkb10=document.getElementById('checkb10');
checkb11=document.getElementById('checkb11');
checkb12=document.getElementById('checkb12');
checkb13=document.getElementById('checkb13');
checkb14=document.getElementById('checkb14');
checkb15=document.getElementById('checkb15');
checkb16=document.getElementById('checkb16');
checkb17=document.getElementById('checkb17');
checkb18=document.getElementById('checkb18');
checkb19=document.getElementById('checkb19');
checkb20=document.getElementById('checkb20');
checkb21=document.getElementById('checkb21');
checkb22=document.getElementById('checkb22');
checkb23=document.getElementById('checkb23');
checkb24=document.getElementById('checkb24');
checkb25=document.getElementById('checkb25');
checkb26=document.getElementById('checkb26');
checkb27=document.getElementById('checkb27');
checkb28=document.getElementById('checkb28');
checkb29=document.getElementById('checkb29');
checkb31=document.getElementById('checkb30');

capitano=document.getElementById('capcheck');

checkn1=document.getElementById('checkn1');
checkn2=document.getElementById('checkn2');
checkn3=document.getElementById('checkn3');
checkn4=document.getElementById('checkn4');
checkn5=document.getElementById('checkn5');
checkn6=document.getElementById('checkn6');
checkn7=document.getElementById('checkn7');
checkn8=document.getElementById('checkn8');
checkn10=document.getElementById('checkn10');
checkn11=document.getElementById('checkn11');
checkn12=document.getElementById('checkn12');
checkn13=document.getElementById('checkn13');
checkn14=document.getElementById('checkn14');
checkn15=document.getElementById('checkn15');
checkn16=document.getElementById('checkn16');
checkn17=document.getElementById('checkn17');
checkn18=document.getElementById('checkn18');
checkn19=document.getElementById('checkn19');
checkn20=document.getElementById('checkn20');
checkn21=document.getElementById('checkn21');
checkn22=document.getElementById('checkn22');

function control() {
    var ris=0;
    var neg=0;
    if (checkb1.checked) {
        ris=ris+20;
    }
    if (checkb2.checked) {
        ris=ris+15;
    }
    if (checkb3.checked) {
        ris=ris+50;
    }
    if (checkb4.checked) {
        ris=ris+15;
    }
    if (checkb5.checked) {
        ris=ris+15;
    }
    if (checkb6.checked) {
        ris=ris+10;
    }
    if (checkb7.checked) {
        ris=ris+10;
    }
    if (checkb8.checked) {
        ris=ris+50;
    }
    if (checkb9.checked) {
        ris=ris+15;
    }
    if (checkb10.checked) {
        ris=ris+200;
    }
    if (checkb11.checked) {
        ris=ris+100;
    }
    if (checkb12.checked) {
        ris=ris+250;
    }
    if (checkb13.checked) {
        ris=ris+50;
    }
    if (checkb14.checked) {
        ris=ris+10;
    }
    if (checkb15.checked) {
        ris=ris+15;
    }
    if (checkb16.checked) {
        ris=ris+5;
    }
    if (checkb17.checked) {
        ris=ris+15;
    }
    if (checkb18.checked) {
        ris=ris+20;
    }
    if (checkb19.checked) {
        ris=ris+30;
    }
    if (checkb20.checked) {
        ris=ris+30;
    }
    if (checkb21.checked) {
        ris=ris+200;
    }
    if (checkb22.checked) {
        ris=ris+15;
    }
    if (checkb23.checked) {
        ris=ris+15;
    }
    if (checkb24.checked) {
        ris=ris+10;
    }
    if (checkb25.checked) {
        ris=ris+50;
    }
    if (checkb26.checked) {
        ris=ris+20;
    }
    if (checkb27.checked) {
        ris=ris+20;
    }
    if (checkb28.checked) {
        ris=ris+50;
    }
    if (checkb29.checked) {
        ris=ris+25;
    }
    if (checkb30.checked) {
        ris=ris+10;
    }
    if (checkn1.checked) {
        neg=neg-20;
    }
    if (checkn2.checked) {
        neg=neg-15;
    }
    if (checkn3.checked) {
        neg=neg-10;
    }
    if (checkn4.checked) {
        neg=neg-25;
    }
    if (checkn5.checked) {
        neg=neg-15;
    }
    if (checkn6.checked) {
        neg=neg-15;
    }
    if (checkn7.checked) {
        neg=neg-20;
    }
    if (checkn8.checked) {
        neg=neg-10;
    }
    if (checkn10.checked) {
        neg=neg-10;
    }
    if (checkn11.checked) {
        neg=neg-5;
    }
    if (checkn12.checked) {
        neg=neg-10;
    }
    if (checkn13.checked) {
        neg=neg-15;
    }
    if (checkn14.checked) {
        neg=neg-5;
    }
    if (checkn15.checked) {
        neg=neg-5;
    }
    if (checkb16.checked) {
        neg=neg-10;
    }
    if (checkb17.checked) {
        neg=neg-20;
    }
    if (checkb18.checked) {
        neg=neg-20;
    }
    if (checkb19.checked) {
        neg=neg-10;
    }
    if (checkb20.checked) {
        neg=neg-10;
    }
    if (checkb21.checked) {
        neg=neg-5;
    }
    if (checkb22.checked) {
        neg=neg-10;
    }
    if (capitano.checked) {
        ris=ris*2;
        neg=neg/2;
    }
    ris=ris+neg;
    punt.textContent=ris;
}