let body = document.querySelector("body");
let main_player = document.querySelector(".main_player");

let main= document.querySelector(".main");
let school = document.querySelector(".school");
let vaenkom = document.querySelector(".vaenkom");
let hole = document.querySelector(".hole");
let location2 = document.querySelector(".location2");
let enemys = document.querySelector(".enemys");
let loc2_player = document.querySelector(".loc2_player");
let loc2_playermove = 0;
let loc2_playermovetop = 520;
let loc2_playermovetopdown = 520

let location3 = document.querySelector(".location3");
let loc3_talk = document.querySelector(".loc3_talk")
let loc3_variants_block = document.querySelector(".loc3_variants_block");
let loc3_teacher = document.querySelector(".loc3_teacher");
let loc3_timeText = document.querySelector(".loc3_timeText");
let time = 30
let loc3_variants = document.querySelectorAll(".loc3_variants");
let loc3_pravilno = document.querySelector(".loc3_pravilno");

let location4 = document.querySelector(".location4");
let povestka = document.querySelector(".povestka");
let da = document.querySelector(".da");
let net = document.querySelector(".net");

let location5 = document.querySelector(".location5");
let enemy_img = document.querySelector('.enemy_img');
let enemy_hp = document.querySelector('.enemy_hp');
let enemy_damage = document.querySelector('.enemy_damage');
let player_name = document.querySelector('.player_name');
let player_img = document.querySelector('.player_img');
let player_hp = document.querySelector('.player_hp');
let player_damage = document.querySelector('.player_damage');
let enemy_name = document.querySelector('.enemy_name');
let getRandom = function () {
	let randoma = Math.round(Math.random()*8+2);
	let randomh = Math.round(Math.random()*5+5);
	return randoma
	return randomh
}
let getRandom2 = function () {
	randomi = Math.round(Math.random()*8);
	return randomi
}
let images = ["url(full-images/1.png)", "url(full-images/2.png)", "url(full-images/3.png)", "url(full-images/4.png)", "url(full-images/5.png)", "url(full-images/6.png)", "url(full-images/7.png)", "url(full-images/8.png)", "url(full-images/9.png)"]
let player = {
	hp: getRandom(),
	dmg: getRandom(),
	img: images[getRandom2()],
	name: "player",
}
let enemy = {
	hp: getRandom(),
	dmg: getRandom(),
	img: images[getRandom2()],
	name: "player",
}

hole.onclick = function () {
	main_player.style.top = "700px";
	main_player.style.left = "480px";

	function changeLocation2 () {
		main.style.display = "none";
		location2.style.display = "block";
		body.style.backgroundImage = "url(Loc2/loc2.jpg)";
		body.style.backgroundSize = "cover";
		
		document.addEventListener('keydown', function(arg) {
			if(arg.code == 'KeyD') {
			loc2_playermove = loc2_playermove + 50;
        	loc2_player.style.left = loc2_playermove + "px";
       		}
       		if(arg.code == 'KeyW') {
			loc2_playermovetop = loc2_playermovetop - 25;
        	loc2_player.style.top = loc2_playermovetop + "px";
       		}
       		if(arg.code == 'KeyS') {
			loc2_playermovetopdown = loc2_playermovetopdown + 25;
        	loc2_player.style.top = loc2_playermovetopdown + "px";
       		}

       		if (loc2_playermove == 1800 && loc2_playermovetop == 245) {
				alert("сумел выйти");
				location2.style.display = "none";
				main.style.display = "block";
				body.style.backgroundImage = "url(main.png)";
				body.style.backgroundSize = "100% 100%";
				main_player.style.top = "550px";
				main_player.style.left = "25%";
			}
			if (loc2_playermove == 1800 && loc2_playermovetopdown == 845) {
				alert("ты попался на обманку");
				loc2_player.style.top = "520px";
				loc2_player.style.left = "0px";
				loc2_playermove = 0;
				loc2_playermovetop = 520;
				loc2_playermovetopdown = 520;
			}
		})
	}
	setTimeout(changeLocation2, 1000);
}

