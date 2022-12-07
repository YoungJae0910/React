// import logo from './logo.svg';
import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';
//1. 컴포넌트 안에는 태그를 하나만 사용해야한다
//2. 두개이상을쓰려면 태그로 한묶음을 만들어야한다
//3. 컴포넌트의 이름은 항상 첫글자가 대문자로 시작하여야한다
//4. className 으로  네임을 지정해주어야한다
//5. INLINE 스타일을 사용할수있는데 style={{}} 이렇게 사용해야한다
//6. js를 사용할때는 꼭 중괄호를 써야한다 변수명 접근시 중괄호로 묶을것 중요!
//7. 컴포넌트를 처음부터 완벽하게 짜기보다는 만들다가 필요하면 재사용하는것이 좋다

//1. button 을 포함한 이벤트 js와 동일하게 온클릭이벤트를 사용한다
//2. function을 사용해도되고 화살표함수로 만들어도된다 안에 인자값을 event로 주고
//   alert창과 console.log(event)를찍어서 결과값을보자
//3. 버튼에 직접주는것도 좋지만 js 를 따로 만들어서 함수값만 주는것이 조금더 깔끔함
//4. 함수의 참조값인 함수의 이름을 전달해야하는데 뒤에 ()를 붙이게되면 
//   리턴이실행되면서 이벤트가 실행이되버려서 버그가 발생한다 자바스크립트 문법이니 꼭 기억하자
//5. 이벤트종류는 무엇이있는지 구글링해보자
function AppProfile() {

    const handleClick = (event) => {
        console.log(event);
        alert("클릭클릭!!!");
    }

    return (
        <>
            <button onClick={handleClick}>버튼</button>


            <Avatar
                image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
                NEW={true}
            />

            <Profile
                image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
                name='What`s your name?'
                title='Front ENd Developer'
                NEW={true}
            />

            <Profile
                image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
                name='What`s your name?'
                title='Back ENd Developer'
            />

            <Profile
                image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
                name='What`s your name?'
                title='Full Stack Developer'
            />
        </>
    );
}



export default AppProfile;
