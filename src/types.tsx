export interface IExercise {
    English: Array<String>,
    EnglishTrIndex: number,
    German: Array<String>,
    answer: String,
    options: Array<String>
}

export declare type ExerciseProps = {
    // exercise: Array<IExercise>
    exercise: IExercise[]
}