school.onclick = function () {
	main_player.style.top = "200px";
	main_player.style.left = "1600px";

	let loc3_variants_block = document.querySelector(".loc3_variants_block");

	function changeLocation3() {
		main.style.display = "none";
		location3.style.display = "block";
		body.style.background = "green";
		function babl() {
			loc3_talk.style.display = "block";
		}
		setTimeout(babl, 1000);
		function answers() {
			loc3_variants_block.style.display = "block";
			loc3_teacher.style.backgroundImage = "url(Loc3/female_back.png)";
			loc3_talk.style.display = "none";
		}
		function timer() {
			time = time - 1;
			loc3_timeText.innerHTML = time;
			if (time <= 0) {
				alert("vremya vishlo, ti ne sdal");
				main.style.display = "block";
				location3.style.display = "none";
				body.style.backgroundImage = "url(main.png)";
				body.style.backgroundSize = "cover";
				clearInterval(myInt);
				time = 30;
				loc3_timeText.innerHTML = time;
			}
		}
		let myInt = setInterval(timer, 1000)
		setTimeout(answers, 2000);
		for (i = 0; i < 5; i = i + 1) {
			loc3_variants[i].onclick=function () {
				alert("ti ne sdal ekzamen");
				main.style.display = "block";
				location3.style.display = "none";
				body.style.backgroundImage = "url(main.png)";
				body.style.backgroundSize = "cover";
				clearInterval(myInt);
				time = 30;
				loc3_timeText.innerHTML = time;
			}
		}
		loc3_pravilno.onclick=function () {
			alert("pravilno, ti sdal ekzamen");
			main.style.display = "block";
			location3.style.display = "none";
			body.style.backgroundImage = "url(main.png)";
			body.style.backgroundSize = "cover";
			clearInterval(myInt);
		}
	}
	setTimeout(changeLocation3, 1000);
}

vaenkom.onclick = function () {
	main_player.style.top = "150px";
	main_player.style.left = "700px";
	
	function changeLocation4() {
		main.style.display = "none";
		location4.style.display = "block";
		body.style.backgroundImage = "url(Loc4/bg.jpg)";
		function btn() {
			da.onclick = function () {
				alert("Ты проиграл");
			}
			net.onclick = function () {
				function timermove() {
					movementTime = movementTime - 1;
					loc5_timeText.innerHTML = movementTime;
					if (movementTime == 0) {
						alert("смог сбежать");
						location5.style.display = "none";
						main.style.display = "block";
						body.style.backgroundImage = "url(main.png)";
						body.style.backgroundSize = "100% 100%";
						main_player.style.top = "150px";
						main_player.style.left = "700px";
					}
				}
				setInterval(timermove, 1000)
				function changeLocation5() {
					location4.style.display = "none";
					location5.style.display = "block"
					body.style.backgroundImage = "url(images/bg.jpg)";
					player_img.style.backgroundImage = player.img;
					player_hp.innerHTML = player.hp;
					player_damage.innerHTML = player.dmg;
					player_name.innerHTML = player.name;
					enemy_img.style.backgroundImage = enemy.img;
					enemy_hp.innerHTML = enemy.hp;
					enemy_damage.innerHTML = enemy.dmg;
					enemy_name.innerHTML = enemy.name;
			
					let attackp = function () {
						player.hp = player.hp - enemy.dmg;
						player_hp.innerHTML = player.hp;
						if(player.hp < enemy.hp) {
							player_img.style.opacity = 0;
							player_name.innerHTML = " ";
							player_img.style.backgroundImage = "none";
							enemy_name.innerHTML = " ";
							main.style.display = "none";
							location4.style.display = "block";
							enemy_img.style.opacity = 0;
							body.style.backgroundImage = "url(Loc4/bg.jpg)";
						}
					}
			
					let attacke = function () {
						enemy.hp = enemy.hp - player.dmg;
						enemy_hp.innerHTML = enemy.hp;
						if(enemy.hp < player.hp) {
							enemy_img.style.opacity = 0;
							enemy_name.innerHTML = " ";
							enemy_img.style.backgroundImage = "none";
							player_img.style.opacity = 0;
							player_name.innerHTML = " ";
							location5.style.display = "none";
							location4.style.display = "none";
							main.style.display = "block";
							body.style.backgroundImage = "url(main.png)";
							body.style.backgroundSize = "100% 100%";
							main_player.style.top = "150px";
							main_player.style.left = "700px";
						}
					}
					setInterval(attackp, 2000);
					setInterval(attacke, 2000);
					setTimeout(attackp, 4000);
					setTimeout(attacke, 4000);
				}
				setTimeout(changeLocation5, 1000);
			}
		}
		setTimeout(btn, 1000);
	}
	setTimeout(changeLocation4, 1000);
}
