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
function AppProfile() {
    return (
        <>
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
