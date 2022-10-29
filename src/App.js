import Button from './Button'

const App = ()=> {
    return <div>
        <h1>Website Opener</h1>
        <h3>Which website do you want to open?</h3>
        <Button name="Google" link="https://google.com"/>
        <Button name="Github" link="https://github.com/CidNP"/>
        <Button name="Ipo Result" link="https://iporesult.cdsc.com.np/"/>
        <br></br>
        <Button name="Youtube" link="https://youtube.com"/>
        <Button name="Youtube" link="https://youtube.com"/>
        <Button name="DoMIC" link="https://mic.ku.edu.np"/>
        <Button name="StackOverflow" link="https://stackoverflow.com"/>
    </div>
}

export default App;