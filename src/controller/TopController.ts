enum QuestionType {
    SELECT,
    RADIO,
    TEXT
}

class Question {
    constructor(public message: string, public type: QuestionType, public values: Array<Object>) {}
}

export class TopController {
    questions: Array<Question> = [];
    inputs: Array<Object> = [];

    constructor() {
        this.questions.push(new Question("test1", QuestionType.TEXT, []));
        this.questions.push(new Question("test2", QuestionType.TEXT, []));
        this.questions.push(new Question("test3", QuestionType.SELECT, [
            {id: 1, label: "Hello"},
            {id: 2, label: "World"}
        ]));
    }

    onUpdate() {
        this.inputs.forEach((value, index) => {
            console.log(value);
        });
        
    }
}