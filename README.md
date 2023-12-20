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
4. [ Todo ]  
   input(type = checkbox)는 checked 속성으로 status를 처음으로 관리  
   input(type = checkbox)는 onChange 속성에서 e.target.checked으로 체크 여부 확인 가능
5. [ TodoList ] - 배열 메소드 map과 filter을 통해 update, delete 관리
6. [ App ] filter는 TodoList와 Header 컴포넌트에 각각 연결해서 써야하기 때문에 2개의 부모태그에서 관리해준다
7. [ TodoList ] 선택한 filter를 TodoList에 전달해 todos 관리(Array.filter)
8. [ Header ] filter와 list의 value를 통해 selected 클래스 생성(CSS 밑줄 효과)
9. [ DarkModeContext ]  
   어플리케이션에서 전반적으로 필요한 세팅 => context  
   useContext를 이용한 훅(useDarkMode) 만들기  
   darkMode의 상태에 따라 'dark' class 추가/제거  
   localstorage 혹은 컴퓨터의 모드에 따라 darkMode 상태 변경(useEffect을 이용하여 첫 마운트 될 때 적용)
10. [ TodoList ]  
    localstorage에 저장  
    useState에는 초기값을 전달할 수 있는데 함수가 아닌 콜백함수로 전달

## 정리 - CSS

1. 앱전체(index)  
   `body { width: 100vw; height: 100vh; margin: 0; }`  
   `#root { width: 100%; height: 60%; }`  
   `ul { padding-left: 0; list-style:none; }`
2. 헤더  
   [ index ]  
   `#root { overflow:hidden; }` 자식이 부모 영역에 침범했을 경우 숨겨준다  
   `button { outline: none; border: 0; }` outline이 정확히 뭔지는 모르겠음
3. 입력폼  
   [ TodoList ]  
   `.list { flex: 1 1 auto; overflow-y: auto }` 리스트의 높이를 꽉차게 만들고 Add부분을 밑으로,  
   리스트가 길어지면 스크롤  
   [ AddTodo ]  
   `input { flex: 1 0 auto; }` input부분을 꽉차게  
   [ index ]  
   `* { box-sizing: border-box }` 패딩이 합해진 사이즈가 계산이 되도록
4. Todo  
    [ Todo ]  
    `.text { flex: 1 1 0% }` checkbox옆까지 text가 오게  
    [ index ]  
    `body { accent-color: ~~ }` 어떤 input을 사용해도 accent-color는 ~~ 이거다(checkbox의 color)  
    [ TodoList ]  
   `.container { min-height: 0; }` todo item들이 많아지면 header와 add부분이 밀려남을 해소
5. DarkMode  
   [ index ]  
   `html.dark { }` :root에서 지정한 몇몇의 색깔을 다크모드일때 변경해주면 손쉽게 적용
