//document.getElementById("Post").value = "Fifth Avenue, New York City";

const Heroes = () => {
    var heroeslist = ["Alan", "Blake", "Hollie"];
    var classeslist = ["Tank", "Fighter", "Healer"];


    var hero = {
        Attack: 0,
        Defence: 0,
        Speed: 0,
        Sprite: Image,
        classes: ""
    }
    var fs = require('Heroes.txt');

    const Submit = () => {

        var HeroName = document.querySelector('.HeroName');
        var HeroATK = document.querySelector('.HeroATK');
        var SubmitButton = document.querySelector('.Submit');


        SubmitButton.addEventListener('click', () => {


            fs.appendFile('Heroes.txt', 'Hello');


        });

    };

    Submit();


};
Heroes();