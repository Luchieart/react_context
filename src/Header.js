const Header = (props) => {
   
    return (
      <header >
<h1>{props.title}</h1>
      </header>
    )
  };

  Header.defaultProps={
    title:'Default Props'
  }
  
  export default Header
  