import React from 'react';

const Blog = () => {
    return (
        <div className='bg-dark py-5 h-100' style={{ borderTop: '1px solid goldenrod', borderBottom: '1px solid goldenrod' }}>
            <h1 className='text-center fw-bold text-warning'>Some Blogs</h1>
            <div className="container py-5">
                <div className="row w-75 mx-auto py-5">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item bg-light">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <h4 className='fw-bold text-dark'> What is the difference between javascript and nodejs ?</h4>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">JavaScript VS Node.js boils down to the matter of a flexible and simple frontend programming language versus the framework that allows it to extend into the backend realm.

                                    JavaScript is a scripting language upon which most websites are based. It is often used in combination with HTML and CSS to render web pages, as JavaScript can be used to dynamically update HTML elements. It allows you to automatically refresh the page to update data, display information using cool visuals, and create interactive elements.

                                    Node.js is an environment that can run JavaScript code without a browser. It is built on Chrome’s V8 JavaScript engine. The Node.js environment can be run on OS X, Windows, and Linux. It also includes a multitude of JavaScript libraries, which allow developers to leverage open source components and tools to get their applications built faster.</div>
                            </div>
                        </div>
                        <div className="accordion-item bg-light">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    <h4 className='fw-bold text-dark'> What is the differences between sql and nosql databases?</h4>
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Here is the some of the key differences between SQL and NoSQL databases.

                                    SQL or the Structured Query Language is the most common and popular programming language for the relational database management system. It is a language designed to extract, store, insert, delete, update and manage data for structured data and strategic analysis.
                                    <h4 className='mb-1 fw-bold mt-3'> * Features of SQL :</h4>
                                    <ul>

                                        <li>Provide High-Performance Capabilities</li>
                                        <li>Handle Large Transactions with efficiency</li>
                                        <li>SQL is easy to learn and manage</li>
                                        <li>Open Source Programming Language</li>
                                        <li>Supports Data Definition Language and Data Manipulation Language to query the databases</li>
                                        <li>Suitable for every type of organization , large or small.</li>
                                        <li>NoSQL database provides a mechanism for storage and retrieval of data that is modelled other than tabular form. It was introduced by Carl Stroz in the year 1998 called a Non-relational database. Now, it stands for Not only SQL. It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form.</li>
                                    </ul>
                                    <h4 className='mb-1 fw-bold'> * Features of NoSQL :</h4>
                                    <ul>

                                        <li>NoSQL has higher scalability than other database management systems</li>
                                        <li>NoSQL allows the distribution of data on more than just one device.</li>
                                        <li>With NoSQL Database, you do not require specialized or complex hardware or storage solutions.</li>
                                        <li>Does not require data normalization</li>
                                        <li>Simple API for easy user interfaces</li>
                                        <li>Can store unstructured, semi-structured, or structured data.</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item bg-light">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <h4 className='fw-bold text-dark'> What is the purpose of JWT and how does it work?</h4>
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">SON Web Token (JWT) is an open standard for securely transmitting information between parties as JSON object.

                                    The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn’t have to completely rely on a datastore(database) to save session information.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;