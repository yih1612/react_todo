## 프로젝트 소개

- 할 일을 관리하는 todo-list

## 기술스택

- React
- PostCSS

## 기능

1. 할 일 추가, 삭제, 완료한 일 체크
2. 필터를 통해 모든 아이템, 해야할 일, 완료한 일 구분
3. 다크모드

## 신경 쓴 부분

- 감성 한 스푼을 담기 위해 노력

1. 글꼴, 폰트 굵기, 체크박스 바꾸기
2. 메모장에 쓰든 듯한 배경
3. 현재 필터 형광펜으로 표시된 듯한 효과
4. 부드러운 애니메이션(다크모드, 아이콘)

## 사이트

https://funny-pasca-9ac0c1.netlify.app/

<br/>
<br/>

## 순서

리스트 구현 - 추가하기 구현 - 삭제하기 - 필터 적용 - 스타일링(앱전체 - 헤더 - 입력폼 - 투두 아이템)

## 정리

1. 역할을 세분화해 컴포넌트를 분리한다  
   (ex. TodoList - 목록만 보이게, AddTodo - 추가 버튼에 대한, Todo - 각각 아이템의 체크·삭제, 등등)
2. 각 컴포넌트가 소통하기위해 props으로 전달
3. input 태그는 value와 onChange 속성으로 state 관리
4. input(type = checkbox)는 checked 속성으로 status를 처음으로 관리
5. input(type = checkbox)는 onChange 속성에서 e.target.checked으로 체크 여부 확인 가능
6. 배열 메소드 map과 filter을 통해 update, delete 관리
7. filter는 TodoList와 Header 컴포넌트에 각각 연결해서 써야하기 때문에 2개의 부모태그에서 관리해준다(App.jsx)
8. 선택한 filter를 TodoList에 전달해 todos 관리(Array.filter)

## 정리 - CSS

1. 앱전체  
   body - `width: 100vw; height: 100vh; margin: 0;`  
   #root - `width: 100%; height: 60%;`  
   ul - `padding-left: 0; list-style:none;`
