import React from 'react';
import javaScrip from '../Home/images/js and node.png'
import jwt from '../Home/images/jwt.png'
import Node from '../Home/images/node js.png'
import sql from '../Home/images/sql-vs-nosql.png'

const Blog = () => {
    return (
        <div>
            <section className=" lg:py-2 sm:py-6 bg-green-100 dark:text-gray-100">
                <div className="container w-2/3 mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-xl lg:flex-row">
                        <img src={javaScrip} alt="" className="h-80 lg:w-80 md:w-full py-2 px-2 bg-emerald-400 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-emerald-400">
                            <span className="text-3xl text-white">What is the difference between javascript and NodeJS?</span>
                            <h3 className=" lg:text-lg md:text-sm text-black">1-NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side.Nodejs allows Javascript code to run outside the browser.Nodejs comes with a lot of modules and mostly used in web development. 2-Javascript is a Scripting language.It is mostly abbreviated as JS.It can be said that Javascript is the updated version of the ECMA script. </h3>

                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-xl lg:flex-row-reverse">
                        <img src={jwt} alt="" className="h-80 lg:w-80 md:w-full py-2 px-2 bg-emerald-400 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-emerald-400">
                            <span className="text-3xl text-white">What is JWT, and how does it work?</span>
                            <h3 className="text-xl text-xl text-black">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server..JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</h3>
                            
                            
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-xl lg:flex-row">
                        <img src={Node} alt="" className="h-80 lg:w-80 md:w-full py-2 px-2 bg-emerald-400 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-emerald-400">
                            <span className="text-3xl text-white">How does NodeJS handle multiple requests at the same time?</span>
                            <h3 className="text-xl text-black">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</h3>
                           
                            
                        </div>
                    </div>
                    <div className="flex flex-col mb-5 overflow-hidden rounded-md shadow-xl lg:flex-row">
                        <img src={sql} alt="" className="h-80 lg:w-80 md:w-full py-2 px-2 bg-emerald-400 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-emerald-400">
                            <span className="text-3xl font-semibold   text-white"> What is difference between SQL and NoSQL?</span>
                            <h3 className="text-xl text-black">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;