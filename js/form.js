window.onload = function() {
    document.getElementById('form').onsubmit = 
    // 동작 시킬 function
        function() {
            // div로 묶기
            var container = document.createElement("div");
            container.classList.add("container");

            var user = document.createElement("p"); // p 태그로 아래 글 출력하기
            user.textContent = this.name.value + "님이 사는 지역은 " + this.town.value + "입니다.";
            
            // button 출력
            var btn = document.createElement("button"); 
            btn.textContent = "삭제"; 

            container.appendChild(user); // user를 container에 추가
            container.appendChild(btn); // btn을 container에 추가
            
            // document.getElementsByTagName('body')[0].appendChild(user); // user 출력
            // document.getElementsByTagName('body')[0].appendChild(btn); // btn 출력

            document.getElementsByTagName('body')[0].appendChild(container); // container를 body에 추가

            btn.onclick = function() {
                container.parentNode.removeChild(container); //  container(user, btn) 삭제
            };

            // btn 누르고 출력되면 input 비우기
            this.name.value = "";
            this.town.value = "";
            
            return false; // 동작이 더 이상 흘러가지 않게
        };
}