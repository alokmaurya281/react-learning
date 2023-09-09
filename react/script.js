// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }

// ReactDOM.render(
//     <Navbar />,
//     document.getElementById("root")
// )
// function MainComponent(){
//     return(
//         <h1>Hi Im alok</h1>
//     )
// }

//         const page = (
//         <div>
//             <h1>Hi Thi div</h1>
//             <p>paragraph</p>
//         </div>
//         )


// // ReactDOM.render(
// //     <div>
// //     <MainComponent />
// //     </div>,
// //     document.getElementById("root")
// // )
// ReactDOM.render(
//     page ,
//     document.getElementById("root")
// )

// Navbar

// const navbar = (
//     <div>
//         <nav>
//             <h1>Navbar</h1>
//                 <ul>
//                     <li>Pricing</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                 </ul>
//             </nav>
//     </div>
// )
// ReactDOM.render(
//     navbar,
//     document.getElementById("root")
// )

function Header(){
    return(
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
                <ul>
                    <li>Menu</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainComponent(){
    return(
        <div>
            <h1>Welcome To React</h1>
            <ol>
                <li>It is very Good</li>
                <li>It is Compossable</li>
            </ol>
        </div>
    )
}

function Footer(){
    return(
        <footer>
            <small>
                 Copyright 2022. All Rights Reserverd.
            </small>
        </footer>
    )
}

function Page(){
    return(
        <div>
        <Header />
        <MainComponent />
        <Footer />
        </div>
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"))