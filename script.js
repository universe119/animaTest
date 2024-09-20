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
	// 속성명은 camel case 규칙 적용하거나 아니면 ""로 감싸줌 (예: margin-left는 marginLeft 혹은 "margint-left"식으로 사용)
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
