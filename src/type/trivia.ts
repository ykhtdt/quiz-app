/**
 * Open Trivia Database API에 대한 타입 정의
 *
 * @remarks
 * 주요 내용:
 * - API 요청에 사용되는 쿼리스트링 정의
 * - API 응답에 사용되는 응답 코드 및 데이터 구조 정의
 *
 * @see https://opentdb.com/api_config.php
 */

/**
 * API 요청에 사용되는 쿼리스트링
 *
 * @remarks
 * - amount: 질문 개수(최소5, 최대50)
 * - type: 질문 유형
 * - difficulty: 질문 난이도
 * - category: 질문 카테고리
 */
export type TriviaRequestQuery = {
  amount: TriviaRequestAmount;
  type: TriviaRequestType;
  difficulty: TriviaRequestDifficulty;
  category: TriviaRequestCategory;
};

/**
 * API 요청에 사용되는 가능한 질문 개수
 */
export type TriviaRequestAmount =
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50;

/**
 * API 요청에 사용되는 질문 카테고리
 *
 * @remarks
 * - 0: any - 요청 시 0 또는 쿼리스트링에 사용하지 않을 것
 * - 9: General Knowledge
 * - 10: Entertainment: Books
 * - 11: Entertainment: Film
 * - 12: Entertainment: Music
 * - 13: Entertainment: Musicals &amp; Theatres
 * - 14: Entertainment: Television
 * - 15: Entertainment: Video Games
 * - 16: Entertainment: Board Games
 * - 17: Science &amp; Nature
 * - 18: Science: Computers
 * - 19: Science: Mathematics
 * - 20: Mythology
 * - 21: Sports
 * - 22: Geography
 * - 23: History
 * - 24: Politics
 * - 25: Art
 * - 26: Celebrities
 * - 27: Animals
 * - 28: Vehicles
 * - 29: Entertainment: Comics
 * - 30: Science: Gadgets
 * - 31: Entertainment: Japanese Anime &amp; Manga
 * - 32: Entertainment: Cartoon &amp; Animations
 */
export type TriviaRequestCategory =
  | 0
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32;

/**
 * API 응답에 사용되는 코드
 *
 * @remarks
 * - 0: Success - 결과가 성공적으로 반환
 * - 1: No Results - API에 쿼리에 대한 질문이 충분하지 않음
 * - 2: Invalid Parameter - 잘못된 매개변수가 포함됨
 * - 3: Token Not Found - 세션 토큰이 존재하지 않음
 * - 4: Token Empty - 토큰 재설정이 필요함
 * - 5: Rate Limit - 요청이 너무 많이 발생함, 5초에 한 번 가능
 */
export type TriviaResponseCode = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * API 응답에 사용되는 질문 카테고리
 */
export type TriviaResponseCategory =
  | "General Knowledge"
  | "Entertainment: Books"
  | "Entertainment: Film"
  | "Entertainment: Music"
  | "Entertainment: Musicals &amp; Theatres"
  | "Entertainment: Television"
  | "Entertainment: Video Games"
  | "Entertainment: Board Games"
  | "Science &amp; Nature"
  | "Science: Computers"
  | "Science: Mathematics"
  | "Mythology"
  | "Sports"
  | "Geography"
  | "History"
  | "Politics"
  | "Art"
  | "Celebrities"
  | "Animals"
  | "Vehicles"
  | "Entertainment: Comics"
  | "Science: Gadgets"
  | "Entertainment: Japanese Anime &amp; Manga"
  | "Entertainment: Cartoon &amp; Animations";

/**
 * 질문 난이도
 *
 * @remarks
 * - 0: any - 요청 시 0 또는 쿼리스트링에 사용하지 않을 것
 * - easy: 쉬움
 * - medium: 중간
 * - hard: 어려움
 */
export type TriviaRequestDifficulty = "0" | "easy" | "medium" | "hard";

/**
 * 질문 유형
 *
 * @remarks
 * - 0: any - 요청 시 0 또는 쿼리스트링에 사용하지 않을 것
 * - multiple: Multiple Choice(1~4 Answers)
 * - boolean: True or False
 */
export type TriviaRequestType = "0" | "multiple" | "boolean";

/**
 * API에서 반환하는 응답 값
 */
export type TriviaResponse = {
  response_code: TriviaResponseCode;
  results: TriviaResponseResult[];
};

/**
 * API에서 응답하는 각 질문의 타입
 */
export type TriviaResponseResult = {
  type: TriviaRequestType;
  difficulty: TriviaRequestDifficulty;
  category: TriviaResponseCategory;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
