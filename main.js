/*
    실습: Todo 리스트 만들기
    1.사용자가 할 일을 입력한다.
    2.등록버튼 누른다.
    -사용자가 입력한 '할일' 데이터를 가져온다.
    -화면에 보여주기 위한 요소노드, 텍스트노드 생성한다.
      ->요소노드: li,button | 텍스트노드: 사용자가 입력한 '할일','삭제'
      요소노드와 텍스트노드를 연결한다.
      id가 'todolist'인 ul요소에 연결한다.

    3.웹 페이지에 등록한 할 일이 출력된다.
    4.삭제버튼을 누르면, 해당되는 요소만 삭제된다.
    버튼에 클릭이벤트를 구현한다. 
    부모요소.removeChild(삭제할 자식노드)를 활용해서 삭제한다.
    */
const todoList = document.getElementById("todoList")
const addTodoBtn = document.todoForm.addTodoBtn;
addTodoBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const todo = document.todoForm.todo.value;

  const new_li = document.createElement("li");
  const new_txt = document.createTextNode(todo);

  const new_button = document.createElement("button");
  const new_btn_txt = document.createTextNode("삭제");

  new_button.appendChild(new_btn_txt);

  new_li.appendChild(new_txt);
  new_li.appendChild(new_button);

  todoList.appendChild(new_li);

  new_button.addEventListener("click", (event) => {
    event.preventDefault();
    // 부모 노드에서 삭제하기
    todoList.removeChild(new_li);
  })
});