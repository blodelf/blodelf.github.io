var names=new Array();
names[0]="Sanya";
names[1]="Lisa";
names[2]="Pavlo";
names[3]="Jora";
names[4]="Karla";
names[5]="jerar";
names[6]="Zhenya";
names[7]="Dasha";
names[8]="Lida";
names[9]="Max";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}