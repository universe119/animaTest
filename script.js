const btn = document.querySelector("button");
const box = document.querySelector("article");

// btn click event
btn.addEventListener("click", () => {
	// call Anime
	// new Anime(동작대상, {변경할css속성 프로퍼티}, {duration:모션시간})
	// 속성값 설정시 px단위는 숫자로만 입력
	// 퍼센트 단위는 문자열로 감싸서 입력
	// 모션시간인 duration은 숫자만입력(ms단위) 디폴트값 : 500
	// opacity 제어 : 0 ~ 1 사이의 실수값
	// 제어 가능 속성 : width, height, opacity, top,left,bottom,left,color,backgroundColor,scroll
	new Anime(
		box,
		{
			width: 300,
			top: "50%",
			left: "50%",
			opacity: 0,
		},
		{ duration: 1000 }
	);
});
