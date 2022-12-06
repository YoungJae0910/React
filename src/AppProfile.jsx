// import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
//1. 컴포넌트 안에는 태그를 하나만 사용해야한다
//2. 두개이상을쓰려면 태그로 한묶음을 만들어야한다
//3. 컴포넌트의 이름은 항상 첫글자가 대문자로 시작하여야한다
//4. className 으로  네임을 지정해주어야한다
//5. INLINE 스타일을 사용할수있는데 style={{}} 이렇게 사용해야한다
//6. js를 사용할때는 꼭 중괄호를 써야한다 변수명 접근시 중괄호로 묶을것 중요!
function AppProfile() {
    return (
        <>
            <Profile />
        </>
    );
}



export default AppProfile;
