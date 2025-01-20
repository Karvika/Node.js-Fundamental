# Node.js-Fundamental
Node.js is an open-source, cross-platform, server-side runtime environment that allows developers to run JavaScript code outside of a web browser. Built on Google Chrome's V8 JavaScript engine, Node.js is designed to create scalable and high-performance network applications.


# How Node.js Works?
Event Loop:
At the core of Node.js is the event loop, which allows it to handle thousands of concurrent connections without blocking threads.

Non-Blocking I/O: 
Node.js performs input/output operations asynchronously, ensuring high performance and responsiveness.

Modules: 
Node.js uses a modular system, allowing developers to import or require specific functionality into their applications. 

# Middleware Flow
=> Middleware functions are the core building blocks of how Express.js processes and handles HTTP       requests and responses.

=> Middleware in Express.js allows you to build modular, reusable code to handle tasks like routing, logging, authentication, error handling, and more.

When a request is made to an Express app:

1. The request is passed through a chain (or stack) of middleware functions.
2. Each middleware function processes the request and determines what happens next:
3. If it ends the response cycle, no further middleware is executed.
4. If it calls next(), the next middleware in the stack is executed.
