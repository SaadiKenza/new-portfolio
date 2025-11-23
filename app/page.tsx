export default function Home(){
return (
    <main>
      <div className="main-container">
        <div className="image">
            <img src="/logo.png" alt="HI" />
        </div>      
        <div className="content">
          <h1>Bonjour, Je m'appelle <span>Saadi Kenza</span></h1>
          
          <div className="typerwriter">
             Je suis <span></span>
          </div>        
          <p>
            Future ingénieure en génie électrique. Mon profil est consolidé par une approche d’ingénieurie industrielle centrée sur l’efficacité et la collaboration collective.
          </p>          
          <div className="skills">
            <i className="devicon-python-plain"></i>
            <i className="devicon-csharp-plain"></i>
            <i className="devicon-cplusplus-plain"></i>
            <i className="devicon-c-original"></i>
            <i className="devicon-html5-plain"></i>
            <i className="devicon-azuresqldatabase-plain"></i>
            <i className="devicon-javascript-plain"></i>
          </div>
        </div>
      </div>
    </main>
  );
}