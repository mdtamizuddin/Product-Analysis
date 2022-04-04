import React from 'react'
import './Blogs.css'
import code from './code.png'
function Blogs() {
    return (
        <div className='mt-5 container'>
            <h1 className='text-center my-5 text-danger'>Context Api?</h1>
            <div className="blogs">

                <div className="content">
                    <h1>What is Context API?</h1>
                    <p className=''> React Context API is a way
                        for a React app to effectively produce global
                        variables that can be passed around. This
                        is the alternative to "prop drilling"
                        or moving props from grandparent to child to parent</p>
                </div>
                <div className="content">
                    <h1>How it works?</h1>
                    <p className=''>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store.</p>
                </div>

            </div>
            <h1 className='text-center my-5 text-danger'>Semantic Elements</h1>
            <div className="blogs">
                <div className="content">
                    <h1>What are Semantic Elements?</h1>
                    <p>Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way.</p>
                </div>
                <div className="content">
                    <h1>List of new semantic elements</h1>
                    <img className='code' src={code} alt="" />
                </div>
            </div>
            <h1 className='text-center my-5 text-danger'>Inline-block || Block Elements</h1>
            <div className="blogs">
                <div className="content">
                    <h1>Block Elements</h1>
                    <p>The elements that begin on a new line are known as block elements. A block element takes up the full width of the content. Unlike inline, there exists a top and bottom margin for these elements. Block-level elements may only appear inside the body tag. Block-level elements create a larger structure than inline elements.</p>
                </div>
                <div className="content">
                    <h1>Inline-Block Elements</h1>
                    <p> The display value of inline-block works similarly to inline with one exception: the height and width of that element become modifiable.</p>
                </div>
            </div>


        </div>
    )
}

export default Blogs