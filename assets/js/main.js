/*

<b>Brief und Postkarte</b> <br>
    	L: 10 - 23,5 cm
    	B: 7 - 12,5 cm
    	H: bis 1 cm

<b>DHL Paket 2 kg</b> <br>
      bis 60 x 30 x 15 cm

<b>DHL Paket 5 kg</b> <br>
      bis 120 x 60 x 60 cm

<b>DHL Paket 10 kg</b> <br>
      bis 120 x 60 x 60 cm

"<b>Extra große Größe</b>

*/

var text = "";

function showtxt(){


    switch (parseInt(document.getElementById("mylist").value)) {
        case 0:
            text = "<b>Brief und Postkarte</b><br>L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm";
            break;
        case 1:
            text = "<b>DHL Paket 2 kg</b><br>bis 60 x 30 x 15 cm";
            break;
        case 2:
            text = "<b>DHL Paket 5 kg</b><br>bis 120 x 60 x 60 cm";
            break;
        case 3:
            text = "<b>Extra große Größe</b>";
    }
    

    document.getElementById("masse").innerHTML =text;

}



