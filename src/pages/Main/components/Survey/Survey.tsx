import s from "./Survey.module.css"
import { useState } from "react";

const questions = [
    ['На сколько баллов я сдал ЕГЭ?', '276, долго готовился', '199, посещал Решу ЕГЭ иногда', '237, готовился, но не повезло', 1],
    // ['Сколько у меня было девушек?', 'Ни одной, если один поцелуй не считается', 'Ну одна хотя бы должна была быть', 'Две полноценные феминистки', 1],
    ['Какой вуз я закончил?', 'Самый Владивостокский вуз Владивостока - ВГУЭС', '"Лучший" вуз мира - ДВФУ', 'МГУ, конечно, я же дурак-моряк', 2],
    ['Достаточно ли у меня друзей?', 'Да как грязи', 'Нет( Хочу много друзей', 'Друзья? Не знаю такого слова', 2],
    ['В каких странах я побывал?', 'В некоторых странах Европы', 'Только в...нигде', 'В Китае', 2],
    ['Моя главная мечта?', 'Любить и быть любимым', 'Стать богатым и покорить этот мир', 'Мир во всём мире и счастья всем близким', 1],
    ['Зачем я создал этот тест?', 'Мне одиноко, хочу, чтобы на меня обратили внимание', 'Заняться нечем, скучно на каникулах', 'Набираюсь опыта в программировании и создании сайтов', 1],
    ['Мой любимый вид спорта?', 'Футбол, мячик туда-сюда с пациками', 'Настольный теннис, люблю реакцию и скорость', 'Шахматы, люблю больше переигрывать интеллектом', 2],
    ['Как зовут мою вторую личность?', 'Даниил Никитин', 'Это как бы я, но другой, поэтому также, Данил', 'У меня нет сэконд чела в голове', 3],
    ['Мой девиз по жизни?', 'Развиваться и наслаждаться жизнью', 'Быть сильным и независимым', 'Слать всех подальше', 1],
    ['Какой язык программирования я изучил первым?', 'JavaScript', 'Python', 'Pascal', 3],
]

questions.sort(() => Math.random() - 0.5);

export const Survey = () => {

    const totalQuestionsCount = questions.length;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const [currentAnswerIndex, setCurrentAnswerIndex] = useState(-1);

    const [countRightAnswers, setCountRightAnswers] = useState(0);

    const [isFinished, setIsFinished] = useState(false);

    const getAnswers = (currentQuestionIndex: number) => {
        return questions[currentQuestionIndex].slice(1, -1);
    }

    const nextQuestion = () => {

        //Проверить правильный ли ответ
        if (currentAnswerIndex == questions[currentQuestionIndex].at(-1)) {
            setCountRightAnswers(i => i + 1);
        }

        if (currentQuestionIndex + 1 === totalQuestionsCount) {
            setIsFinished(true);
        } else {
            if (currentAnswerIndex != -1) {



                //Следующий вопрос
                setCurrentQuestionIndex(i => i += 1);
                setCurrentAnswerIndex(-1);
            }

        }
    }

    const handleAnswerChange = (value: number) => {
        setCurrentAnswerIndex(value);
    }

    const restartSurvey = () => {
        questions.sort(() => Math.random() - 0.5);

        setCountRightAnswers(0);
        setIsFinished(false);
        setCurrentQuestionIndex(0);
        setCurrentAnswerIndex(-1);
    }

    return (
        <section className={s.test + ' container'} id="test">
            <h3 className={s.test__name}>Тест по знанию Данила</h3>
            {!isFinished ?
                <>
                    <p className={s.test__question}>{questions[currentQuestionIndex][0]}</p>
                    <form className={s.test__answers}>
                        {getAnswers(currentQuestionIndex).map((ans, i) => {
                            return (
                                <label key={i} className={s.test__answer}>
                                    <input type="radio"
                                        name="answer"
                                        value={i + 1}
                                        checked={currentAnswerIndex == i + 1}
                                        onChange={(e) => handleAnswerChange(Number(e.target.value))}
                                    />
                                    {ans}
                                </label>
                            )
                        })}
                    </form>
                </>

                :
                <p className="result">Ваш результат: {countRightAnswers} сердечек от Данила из {totalQuestionsCount}</p>
            }
            {!isFinished ?
                <button className={s.test__btn} onClick={nextQuestion}>Следующий</button>
                :
                <button className={s.test__btn} onClick={restartSurvey}>Заново</button>
            }

        </section>
    )
}