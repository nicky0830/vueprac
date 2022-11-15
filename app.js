const app = Vue.createApp({
    data() { 
        return {
            courseGoalA: '<h3 style="color:blue">goal A</h3>',
            courseGoalB: 'B',
            //data의 자료형과 무관하게
            vueLink: 'http://127.0.0.1:5500/index.html'
        };
    }, 
    //data는 그 자체로 함수
    methods: { 
        //여기서 data의 값에 접근할 수 있는 방법: this.key ()
        //data에서 return하고 있는 객체를 병합해서 전역 Vue 인스턴스 객체로 만들어준다
        //다른 속성들도 그렇게 this로 접근할 수 있다
        //db에서 구조화된 html코드를 html로 표현하기 위해서는 {{}}으로 안 쓰고 v-html을 써야 한다
        outputGoal() { 
            const randomNumber = Math.random(); 
            if (randomNumber < 0.5) { 
                return this.courseGoalA;
                // 변수가 아니여서 그냥 courseGoalA를 쓰면 못 찾는다
            } else { 
                return this.courseGoalB;
            }
        }
    }
    //methods는 함수들을 담는 객체 : 이 안에서만 정의
});
//이 vue 앱을 만들기 위해 쓰는 객체
//속성이 정해져있다

app.mount('#user-goal')
// css selector로 선택한다