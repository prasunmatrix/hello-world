import logo from './logo.svg';
import './App.css';
//import Mycomponent from './components/Greet';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import  Greet1  from './components/Greet1';
import Message from './components/Message';
import Counter from './components/Counter';
import Greet2 from './components/Greet2';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';
import NameList1 from './components/NameList1';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form from './components/Form';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import PortalDemo from './components/PortalDemo';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Mycomponent/> */}
      <Greet/>
      <Greet1 name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet1>
      <Greet1 name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet1>
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Hello/>
      <Message/>
      <Counter/><br/>
      <Greet2 name="Messi" heroName="World cup"/><br/>
      <FunctionClick/><br/>
      <ClassClick/><br/>
      <EventBind/><br/>
      <ParentComponent/><br/>
      <UserGreetings/><br/>
      <NameList/><br/>
      <NameList1/><br/>
      <Stylesheet primary={true} />
      <Inline />
      <Form /><br/>
      <FragmentDemo /><br/>
      <Table/><br/>
      {/* <PureComp/> */}
      <ParentComp /><br/>
      <RefsDemo /><br/>
      <FocusInput /><br/>
      <PortalDemo /><br/>
      <ClickCounter /><br/>
      <HoverCounter /><br/>
      <ClickCounterTwo /><br/><br/>
      <UserProvider value="SAYAN">
        <ComponentC/>
      </UserProvider>

    </div>
  );
}

export default App;
