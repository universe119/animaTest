/*
	forEach
	: 배열, 유사배열을 반복처리하기 위한 내장 함수
	Array.forEach((data, idx) => {
		중괄호 안쪽의 코드블록은 배열의 갯수만큼 반복 처리됨
		해당 코드블록 안쪽에서는 data, idx라는 파라미터로 전달되는 값 활용 가능
		data: 현재 반복도는 배열의 데이터
		idx: 현재 반복도는 순서값
	})
	const btns = document.querySelectorAll("button");
	
	btns.forEach((btn, idx) => {
		console.log(btn);
		console.log(idx);
	});
*/
const btns = document.querySelectorAll("button");

btns.forEach((btn, idx) => {
	// forEach반복문 안쪽에서 반복도는 각 btn요소에 click이벤트 연결
	btn.addEventListener("click", (event) => {
		// 각 반복도는 btn요소 클릭시 자동으로 전달되는 event.target
		// 클릭이라는 이벹트가 발생한 바로 그 DOM요소를 지칭(event.target)
		console.log(event.target);
		// 이벤트가 발생한 해당 DOM요소에 지정된 data-pos라는 정보값 가져옴
		// console.log(event.target.getAttribute("data-pos"));

		const targetPos = event.target.getAttribute("data-pos");
		console.log(targetPos); // "1000" 숫자처럼 보이는 문자값

		const convertedTargetPos = parseInt(targetPos); // "1000"-> 1000 숫자 형변환
		console.log(convertedTargetPos);

		new Anime(window, { scroll: convertedTargetPos });
	});
});
/*
    실무에서 많이 쓰는 업무 패턴
    스크립트에서 필요로하는 정보값을 HTML요소에 커스텀 속성으로 담아주고 이벤트 발생시 이벤트 객체의 속성 정보값을 추출해서 반복코드 연산에 활용하는 방법

const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		//event 객체 안쪽의 target property에는 이벤트가 발생한 대상(DOM)정보가 담겨 있음
		// console.log(event);
		console.dir(event.target.dataset.pos);
		// console.log(event.target.getAttribute("data-pos"));
		// parseInt(문자화된 숫자값) : 정수로반환
		// parseFloat(문자화된 숫자값) : 실수로 반환 (소숫점 아래까지 포함된 숫자)
		// Anime안에 스크립트가 문자로 받으면 에러나서 parseInt로 형변환함.
		new Anime(window, { scroll: parseInt(event.target.dataset.pos) });
	});
});
*/
/* scroll 끝
const btns = document.querySelectorAll("button");
const posArr = [0, 1000, 2000, 3000, 4000];
// 미션 - 위의 3개의 이벤트 구문을 반복문을 통해 하나로 축약
// 1시 20분까지

// btns 버튼 유사배열을 반복처리 (반복도는 각 버튼, 반복도는 순번)
btns.forEach((btn, idx) => {
	//내부적으로 파라미터로 전달되는 각 버튼 요소에 클릭 이벤트 연결
	btn.addEventListener("click", () => {
		//Anime의 scroll property값으로 posArr라는 위치모음 배열해서 현재반복도는 순번에 해당하는 위치값 연결
		new Anime(window, { scroll: posArr[idx] }, { duration: 500 });
	});
});

// const [btn1, btn2, btn3] = document.querySelectorAll("button");

// btn1.addEventListener("click", () => {
// 	new Anime(window, { scroll: 0 }, { duration: 500 });
// });

// btn2.addEventListener("click", () => {
// 	new Anime(window, { scroll: 2000 }, { duration: 500 });
// });

// btn3.addEventListener("click", () => {
// 	new Anime(window, { scroll: 4000 }, { duration: 500 });
// });
*/
/* scroll 전 작업
const btn = document.querySelector("button");
const box = document.querySelector("article");
const title = document.querySelector("h1");

// btn click event
btn.addEventListener("click", () => {
	// 색상 모션 처리
	// 색상값을 미리 지정된 키워드명이 아닌 16진수 표기법으로 변경해서 적용

	// call Anime
	// new Anime(동작대상, {변경할css속성 프로퍼티}, {duration:모션시간})
	// 속성값 설정시 px단위는 숫자로만 입력
	// 퍼센트 단위는 문자열로 감싸서 입력
	// 모션시간인 duration은 숫자만입력(ms단위) 디폴트값 : 500
	// opacity 제어 : 0 ~ 1 사이의 실수값
	// 제어 가능 속성 : width, height, opacity, top,left,bottom,left,color,backgroundColor,scroll
	// margin, padding도 모션 처리 가능 (단 여백관련 속성은 %값 적용 불가, px단위로만 변경 가능)
	// 속성명은 camel case 규칙 적용하거나 아니면 ""로 감싸줌 (예: margin-left는 marginLeft 혹은 "margin-left"식으로 사용)
	new Anime(
		box,
		{
			left: 500,
		},
		{
			duration: 1000,
			//가속도 설정
			easeType: "ease1",
			// 상위 Anime구문이 끝나는 바로 그 순간 이어서 동기적(이전 작업이 모든 끝난 이후에) 으로 새로운 모션을 이어서 실행
			callback: () =>
				new Anime(
					box,
					{ top: 500, backgroundColor: "#04b568" },
					{
						duration: 1000,
						// 계속해서 callback으로 모션을 시퀀셜 처리가능
						callback: () =>
							new Anime(
								box,
								{ left: 0, backgroundColor: "#02b588" },
								{ duration: 1000 }
							),
					}
				),
		}
	);
});
*/
