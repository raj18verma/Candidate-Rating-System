$(".js-switch").click(function() {
	$(".main-content").toggleClass("as-card");
});

var reader = new FileReader();
reader.onload = function(e) {
	$("#imager").attr("src", e.target.result);
};

function readURL(input) {
	if (input.files && input.files[0]) {
		$("#imager").css("visibility",'visible');
		reader.readAsDataURL(input.files[0]);
	}
}

$("#image-input").change(function() {
	readURL(this);
});

const fullNameTextarea = document.querySelector('.name .fullname');
const jobTitleInput = document.querySelector('.job .jobInput');
const locationInput = document.querySelector('.country .locationInput');
const linkedinInput = document.querySelector('.Linkedln .linkedinInput');
const githubInput = document.querySelector('.Github .githubInput');
const uiUxCheckbox = document.getElementById('design');

const submitButton=document.querySelector('.js-switch')
const id__wrapper=document.querySelector('.id__wrapper')


let points = 100;

function checkFormValidity() {
    let isValid = true;
    if (fullNameTextarea.value.trim() === '') {
        isValid = false;
        points -= 20;
    }
    if (jobTitleInput.value.trim() === '') {
        isValid = false;
        points -= 20; 
    }
    if (locationInput.value.trim() === '') {
        isValid = false;
        points -= 20;
    }
    if (linkedinInput.value.trim() === '@') {
        isValid = false;
        points -= 20; 
    }
    if (githubInput.value.trim() === '@') {
        isValid = false;
        points -= 20;
    }

    if (isValid) {
        points = 100;
    }
    console.log('Points:', points);
    return isValid;
}

submitButton.addEventListener('click', () => {
			checkFormValidity();
			let red, green;
			if (points === 100) {
				red = 139;
				green = 230;
			} else if(points!=0) {
				red = Math.floor((100 - points) * (255 - 230) / 100 + 230);
				green = Math.floor(points * (230 - 98) / 100 + 98);
			}else{
				id__wrapper.style.backgroundColor = "#EC6262";
			}
			id__wrapper.style.backgroundColor = `rgb(${red},${green},98)`;			
});



