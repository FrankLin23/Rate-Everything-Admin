import Logo from '@/assets/react.svg';
import LoginForm from './form';

function Login() {
  return (
    <div className="h-full flex">
      <div className="fixed top-[24px] left-[24px] inline-flex items-center z-1">
        <Logo />
        <div className="ml-[4px] mr-[4px] text-[20px] text-blue-400">
          Rate-Everything-Admin
        </div>
      </div>
      <div className="relative flex-1 pb-[40px]">
        <div className="h-full flex items-center justify-center">
          <LoginForm />
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Login;

// .content {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// .content {
//     flex: 1;
//     position: relative;
//     padding-bottom: 40px;
//   }
