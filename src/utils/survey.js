function shuffle(array) {
	let currentIndex = array.length,  randomIndex;
  
	// While there remain elements to shuffle.
	while (currentIndex > 0) {
  
	  // Pick a remaining element.
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;
  
	  // And swap it with the current element.
	  [array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]];
	}
  
	return array;
}

questions = [ 
	['На сколько баллов я сдал ЕГЭ?', '276, долго готовился', '199, посещал Решу ЕГЭ иногда', '237, готовился, но не повезло', 1],
	['Сколько у меня было девушек?', 'Ни одной, если один поцелуй не считается', 'Ну одна хотя бы должна была быть', 'Две полноценные феминистки', 1],
	['В каком вузе я учусь?', 'В самом Владивостокском вузе Владивостока - ВГУЭС', 'В "лучшем" вузе мира - ДВФУ', 'В МГУ, конечно, я же дурак-моряк', 2],
	['Достаточно ли у меня друзей?', 'Да как грязи', 'Нет( Хочу много друзей', 'Друзья? Не знаю такого слова', 2],
	['В каких странах я побывал?', 'В некоторых странах Европы', 'Только в...нигде', 'В Китае', 2],
	['Моя главная мечта?', 'Любить и быть любимым', 'Стать богатым и покорить этот мир', 'Мир во всём мире и счастья всем близким', 1],
	['Зачем я создал этот тест?', 'Мне одиноко, хочу, чтобы на меня обратили внимание', 'Заняться нечем, скучно на каникулах', 'Набираюсь опыта в программировании и создании сайтов', 1],
	['Мой любимый вид спорта?', 'Футбол, я же маскулинный славянин и поддерживаю патриархат', 'Настольный теннис, люблю гонять шары', 'Шахматы, люблю больше переигрывать интеллектом', 2],
	['Как зовут мою вторую личность?', 'Даниил Никитин', 'Это как бы я, но другой, поэтому также, Данил', 'У меня нет сэконд чела в голове', 3],
	['Мой девиз по жизни?', 'Развиваться и наслаждаться жизнью', 'Быть сильной и независимой', 'Слать всех подальше, а еще я гений', 1],
]

shuffle(questions)

const answers = document.querySelectorAll(".ans")

const surveyButton = document.querySelector(".survey-next-btn")

const question = document.querySelector(".survey-question")

const textRepeat = document.querySelector("#survey-text-repeat")

const form = document.querySelector("#survey-form")

let countQuestions = 0
let countAnswers = 1

let countRightAnswers = 0

surveyButton.onclick = () =>{

	if (form.hidden){
		form.hidden = false
		surveyButton.textContent = 'Следующий'

		//Новый вопрос
		question.innerHTML = questions[countQuestions][0]

		answers.forEach(element => {

			element.textContent = questions[countQuestions][countAnswers]
			countAnswers++

		});
		countAnswers = 1
		countQuestions++

	}else{


		//Проверка ответов
		answers.forEach(element => {

			if (element.previousElementSibling.checked){

				if (countAnswers == questions[countQuestions-1][4]){
					countRightAnswers++
				}
				
				element.previousElementSibling.checked = false
			}
			countAnswers++
		});
		countAnswers = 1


		//Проверка окончания теста
		if (countQuestions+1 == questions.length){
			surveyButton.textContent = 'Завершить тест'
		}

		if (countQuestions+1 > questions.length){
			surveyButton.hidden = true
			textRepeat.hidden = false
			form.innerHTML = 'Ваш результат: ' + countRightAnswers + ' сердечек от Данила из ' + questions.length
		}else{

			//Новый вопрос
			question.innerHTML = questions[countQuestions][0]

			answers.forEach(element => {

				element.textContent = questions[countQuestions][countAnswers]
				countAnswers++

			});
			countAnswers = 1

			countQuestions++
		}

	}
}