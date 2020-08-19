console.log(`Warsztaty DOM walidacja formularza i zapis do Newsletter`);

let newsLetterForm = document.getElementById('newsletter-form'); //cały formularz
let allAgreeChx = document.getElementById('all-agree') //pobieramy checkboxa - potrzebny do 2 funkcji


const validate = (event) => {  //tworzymy funkcje validate() zgodnie z trescia zadania
    //pobieramy pola formularzy:
    let textName = document.getElementById('name'); 
    let textEmail = document.getElementById('email');
    //pobieramy checkbox 1:
    let agree1 = document.getElementById('agree-1');
    //pobieramy ul w ktorym bedzie nam wyrzucalo info o bledach:
    let errors = document.getElementById('errors');

    errors.innerHTML = ''; //kiedy wywolywana jest funkcja kazdy error jest czyszczony/ wypisuje raz kazde li.

    if(textName.value.trim() === ''){  //sprawdzamy wartosc pola textName/ trim - ucina biale znaki z prawej i lewej
        let liError = document.createElement('li'); //tworzymi li 
        liError.innerText = 'Wpisz imię i nazwisko!' //tekst jaki ma byc wypisany w li
        errors.appendChild(liError);// dodajemy li do ul
    }

    if(textEmail.value.trim() === ''){  //sprawdza białe znaki w polu email
        let liError = document.createElement('li'); 
        liError.innerText = 'Wpisz adres e-mail!'
        errors.appendChild(liError);
    }

    
    if(!textEmail.value.includes ('@')){  //sprawdza czy adres zawiera @/znak negacji '!' bo wyrzuci blad jak bedzie @
        let liError = document.createElement('li'); 
        liError.innerText = 'Email musi zawierac @'
        errors.appendChild(liError);
    }

    if(!agree1.checked){  //sprawdza czy agree1 jest zaznaczone/znak negacji '!' bo wyrzuci blad jak bedzie zaznaczony
        let liError = document.createElement('li'); 
        liError.innerText = 'Nie wyraziłeś zgody nr 1'
        errors.appendChild(liError);
    }



    if(errors.children.length > 0){
        event.preventDefault();  //blokujemy formularz, zeby sie nie przeładowywał przed wysłaniem
    }

}





//Funkcja dla checkboxa WYRAZAM WSZYSTKIE ZGODY:
const allAgree = (event) => {
    agree1 = document.getElementById('agree-1'); //pobieramy checkbox 1
    agree2 = document.getElementById('agree-2'); //pobieramy checkbox 2

    agree1.checked = event.target.checked; //po kliknieciu chxbox wszystkie zgody zaznacza i pierwszy chexbox
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked; //pola są zaznaczone ale nie ma mozliwosci ich odznaczenia
    agree2.disabled = event.target.checked; //pola są zaznaczone ale nie ma mozliwosci ich odznaczenia   
}




newsLetterForm.addEventListener('submit', validate); //nasłuchiwanie na zdarzenie submit przez formularz
allAgreeChx.addEventListener('change', allAgree); //funkcja się uruchomi kiedy stan checkboxa sie zmieni


